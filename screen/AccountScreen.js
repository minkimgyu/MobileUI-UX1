import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button as PaperButton, Avatar } from 'react-native-paper';

import {ConvertConsumeData} from '../data/ConsumeData';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedAccountIdState, consumeState } from '../recoil/state';
import {bankData} from '../data/BankData';

const History = ({title, time, consumePrice, leftAsset, iconPath}) => {

    var options = { hour: "numeric", minute: "numeric", hour12: false };

    const dateToStr = (date) => {
        console.log(date)
        var localTime = date.toLocaleTimeString("ko-KR", options);
      
        return localTime
    }

    return(
        <TouchableOpacity onPress={() => console.log(props)} 
        style={{width:335, flexDirection: 'row', marginBottom:20, justifyContent: 'space-between', backgroundColor: '#FFFFFF'}}>

            <View style={{width:'auto', flexDirection: 'row'}}>
                <Avatar.Image style={{marginRight: 15, backgroundColor:'rgb(0,0,0,0)'}} size={48} source={iconPath}   /> 

                <View style={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{title}</Text>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{fontSize: 15, color:"#6C7682"}}>{dateToStr(time)}</Text>
                    </View>
                </View> 
            </View>

            <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color:"#0074FF"}}>{(consumePrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{fontSize: 13, color:"#6C7682"}}>{(leftAsset).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                </View>
            </View> 
        </TouchableOpacity>
    );
  }


function AccountScreen(props) {

    const storedSelectedAccountId = useRecoilValue(selectedAccountIdState);
    const storedAllAccountState = useRecoilValue(accountState);
    const selectedAccountData = storedAllAccountState[storedSelectedAccountId]; // 선택된 계좌 데이터

    const selectedAccountBankData = bankData[selectedAccountData.bankId]
    const selectedBankName = selectedAccountBankData.name
    const selectedAccountNumber = selectedAccountBankData.accountStartNumber + selectedAccountData.endNumber


    const storedAllConsumeState = useRecoilValue(consumeState);

    const dateToStr = (date) => {
        var month = date.getMonth()+1;
        var day = date.getDate();
      
        return month+'월 '+day+'일';
    }

    const IsSameDate = (time1, time2) => {
        if(time1.getMonth() == time2.getMonth() && time1.getDate() == time2.getDate())
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    const NowIncludeSameDate = (arr, time) => {
        for (let index = 0; index < arr.length; index++) {
            if(arr[index].time.getFullYear() == time.getFullYear() && arr[index].time.getMonth() == time.getMonth() && arr[index].time.getDate() == time.getDate()){
                return true;
            }
        }

        return false;
    }

    const MakeDateArray = () =>{
        let arr = new Array();

        for (let index = 0; index < storedAllConsumeState.length; index++) {

            const consumeData = storedAllConsumeState[index]

            if(NowIncludeSameDate(arr, consumeData.time) == false && consumeData.sendAccountId == storedSelectedAccountId){ // 보내는 아이디와 선택된 아이디가 같은 경우
                arr.push({id:index, time: consumeData.time});
            }
        }

        return arr.sort((a, b) => new Date(a.date) - new Date(b.date))
    }

    const ConsumeRecordList = () =>{
        const arr = MakeDateArray()
        return(
            arr.map((data) => {
                return(
                    <View key={data.id}>
                        <Text style={{marginLeft:10, fontSize: 13, marginTop:5, marginBottom:20}}>{dateToStr(data.time)}</Text>
                        {
                            storedAllConsumeState.map((consumeData) => {

                                if(IsSameDate(data.time, consumeData.time) && consumeData.sendAccountId == storedSelectedAccountId){ // 현제 계좌랑 기록이랑 같은 은행일 경우

                                    const storedReceivedData = storedAllAccountState[consumeData.receivedAccountId]
                                    const receiverName = storedReceivedData.ownerName
                                    const bankIcon = bankData[storedReceivedData.bankId].iconPath

                                    return (
                                        <History key={consumeData.id} title={receiverName} time={consumeData.time} 
                                        consumePrice={consumeData.consumePrice} leftAsset={consumeData.leftAsset} iconPath ={bankIcon}></History>
                                    );
                                }
                            })
                        }
                    </View>
                );
            })
        );
    }

    return (
    <>
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
            <View style={{width:355, marginLeft:35, marginTop: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15, textDecorationLine: 'underline'}} variant="titleLarge">
                    {selectedBankName} {selectedAccountNumber}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop:15}} variant="titleLarge">
                    {(selectedAccountData.asset).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </Text>
            </View>

            <View style={{width:'auto', marginTop:50, justifyContent: 'center', flexDirection: 'row'}}>
                <PaperButton style={{borderRadius: 5, width:'60%'}} mode="contained" buttonColor={'#65ABFF'} 
                onPress={() => props.navigation.navigate('SendScreen')}>
                    보내기
                </PaperButton>
            </View>

            <View style={{width:355, marginLeft:20, marginTop: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{fontSize: 17}} variant="titleLarge">내역</Text>
                <ConsumeRecordList></ConsumeRecordList>
            </View>

        </ScrollView>
    </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export default AccountScreen; // 외부로 노출 