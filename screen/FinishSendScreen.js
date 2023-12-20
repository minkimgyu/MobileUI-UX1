import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors } from 'react-native-paper';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, consumeState, selectedAccountIdState, sendAccountIdState, myState, moneyToSendState } from '../recoil/state';
import {bankData} from '../data/BankData';

import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { MotiView } from 'moti'

function FinishSendScreen(props) {
    // 돈 감소 추가

    const storedMoneyToSendState = useRecoilValue(moneyToSendState);

    const storedMyState = useRecoilValue(myState);
    const storedSelectedAccountId = useRecoilValue(selectedAccountIdState);
    const storedsendAccountId = useRecoilValue(sendAccountIdState);

    const [storedAllAccountState, accountStateSetter] = useRecoilState(accountState);
    const [storedConsumeState, consumeStateSetter] = useRecoilState(consumeState);

    const selectedAccountData = storedAllAccountState[storedSelectedAccountId]; // 선택된 계좌 데이터

    const receiveAccountData = storedAllAccountState[storedsendAccountId]; // 값을 전달할 계좌


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

    const SubtractMyAccountMoney = () => {

        let accountList = [...storedAllAccountState].map((item) => {
            if (item.id === storedSelectedAccountId) return { ...item, asset: item.asset - storedMoneyToSendState};
            else return item;
          });

        accountStateSetter(accountList)
    }

    const AddHistory = () => {

        const newHistory ={
            id: storedConsumeState.length,
            sendAccountId: storedSelectedAccountId,
            receivedAccountId: storedsendAccountId,

            time: new Date(),
            consumePrice: storedMoneyToSendState,
            leftAsset: storedAllAccountState[storedSelectedAccountId].asset - storedMoneyToSendState,
        }

        consumeStateSetter([...storedConsumeState, newHistory])
    }

    const ButtonFadeIn = () => (
        <MotiView
          from={{ opacity: 0, scale: 0, rotate: "-80deg"}}
          animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
          transition={{ type: 'timing', duration: 1000 }}
          >
           <Icon
                source="check-circle"
                color="#3182F7"
                size={84}
            />
        </MotiView>
      )

    return (
    // 뒤로 못 돌아가게 막아주기

    <View style={{height:'100%', backgroundColor:'white'}}>
        <View style={{width:'100%', marginTop: 150, flexDirection: 'column', alignItems: 'center'}}>
            <ButtonFadeIn/>
            
            
            <Text style={{fontWeight: 'bold', color:'#0074FF', fontSize: 25, marginTop:10 ,marginBottom:10}} variant="titleLarge">{ReturnPersonNameToSend(storedsendAccountId)}
                <Text style={{fontWeight: 'bold'}}>{ReturnBackTextToSend(storedsendAccountId)}</Text>
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 22, marginBottom:10}} variant="titleLarge">{storedMoneyToSendState.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원을</Text>
            <Text style={{fontWeight: 'bold', fontSize: 22}} variant="titleLarge">옮겼어요</Text>
        </View>


        <View style={{width:'100%', flexDirection: 'column', alignItems: 'center', marginTop: 270}}>
            <PaperButton style={{borderRadius: 5, width:'85%', marginTop:20, height:50, }} labelStyle={{marginTop:15, fontSize:17}} 
            mode="contained" buttonColor={'#0074FF'} onPress={() => {
                props.navigation.navigate('Side')
                AddHistory();
                SubtractMyAccountMoney();
            }}>
                확인
          </PaperButton>
        </View>
    </View>
    );
  }

  export default FinishSendScreen; // 외부로 노출 