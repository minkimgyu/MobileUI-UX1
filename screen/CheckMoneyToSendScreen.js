import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors } from 'react-native-paper';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedAccountIdState, sendAccountIdState, myState, moneyToSendState } from '../recoil/state';
import {bankData} from '../data/BankData';

function CheckMoneyToSendScreen(props) {

    const storedMyState = useRecoilValue(myState);
    const storedSelectedAccountId = useRecoilValue(selectedAccountIdState);
    const storedsendAccountId = useRecoilValue(sendAccountIdState);
    const storedAllAccountState = useRecoilValue(accountState);

    const storedMoneyToSendState = useRecoilValue(moneyToSendState);

    
    const selectedAccountData = storedAllAccountState[storedSelectedAccountId]; // 선택된 계좌 데이터

    const receiveAccountData = storedAllAccountState[storedsendAccountId]; // 값을 전달할 계좌

    console.log(storedsendAccountId)

    const receiveAccountBankData = bankData[receiveAccountData.bankId]
    const receivedAccountName = receiveAccountBankData.accountNameInPossession[receiveAccountData.accountNameId]
    const receiveAccountNumber = receiveAccountBankData.accountStartNumber + receiveAccountData.endNumber

    const selectedAccountBankData = bankData[selectedAccountData.bankId]
    const selectedAccountName = selectedAccountBankData.accountNameInPossession[selectedAccountData.accountNameId]

    const IsMyAccount = (accountIndex) => {
        if(storedMyState.accountIdsInPossession.includes(accountIndex)){
            return true
        }
        else
        {
            return false
        }
    }

    const ReturnPersonNameToSend = (accountIndex) => {
        if(IsMyAccount(accountIndex) == true)
        {
             return '내 ' + receivedAccountName + '으로';
        }
        else
        {
             return receiveAccountData.ownerName;
        }
     }

     const ReturnBackTextToSend = (accountIndex) => {
        if(IsMyAccount(accountIndex) == true)
        {
             return '';
        }
        else
        {
             return '님에게';
        }
     }

     const ReturnLeftText = (accountIndex) => {
        if(IsMyAccount(accountIndex) == true)
        {
             return '내 계좌에서 송금';
        }
        else
        {
             return selectedAccountData.ownerName;
        }
     }

    return (
    <View style={{height:'100%', backgroundColor:'white'}}>
        <View style={{width:'100%', marginTop: 190, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color:'#0074FF', fontSize: 23, marginBottom:10}} variant="titleLarge">{ReturnPersonNameToSend(storedsendAccountId)}
                <Text style={{fontWeight: 'bold'}}>{ReturnBackTextToSend(storedsendAccountId)}</Text>
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 23, marginBottom:10}} variant="titleLarge">{storedMoneyToSendState.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원을</Text>
            <Text style={{fontWeight: 'bold', fontSize: 23}} variant="titleLarge">옮길까요?</Text>
        </View>

        <View style={{width:'100%', flexDirection: 'column', alignItems: 'center', marginTop: 30}}>

            <View style={{width:'90%', marginTop: 190, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">받는 분에게 표시</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">{ReturnLeftText(storedsendAccountId)}</Text>
            </View>

            <View style={{width:'90%', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">출금 계좌</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">내 {selectedAccountName}</Text>
            </View>

            <View style={{width:'90%', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">입금 계좌</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}} variant="titleLarge">{receiveAccountBankData.name} {receiveAccountNumber}</Text>
            </View>

            <PaperButton style={{borderRadius: 5, width:'85%', marginTop:20, height:50, }} labelStyle={{marginTop:15, fontSize:17}} 
            mode="contained" buttonColor={'#0074FF'} 
            onPress={() => props.navigation.navigate('FinishSendScreen')}>
                다음
          </PaperButton>
        </View>
    </View>
    );
  }

  export default CheckMoneyToSendScreen; // 외부로 노출 