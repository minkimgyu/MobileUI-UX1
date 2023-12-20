import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, List, Divider, Icon, MD3Colors } from 'react-native-paper';
import CurrencyInput from 'react-native-currency-input';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedAccountIdState, sendAccountIdState, myState, moneyToSendState } from '../recoil/state';
import {bankData} from '../data/BankData';

function InputMoneyToSendScreen(props) {

    const [myValue, setValue] = React.useState(); // can also be null

    const moneyToSendStateSetter = useSetRecoilState(moneyToSendState)

    const storedMyState = useRecoilValue(myState);
    const storedSelectedAccountId = useRecoilValue(selectedAccountIdState);
    const storedsendAccountId = useRecoilValue(sendAccountIdState);
    const storedAllAccountState = useRecoilValue(accountState);

    
    const selectedAccountData = storedAllAccountState[storedSelectedAccountId]; // 선택된 계좌 데이터

    const receiveAccountData = storedAllAccountState[storedsendAccountId]; // 값을 전달할 계좌
    const receiveAccountBankData = bankData[receiveAccountData.bankId]
    const receivedAccountName = receiveAccountBankData.accountNameInPossession[receiveAccountData.accountNameId]
    const receiveAccountNumber = receiveAccountBankData.accountStartNumber + receiveAccountData.endNumber

    const selectedAccountBankData = bankData[selectedAccountData.bankId]
    const selectedAccountName = selectedAccountBankData.accountNameInPossession[selectedAccountData.accountNameId]

    const NavigationToNextScreen = () => {
        props.navigation.navigate('CheckMoneyToSendScreen')
        moneyToSendStateSetter(myValue)
    }

    const ReturnPersonNameToSend = () => {

        if(storedMyState.accountIdsInPossession.includes(storedsendAccountId)) // 내 계좌인 경우
        {
            return '내 ' + receivedAccountName + '으로';
        } 
        else
        {
            return receiveAccountData.ownerName + '님에게';
        }
    }

    return (
    <View style={{height:'100%', backgroundColor:'white'}}>
        <View style={{width:355, marginLeft:35, marginTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}} variant="titleLarge">내 {selectedAccountName}에서</Text>
            <Text style={{fontWeight: 'bold', color:'gray', fontSize: 16}} variant="titleLarge">
                잔액 {(selectedAccountData.asset).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </Text>
        </View>

        <View style={{width:355, marginLeft:35, marginTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}} variant="titleLarge">{ReturnPersonNameToSend()}</Text>
            <Text style={{fontWeight: 'bold', color:'gray', fontSize: 16}} variant="titleLarge">{receiveAccountBankData.name} {receiveAccountNumber}</Text>
        </View>

        <View style={{width:'100%', flexDirection: 'column', alignItems: 'center', marginTop: 30}}>
            <CurrencyInput style={{width:'85%', fontSize:25}} placeholder={'얼마나 옮길까요?'} contentStyle={{paddingLeft:0, fontSize:22, backgroundColor:'white'}}
                renderTextInput={textInputProps => <TextInput {...textInputProps}/>}
                caretHidden={true}
                keyboardType = 'numeric'
                value= {myValue}
                onChangeValue={setValue}
                precision='0'
                suffix="원"
                delimiter=","
            /> 

            <PaperButton style={{borderRadius: 5, width:'85%', marginTop:50, height:50, }} labelStyle={{marginTop:15, fontSize:17}} 
            mode="contained" buttonColor={'#0074FF'} 
            onPress={() => NavigationToNextScreen()}>
                다음
          </PaperButton>
        </View>

        
    </View>
    );
  }

  export default InputMoneyToSendScreen; // 외부로 노출 