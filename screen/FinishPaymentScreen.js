import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors, Card } from 'react-native-paper';

import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { productState, selectedItemIdState, selectedItemCountState, pointDiscountAmountState, myState, pointState, accountState, consumeState } from '../recoil/state';

function ReturnRandomInt(min, max){ 
    var randomNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randomNum;
}

function ReturnNumber(){ 
    let numArr = [];
    let numberLength = 7
    
    for (let index = 0; index < numberLength; index++) {
        numArr.push(ReturnRandomInt(0, 9));
    }

    return numArr;
}

function ReturnDate(){ 
    let time = new Date();

    const year = time.getFullYear().toString().substr(-2);
    const month = time.getMonth();
    const date = time.getDate();

    return year + '.' + month + '.' + date;
}



function FinishPaymentScreen(props) {
    const [expanded, setExpanded] = React.useState(true);

    const [storedPointDiscountAmount, pointDiscountAmountSetter] = useRecoilState(pointDiscountAmountState)

    const [storedPoint, pointStateSetter] = useRecoilState(pointState)

    const storedSelectedItemCount = useRecoilValue(selectedItemCountState)

    const storedProductState = useRecoilValue(productState)
    const storedSelectedItemIdState = useRecoilValue(selectedItemIdState)

    const nowSelectedItem = storedProductState[storedSelectedItemIdState];

    const storedMyState = useRecoilValue(myState)

    const handlePress = () => setExpanded(!expanded);


    const [storedAllAccountState, accountStateSetter] = useRecoilState(accountState);
    const [storedConsumeState, consumeStateSetter] = useRecoilState(consumeState);

    const SubtractMyAccountMoney = () => {

        let accountList = storedAllAccountState.map((item) => {
            if (item.id === storedMyState.mainAccountIdInPossession) return { ...item, asset: item.asset - (Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                * storedSelectedItemCount - storedPointDiscountAmount)};
            else return item;
          });
    
        accountStateSetter(accountList)
    }
    
    const AddHistory = () => {
    
        const newHistory ={
            id: storedConsumeState.length,
            sendAccountId: storedMyState.mainAccountIdInPossession,
            receivedAccountId: nowSelectedItem.sellerId,
    
            time: new Date(),
            consumePrice: (Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
            * storedSelectedItemCount - storedPointDiscountAmount),
            leftAsset: storedAllAccountState[storedMyState.mainAccountIdInPossession].asset - (Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
            * storedSelectedItemCount - storedPointDiscountAmount),
        }
    
        consumeStateSetter([...storedConsumeState, newHistory])
    }

    return (

    <View style={{height:'100%', backgroundColor:'white'}}>
        <ScrollView nestedScrollEnabled = {true} vertical={true} showsVerticalScrollIndicator={false} >
            <View style={{flexDirection: 'column', marginLeft:20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={styles.TitleStyle}>결제가 완료됐어요</Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:30}}>
                    <Text style={styles.PayInfoStyle}>{ReturnDate()}</Text>
                    <Text style={styles.PayInfoStyle}>|</Text>
                    <Text style={styles.PayInfoStyle}>주문번호 {ReturnNumber()}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', marginLeft:20, marginTop:20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={styles.textStyle}>주문 상품</Text>
                <View style={{flexDirection: 'row'}}>
                    <ItemCard path={nowSelectedItem.ImagePath} ></ItemCard>
                    <View style={{marginLeft:20}}>
                        <Text style={styles.ItemNameStyle}>{nowSelectedItem.manufacturingCompany}</Text>
                        <Text style={styles.ItemStyle}>{nowSelectedItem.name}</Text>
                        <Text style={styles.ItemStyle}>{nowSelectedItem.serialNumber}/{storedSelectedItemCount}개</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.DiscountStyle}>{(nowSelectedItem.price * storedSelectedItemCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                            <Text style={styles.PriceStyle}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCount - storedPointDiscountAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft:20, marginTop:20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <Text style={styles.textStyle}>배송지 정보</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft:20, marginTop:15, justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={styles.InfoNameStyle}>{storedMyState.name}</Text>
                    <Text style={styles.InfoStyle}>{storedMyState.phoneNumber}</Text>
                    <Text style={styles.InfoStyle}>{storedMyState.address}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'column', marginLeft:20, marginTop:20, marginBottom:120, width:'88%'}}>
                <Text style={styles.textStyle}>주문 금액</Text>
                <View style={{marginLeft:10, marginTop:20, marginRight:5}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.CountPriceStyle}>상품 금액</Text>
                        <Text style={styles.CountPriceStyle}>{(nowSelectedItem.price * storedSelectedItemCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                        <Text style={styles.CountPriceStyle}>상품 할인</Text>
                        <Text style={styles.CountPriceStyle}>{((Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCount) - nowSelectedItem.price * storedSelectedItemCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                        <Text style={styles.CountPriceStyle}>배송비</Text>
                        <Text style={styles.CountPriceStyle}>무료</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:20}}>
                    <Text style={styles.FinalPriceStyle}>총 결제 금액</Text>
                    <Text style={styles.FinalPriceStyle}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCount - storedPointDiscountAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                </View>
            </View>
        </ScrollView>

        <View style={{position:'absolute', height:100, bottom:0, borderRadius:10, width:'100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"#FFFFFF"}}>
            <PaperButton style={{borderRadius: 10, width:'85%', height:60, backgroundColor:"#3182F7", justifyContent: 'center'}} labelStyle={{fontSize:17, color:"#FFFFFF"}} 
                mode="contained" onPress={() => {
                    pointStateSetter({...storedPoint, asset: storedPoint.asset - storedPointDiscountAmount}); 
                    pointDiscountAmountSetter(0); 

                    AddHistory();
                    SubtractMyAccountMoney();
                    
                    props.navigation.navigate('Side');
                }}>
                    확인했어요
            </PaperButton>
        </View>
    </View>
    );
  }

  const ItemCard = ({path}) =>{
    return(
      <Card style={{marginTop:20}}>
        <Card.Cover style={{width:100, height:100}} source={path} />
      </Card>
    );
  }

  
  const styles = StyleSheet.create({
    TitleStyle: {
        marginTop:5,
        marginLeft:5,
        fontSize:25,
        color: 'black',
        fontWeight: 'bold',
    },
    PayInfoStyle: {
        marginTop:5,
        marginLeft:5,
        fontSize:13,
        color: '#59616B',
        fontWeight: 'bold',
    },
    InfoNameStyle: {
        marginTop:5,
        marginLeft:5,
        fontSize:15,
        color: 'black',
        fontWeight: 'bold',
    },
    InfoStyle: {
        marginTop:5,
        marginLeft:5,
        fontSize:15,
        color: 'black',
    },
    textStyle: {
        marginTop:20,
        marginLeft:5,
        fontSize:20,
        color: 'black',
        fontWeight: 'bold',
    },
    ItemNameStyle: {
        marginTop:20,
        marginLeft:5,
        fontSize:15,
        color: '#6C7682',
        fontWeight: 'bold',
    },
    ItemStyle: {
        marginTop:3,
        marginLeft:5,
        fontSize:15,
        color: '#6C7682',
    },
    DiscountStyle: {
        marginTop:3,
        marginLeft:5,
        fontSize:15,
        textDecorationLine: 'line-through',
        color: '#6C7682',
    },
    PriceStyle: {
        marginTop:3,
        marginLeft:5,
        fontSize:15,
        color: 'black',
    },
    CountPriceStyle: {
        marginTop:3,
        marginLeft:5,
        fontSize:15,
        fontWeight:'bold',
        color: '#59616B',
    },
    FinalPriceStyle: {
        marginTop:3,
        marginLeft:5,
        fontSize:20,
        fontWeight:'bold',
        color: '#0074FF',
    }
  });

  export default FinishPaymentScreen; // 외부로 노출 