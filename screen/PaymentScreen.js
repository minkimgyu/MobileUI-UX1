import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors, Card } from 'react-native-paper';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { myState, productState, selectedItemIdState, selectedItemCountState, accountState, selectedAccountIdState, pointState, pointDiscountAmountState } from '../recoil/state';

import AssetLabel from '../component/AssetLabel';
import {accountHideSetting} from '../data/AccountData';
import {bankData} from '../data/BankData';

import CurrencyInput from 'react-native-currency-input';

function PaymentScreen(props) {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const storedProductState = useRecoilValue(productState)
    const storedSelectedItemIdState = useRecoilValue(selectedItemIdState)

    const nowSelectedItem = storedProductState[storedSelectedItemIdState];

    const storedSelectedItemCountState = useRecoilValue(selectedItemCountState)

    const id = useRecoilValue(selectedAccountIdState)

    const account = useRecoilValue(accountState)
    const selectedAccount = account[id]

    const storedBankData = bankData[selectedAccount.bankId]
    const accountName = storedBankData.accountNameInPossession[selectedAccount.accountNameId]

    const [modalVisible1, setModalVisible1] = React.useState(false);
    const [myValue, setValue] = React.useState(0); // can also be null

    const [discountApplied, SetDiscountApplied] = React.useState(false); // can also be null

    const storedPointData = useRecoilValue(pointState)
    const [pointDiscountAmount, setPointDiscountAmount] = useRecoilState(pointDiscountAmountState)

    const OnCurrencyChangeRequested = (value) =>{

        let tmp = value;
        console.log(value);
        if(storedPointData.asset < tmp)
        {
            tmp = storedPointData.asset
        }
        setValue(tmp)
    };

    const OnAutoFillRequested = () =>{

        setValue(storedPointData.asset)
    };

    const OnDiscountRequested = () =>{
        SetDiscountApplied(true)
        setPointDiscountAmount(myValue);
        setModalVisible1(!modalVisible1)
    };


    const ReturnDiscountAmount = () =>{
        if(discountApplied == false)
        {
            return storedPointData.asset
        }
        else
        {
            console.log("point")
            return -pointDiscountAmount
        }
    };

    return (

    <View style={{height:'100%', width:'100%', flexDirection: 'column', alignItems: 'center'}}>
        <View style={{flexDirection: 'column', alignItems: 'center', marginTop:150}}>
            <Text style={styles.textStyle}>{account[nowSelectedItem.sellerId].ownerName} 공동구매</Text>
            <Text style={styles.PriceStyle}>{(storedSelectedItemCountState * Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio)) - myValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
        </View>
        
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor:'white', width:'80%', height:'8%', borderRadius:10, marginTop:50}}>
            <Text style={styles.PointStyle}>토스 포인트</Text>

            <View style={{flexDirection: 'row', width:130, marginRight:15, height:45, borderRadius:10, justifyContent: 'space-between', alignItems:'center', backgroundColor:'#F3F4F6'}}>
                <Text style={{fontSize: 16, textAlign:'center', marginLeft:10}}> {ReturnDiscountAmount()}원 </Text>

                <Text style={{fontSize: 16, color:'#DADEE1', textAlign:'center'}}> | </Text>

                <TouchableOpacity style={{width:40, height:50, marginRight:10, flexDirection: 'column', justifyContent: 'center'}} onPress={() => setModalVisible1(!modalVisible1)}>
                    <Text style={{fontSize: 16, textAlign:'center'}}> 쓰기 </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection: 'column', alignItems: 'center', backgroundColor:'white', width:'80%', height:'15%', borderRadius:10, marginTop:10}}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', width:'100%', marginLeft:30, marginTop:10}}>
                <Text style={{fontSize: 16, textAlign:'center'}}> 결제 수단 </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width:'100%'}}>
                <AssetLabel 
                    OnLabelPressed={()=> console.log("OnLabelPressed")}
                    OnButtonPressed={()=> console.log("OnButtonPressed")}
                    labelData={{title:accountName, content:selectedAccount.asset, iconPath:storedBankData.iconPath}}
                    setting={accountHideSetting}>
                </AssetLabel>
            </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:180}}>
            <PaperButton style={{borderRadius: 10, width:'85%', height:60, backgroundColor:"#3182F7", justifyContent: 'center'}} labelStyle={{fontSize:17, color:"#FFFFFF"}} 
                mode="contained" onPress={()=> props.navigation.navigate('FinishPaymentScreen')}>
                    동의하고 결제하기
            </PaperButton>
        </View>


        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible1}>

            <Pressable
                style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}
                onPress={() => setModalVisible1(!modalVisible1)}>
            </Pressable>

            <View style={styles.centeredView}>
                <View style={styles.modalView1}>
                <Text style={styles.modalText}>포인트를 얼마나 쓸까요?</Text>
                <Text style={styles.modalText1}>보유 포인트 {storedPointData.asset}원</Text>

                <CurrencyInput style={{width:'100%', fontSize:25, marginTop:30}} placeholder={'얼마나 옮길까요?'} contentStyle={{paddingLeft:0, fontSize:22, backgroundColor:'white'}}
                    renderTextInput={textInputProps => <TextInput {...textInputProps}/>}
                    caretHidden={true}
                    keyboardType = 'numeric'
                    value= {myValue}
                    onChangeValue={OnCurrencyChangeRequested}
                    precision='0'
                    suffix="원"
                    delimiter=","
                />

                <View style={{flexDirection: 'column', justifyContent: 'flex-start', width:'100%'}}>

                    <PaperButton style={{borderRadius: 5, marginTop:10, height:45, width:'45%'}} labelStyle={{marginTop:15, fontSize:17, color:'#59616B'}} 
                        mode="contained" buttonColor={'#F3F4F6'} 
                        onPress={OnAutoFillRequested}>
                            전액 사용
                    </PaperButton>

                    <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'center'}}>
                    

                    <PaperButton style={{borderRadius: 5, marginTop:30, height:45, width: '100%' }} labelStyle={{marginTop:15, fontSize:17}} 
                        mode="contained" buttonColor={'#0074FF'} 
                        onPress={OnDiscountRequested}>
                            확인
                    </PaperButton>

                    </View>
                </View>
                </View>
            </View>
        </Modal>

    </View>
    );
  }



  const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        top:80,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView1: {
        marginTop:100,
        backgroundColor: 'white',
        borderRadius: 20,
        width:395,
        height:330,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        margin:5,
        borderRadius: 5,
        width:80,
        height:80,
        // elevation: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
      },
      buttonOpen: {
        backgroundColor: '#B0B9C2"',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      modalText: {
        width:'100%',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'left',
      },
      modalText1: {
        marginTop: 15,
        width:'100%',
        fontSize: 13,
        textAlign: 'left',
      },









    textStyle: {
        fontSize:20,
        color: '#59616B',
    },
    PriceStyle: {
        fontSize:35,
        color: 'black',
    },
    PointStyle: {
        marginLeft:20,
        fontSize:15,
        color: 'black',
    },
  });

  export default PaymentScreen; // 외부로 노출 