import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, Searchbar, List, Divider } from 'react-native-paper';

import {accountSetting, accountData} from '../data/AccountData';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';

import { accountState, selectedAccountIdState, sendAccountState, myState, consumeState, sendAccountIdState } from '../recoil/state';
import {bankData} from '../data/BankData';

  const SendLabel = ({title, content, iconPath, index, navigation}) =>{

    const sendAccountIdSetter = useSetRecoilState(sendAccountIdState)

    const GoToNextScreen = () => {
        sendAccountIdSetter(index)
        navigation.navigate('InputMoneyToSendScreen')
    }

    return(
        <TouchableOpacity onPress={() => GoToNextScreen()} //  {myAccountData: myAccountData, sendAccountData: sendAccountData }
        style={{width:335, flexDirection: 'row', marginHorizontal:20, marginBottom:20, justifyContent: 'space-between', backgroundColor: '#FFFFFF'}}>

            <View style={{flexDirection: 'row'}}>
                <Avatar.Image style={{marginRight: 15, backgroundColor:'rgb(0,0,0,0)'}} size={48} source={iconPath}/> 

                <View style={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{title}</Text>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{fontSize: 13}}>{content}</Text>
                    </View>
                </View> 
            </View>
        </TouchableOpacity>
    );
  }

  
function SendScreen(props) {

    const storedMyState = useRecoilValue(myState);
    const storedConsumeState = useRecoilValue(consumeState);
    const storedAllAccountState = useRecoilValue(accountState);
    const storedSelectedAccountIdState = useRecoilValue(selectedAccountIdState);

    const [value, setValue] = React.useState('account');

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        console.log(searchQuery)
    }

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const ShowAccount = (state) => {
        if(state == 'account') return 'flex';
        else return 'none';
    }

    const ShowContact = (state) => {
        if(state == 'contact') return 'flex';
        else return 'none';
    }

    const SendRecordList = ({navigation}) => {

        const idsInList = []

        return(
            storedConsumeState.map((consumeData) => {
                // 이 중에서 내 계좌에서 보낸 경우
                // 중복 허용하지 않음
    
                if(storedMyState.accountIdsInPossession.includes(consumeData.sendAccountId) == true && idsInList.includes(consumeData.receivedAccountId) == false)
                {
                    idsInList.push(consumeData.receivedAccountId);

                    const storedReceiveAccount = storedAllAccountState[consumeData.receivedAccountId]
                    const storedAccountBankData = bankData[storedReceiveAccount.bankId]
                    const accountNumber = storedAccountBankData.accountStartNumber + storedReceiveAccount.endNumber

                    return (
                        <SendLabel 
                        key={consumeData.id} 
            
                        index = {consumeData.receivedAccountId}
                        title = {storedReceiveAccount.ownerName}
                        content = {storedAccountBankData.name.substring(0, 2) + " " + accountNumber}
                        iconPath = {storedAccountBankData.iconPath}
                        navigation= {navigation}>
            
                        </SendLabel>
                    );
                }
            })
        );
    };

    const AccountList = ({navigation}) => {

        return(
            storedAllAccountState.map((accountData) => {

                if(storedMyState.accountIdsInPossession.includes(accountData.id) && accountData.id != storedSelectedAccountIdState)
                {
                    console.log(storedMyState.accountIdsInPossession, accountData.id)
                    const storedAccountBankData = bankData[accountData.bankId]
                    const accountName = storedAccountBankData.accountNameInPossession[accountData.accountNameId]
                    const accountNumber = storedAccountBankData.accountStartNumber + accountData.endNumber

                    return (
                        <SendLabel 
                        key={accountData.id} 

                        index = {accountData.id}
                        title = {accountName}
                        content = {storedAccountBankData.name.substring(0, 2) + " " + accountNumber}
                        iconPath = {storedAccountBankData.iconPath}
                        navigation= {navigation}>
        
                        </SendLabel>
                    );
                }
            })
        );
    };

    return (
    <View style={{backgroundColor:'white', flex:1}}>

        <View style={{width:355, marginLeft:35, marginTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}} variant="titleLarge">어디로 돈을 보낼까요?</Text>
        </View>

        <View style={{width:'auto', marginTop:25, flexDirection: 'column', alignItems: 'center'}}>
            {/* <SegmentedButtons style={{width:'80%'}}
                value={value}
                onValueChange={setValue}
                buttons={[
                {
                    value: 'account',
                    label: '계좌',
                    checkedColor: '#65ABFF',
                    backgroundColor: 'white',
                    style: {
                        borderRadius: 10,
                      },
                },
                {
                    value: 'contact',
                    label: '연락처',
                    checkedColor: '#65ABFF',
                    backgroundColor: 'white',
                    style: {
                        borderRadius: 10,
                      },
                },
                ]}
            /> */}

            
            <TouchableOpacity onPress={()=> props.navigation.navigate('InputAccountScreen')} style={{width:'85%', marginTop: 20, display:ShowAccount(value), flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#FFFFFF', padding: 10}}>
                <Text style={{width:'100%', fontSize: 22, borderBottomColor:'gray', borderBottomWidth:1}} variant="titleLarge">계좌번호 입력</Text>
            </TouchableOpacity>

            {/* <Searchbar style={{width:'80%', backgroundColor:'#F3F4F6', borderRadius:10, marginTop:20, display:'flex'}}
                placeholder="검색 / 직접 입력"
                onChangeText={onChangeSearch}
                value={searchQuery}
            /> */}
        </View>

        <ScrollView style={{backgroundColor:'white', display:ShowAccount(value)}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <List.Section style={{width:'95%'}}>
                    <List.Accordion title="내 계좌" titleStyle={{fontSize:18, fontWeight: 'bold'}} style={{backgroundColor:"white"}}>
                        <AccountList navigation={props.navigation}></AccountList>
                    </List.Accordion>
                </List.Section>

                <Text style={{width:'88%', fontWeight: 'bold', fontSize: 18, marginBottom:20}}>최근 보낸 계좌</Text>
                <SendRecordList navigation={props.navigation}></SendRecordList>
            </View>
        </ScrollView>
        

        <ScrollView style={{backgroundColor:'white', display:ShowContact(value)}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'column', alignItems: 'center', paddingTop:20}}>
            </View>
        </ScrollView>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export default SendScreen; // 외부로 노출 