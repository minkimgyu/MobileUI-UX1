import { useState, React} from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button as PaperButton } from 'react-native-paper';

import AssetLabel from '../component/AssetLabel';
import {accountSetting, accountData, accountNavigation, ConvertAccountData} from '../data/AccountData';
import {pointSetting, pointData} from '../data/PointData';

import { accountState, selectedAccountIdState, myState, pointState } from '../recoil/state';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import {bankData} from '../data/BankData';


function TotalAssetScreen(props) {
  const storedAccountState = useRecoilValue(accountState);
  const storedMyState = useRecoilValue(myState);

  const storedPoint = useRecoilValue(pointState)

  const MainAccountList = ({navigation, setting}) => {
    const setIndexUseSetRecoilState = useSetRecoilState(selectedAccountIdState); // 값을 변경하는 함수만 반환

    return (
      storedAccountState.map((data) => {

          if(storedMyState.mainAccountIdInPossession == data.id && storedMyState.accountIdsInPossession.includes(data.id))
          {
            const accountBankData = bankData[data.bankId]
            const accountName = accountBankData.accountNameInPossession[data.accountNameId]

            return (
              <AssetLabel 
                key={data.id} 
                OnLabelPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressLabel)}} // GoToAccountScreen
                OnButtonPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressButton)}} // GoToSendScreen
                labelData={{title:accountName, content:data.asset, iconPath:accountBankData.iconPath}}
                navigation={navigation} 
                setting={setting}>
              
            </AssetLabel>
            );
          }
      })
    );
  };

  const OtherAccountList = ({navigation, setting}) => {
    const setIndexUseSetRecoilState = useSetRecoilState(selectedAccountIdState); // 값을 변경하는 함수만 반환

    return (
      storedAccountState.map((data) => {
          if(storedMyState.mainAccountIdInPossession != data.id && storedMyState.accountIdsInPossession.includes(data.id))
          {
            const accountBankData = bankData[data.bankId]
            const accountName = accountBankData.accountNameInPossession[data.accountNameId]

            return (
              <AssetLabel 
                key={data.id}
                OnLabelPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressLabel)}} // GoToAccountScreen
                OnButtonPressed={()=> {setIndexUseSetRecoilState(data.id); navigation.navigate(accountNavigation.whenPressButton)}} // GoToSendScreen
                labelData={{title:accountName, content:data.asset, iconPath:accountBankData.iconPath}}
                navigation={navigation} 
                setting={setting}>

              </AssetLabel>
            );
          }
      })
    );
  };

  function ReturnTotalAsset(includePoint)
  {
    let tmpAsset = 0;

    if(includePoint == true)
    {
      const getPointState = useRecoilValue(pointState)
      tmpAsset += getPointState.asset
    }

    for (let index = 0; index < storedAccountState.length; index++) {
      if(storedMyState.accountIdsInPossession.includes(index)){
        tmpAsset += storedAccountState[index].asset;
      }
    }

    return tmpAsset
  }

    return (
      <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
        <View style={{width:355, marginLeft:35, marginTop: 20, marginBottom: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={{fontWeight: 'bold', marginTop: 7, fontSize: 20}} variant="titleLarge">총 자산</Text>
              <Text style={{fontWeight: 'bold', marginTop: 15, fontSize: 25}} variant="titleLarge">{ReturnTotalAsset(true).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
        </View>

        <View style={{width:355, marginLeft:35, marginTop: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', marginTop: 7, fontSize: 15}} variant="titleLarge">계좌</Text>
            <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 20}} variant="titleLarge">{ReturnTotalAsset(false).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
          </View>

          <PaperButton style={{borderRadius: 5, width:'30%', marginRight:40}} mode="contained" buttonColor={'#65ABFF'} onPress={() => console.log("Pressed")}>
            계좌 추가
          </PaperButton>
        </View>
        
        <View style={{width:355, marginLeft:35, marginTop: 15, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 15}} variant="titleLarge">입출금</Text>
            <MainAccountList navigation={props.navigation} setting={accountSetting}></MainAccountList>
        </View>

        <View style={{width:355, marginLeft:35, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 15}} variant="titleLarge">일반</Text>
          <OtherAccountList navigation={props.navigation} setting={accountSetting}></OtherAccountList>
        </View>

        <View style={{width:355, marginLeft:35, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <Text style={{fontWeight: 'bold', marginTop: 10, fontSize: 15}} variant="titleLarge">포인트 · 페이 머니</Text>
            <AssetLabel labelData={{title:storedPoint.name, content:storedPoint.asset, iconPath:storedPoint.iconPath}} 
            navigation={props.navigation} setting={pointSetting}></AssetLabel> 
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

  export default TotalAssetScreen; // 외부로 노출 