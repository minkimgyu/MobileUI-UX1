import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors, Card } from 'react-native-paper';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { myState, productState, selectedItemIdState, selectedItemCountState } from '../recoil/state';

function CheckInfoBeforeBuyScreen(props) {
    const [expanded, setExpanded] = React.useState(true);

    const storedMyState = useRecoilValue(myState)

    const storedProductState = useRecoilValue(productState)
    const storedSelectedItemIdState = useRecoilValue(selectedItemIdState)

    const nowSelectedItem = storedProductState[storedSelectedItemIdState];

    const storedSelectedItemCountState = useRecoilValue(selectedItemCountState)

    const handlePress = () => setExpanded(!expanded);
    return (

    <View style={{height:'100%', backgroundColor:'white'}}>
        <View style={{flexDirection: 'row', marginLeft:20, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Text style={styles.textStyle}>주소</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft:20, marginTop:15, justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={styles.InfoNameStyle}>{storedMyState.name}</Text>
                <Text style={styles.InfoStyle}>{storedMyState.phoneNumber}</Text>
                <Text style={styles.InfoStyle}>{storedMyState.address}</Text>
            </View>

            <PaperButton style={{borderRadius: 5, marginRight:20, fontSize:10, width:75, height:40, backgroundColor:"#3182F7", textAlign: 'center'}} labelStyle={{fontSize:13.5, color:"#FFFFFF"}} 
                mode="contained" onPress={() => console.log("Pressed")}>
                    수정
            </PaperButton>
        </View>

        <View style={{flexDirection: 'column', marginLeft:20, marginTop:40, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Text style={styles.textStyle}>주문 상품</Text>
            <View style={{flexDirection: 'row'}}>
                <ItemCard imgPath={nowSelectedItem.ImagePath}></ItemCard>
                <View style={{marginLeft:20}}>
                    <Text style={styles.ItemNameStyle}>{nowSelectedItem.manufacturingCompany}</Text>
                    <Text style={styles.ItemStyle}>{nowSelectedItem.name}</Text>
                    <Text style={styles.ItemStyle}>{nowSelectedItem.serialNumber}/{storedSelectedItemCountState}개</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.DiscountStyle}>{(nowSelectedItem.price * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                        <Text style={styles.PriceStyle}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection: 'column', marginLeft:20, marginTop:40, width:'88%'}}>
            <Text style={styles.textStyle}>주문 금액</Text>
            <View style={{marginLeft:10, marginTop:20, marginRight:5}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.CountPriceStyle}>상품 금액</Text>
                    <Text style={styles.CountPriceStyle}>{(nowSelectedItem.price * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                    <Text style={styles.CountPriceStyle}>상품 할인</Text>
                    <Text style={styles.CountPriceStyle}>{((Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCountState) - nowSelectedItem.price * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                    <Text style={styles.CountPriceStyle}>배송비</Text>
                    <Text style={styles.CountPriceStyle}>무료</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:20}}>
                <Text style={styles.FinalPriceStyle}>총 결제 금액</Text>
                <Text style={styles.FinalPriceStyle}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:40}}>
            <PaperButton style={{borderRadius: 10, width:'85%', height:60, backgroundColor:"#3182F7", justifyContent: 'center'}} labelStyle={{fontSize:17, color:"#FFFFFF"}} 
                mode="contained" onPress={()=> props.navigation.navigate('PaymentScreen')}>
                    동의하고 {(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) 
                        * storedSelectedItemCountState).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 결제
            </PaperButton>
        </View>
    </View>
    );
  }

  const ItemCard = ({imgPath}) =>{
    return(
      <Card style={{marginTop:20}}>
        <Card.Cover style={{width:100, height:100}} source={imgPath} />
      </Card>
    );
  }

  
  const styles = StyleSheet.create({
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

  export default CheckInfoBeforeBuyScreen; // 외부로 노출 