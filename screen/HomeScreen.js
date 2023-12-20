import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, Button as PaperButton, Appbar, Drawer, IconButton, MD3Colors, Avatar} from 'react-native-paper';

import {Image, ScrollView} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import AssetLabel from '../component/AssetLabel';

import {bankData} from '../data/BankData';
import {pointSetting, pointData} from '../data/PointData';
import {consumeLabelSetting, consumeLabelData} from '../data/ConsumeData';
import {accountSetting, accountData, accountNavigation} from '../data/AccountData';
import {myData} from '../data/MyData';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedAccountIdState, pointState } from '../recoil/state';

const Asset = ({props}) =>{
  const setIndexUseSetRecoilState = useSetRecoilState(selectedAccountIdState); // 값을 변경하는 함수만 반환
  const account = useRecoilValue(accountState)

  const storedPoint = useRecoilValue(pointState);

  const AccountList = ({navigation, setting}) => {

    return (
      account.map((data) => {
        const storedBankData = bankData[data.bankId]
        const accountName = storedBankData.accountNameInPossession[data.accountNameId]

        if(myData.accountIdsInPossession.includes(data.id))
        {
          return (
            <AssetLabel 
              key={data.id}
              OnLabelPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressLabel)}}
              OnButtonPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressButton)}}
              labelData={{title:accountName, content:data.asset, iconPath:storedBankData.iconPath}}
              setting={setting}>
  
            </AssetLabel>
          );
        }
      })
    );
  };

  console.log(storedPoint.asset);

  const style = { width:350, height:'auto', marginBottom: 30, justifyContent: 'center', alignItems: 'center', 
  backgroundColor: 'white', borderRadius: 20}
  return(
        <View style={style}>
          <View style={{width:315, marginLeft:5, marginTop: 5, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', flex: 1, marginTop: 7}} variant="titleLarge">자산</Text>

            <IconButton
              icon="chevron-right"
              iconColor="#B0B9C2"
              size={35}
              onPress={() => props.navigation.navigate('TotalAssetScreen')}
            />
          </View>

          <AccountList navigation={props.navigation} setting={accountSetting} ></AccountList>
            {/* Account Data */}
          <AssetLabel labelData={{title:storedPoint.name, content:storedPoint.asset, iconPath:storedPoint.iconPath}} navigation={props.navigation} setting={pointSetting}></AssetLabel> 
          {/* Point Data */}
        </View>
  );
}
  
const Comsume = ({props}) =>{

  const style = { width:350, height:'auto', marginBottom: 30, justifyContent: 'center', alignItems: 'center', 
  backgroundColor: 'white', borderRadius: 20}
  return(
        <View style={style}>

          <View style={{width:315, marginTop: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', flex: 1}} variant="titleLarge">소비</Text>
          </View>

          <AssetLabel labelData={{title:consumeLabelData.title, content:consumeLabelData.asset, iconPath:consumeLabelData.iconPath}} data={consumeLabelData} navigation={props.navigation} setting={consumeLabelSetting}></AssetLabel>
        </View>
  );
}
  
const QuickTab = (props) =>{

  const style = { width:120, height:'auto', marginBottom: 20, marginRight: 30, backgroundColor: 'white', borderRadius: 20}
  return(
        <View style={style}>
          <View style={{marginLeft: 20, marginTop: 20, justifyContent: 'left', alignItems: 'left'}}>
            <Text style={{fontSize:10}} variant="titleLarge">포인트 받는</Text>
            <Text style={{fontWeight: 'bold', fontSize:15}} variant="titleLarge">오늘의</Text>
            <Text style={{fontWeight: 'bold', fontSize:15, marginBottom:10}} variant="titleLarge">행운 복권</Text>
            <Avatar.Image style={{marginLeft: 40}} size={42} source={require('.././assets/toss-logo.png')}   /> 
          </View>
        </View>
  );
}
  
function HomeScreen(props) {
  const _handleSearch = () => console.log('Searching');

  return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor : "rgb(243, 244, 246 )"}}>
        {/* <Text variant="headlineMedium">Home!</Text> */}

            <Appbar.Header style={{backgroundColor : "rgb(243, 244, 246 )"}}>
  
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:10}}>
                <Appbar.Content
                    title={
                      <Image source={require('.././assets/toss-logo.png')}
                                style={{ height:'40%',width:'40%' }}
                        />
                      }
                    titleStyle={{backgroundColor: "red",}}
                    style={{alignItems: "left"}}
                />
  
              
                <Appbar.Action icon="bell" style={{marginRight:-5}} onPress={_handleSearch} color="#b0b9c2"/>
                <Appbar.Action icon="reorder-horizontal" style={{marginRight:15}} onPress={() => console.log("Pressed")} color="#b0b9c2" />
              </View>
              
            </Appbar.Header>
  
  
          {/* showsVerticalScrollIndicator 스크롤 */}
          <ScrollView nestedScrollEnabled = {true} vertical={true} showsVerticalScrollIndicator={false} style={{backgroundColor:"rgb(243, 244, 246 )"}}>
  
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
                <Asset props={props}>
                </Asset>
  
                <Comsume props={props}>
                </Comsume>
  
                <ScrollView nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true} 
                style={{backgroundColor:"rgb(243, 244, 246 )", marginBottom: 50, paddingLeft: 20}}>
                  
                  <QuickTab></QuickTab>
                  <QuickTab></QuickTab>
                  <QuickTab></QuickTab>
  
                </ScrollView>
  
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
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default HomeScreen; // 외부로 노출 