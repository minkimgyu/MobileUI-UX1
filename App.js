import React,{useState} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, Text, BottomNavigation, Button as PaperButton, Appbar, Drawer, IconButton, MD3Colors, Avatar, Searchbar, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Image, ScrollView} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { createDrawerNavigator } from '@react-navigation/drawer';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Component from 'react-native-paper/lib/typescript/components/Typography/Text';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import HomeScreen from './screen/HomeScreen';
import EventScreen from './screen/EventScreen';
import {PayScreen, SmallItemCard} from './screen/PayScreen';

import TotalAssetScreen from './screen/TotalAssetScreen';
import AccountScreen from './screen/AccountScreen';
import SendScreen from './screen/SendScreen';
import InputAccountScreen from './screen/InputAccountScreen';
import InputMoneyToSendScreen from './screen/InputMoneyToSendScreen';
import CheckMoneyToSendScreen from './screen/CheckMoneyToSendScreen';
import FinishSendScreen from './screen/FinishSendScreen';

import ItemScreen from './screen/ItemScreen';
import CheckInfoBeforeBuyScreen from './screen/CheckInfoBeforeBuyScreen';
import PaymentScreen from './screen/PaymentScreen';
import FinishPaymentScreen from './screen/FinishPaymentScreen';

import TestScreen from './screen/TestScreen';
import { RecoilRoot } from 'recoil';


import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';


export default MyComponent;

function Side()
{
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"

  return(
    <Tab.Navigator 

    activeColor="#181F29"
    inactiveColor="#B0B9C2"
  
    barStyle={{ 
      elevation:10,
      borderWidth: 1,

      backgroundColor: '#FFFFFF', overflow: 'hidden', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="home-variant" size={30} color={focused ? "#181F29" : "#B0B9C2"} />;
          },
        }}
      />

      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          tabBarLabel: '페이',
          tabBarIcon: ({ focused, color }) => {
            return <Icon name="shopping" size={30} color={focused ? "#181F29" : "#B0B9C2"} />;
          },
        }}
      />


      <Tab.Screen
        name="Settings"
        component={EventScreen}
        options={{
          tabBarLabel: '이벤트',
         tabBarIcon: ({ focused, color }) => {
            return <Icon name="diamond" size={30} color={focused ? "#181F29" : "#B0B9C2"} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function MyComponent() {
  return (
    <SafeAreaProvider>
    
      <RecoilRoot>
        <NavigationContainer>


          <Stack.Navigator>
            <Stack.Screen name="Side" component={Side} options={{headerShown: false}}/>
            <Stack.Screen name="TotalAssetScreen" component={TotalAssetScreen} options={{ title: '', headerShadowVisible: false}}/>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="SendScreen" component={SendScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="InputAccountScreen" component={InputAccountScreen} options={{ title: '', headerShadowVisible: false }}/>

            <Stack.Screen name="InputMoneyToSendScreen" component={InputMoneyToSendScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="CheckMoneyToSendScreen" component={CheckMoneyToSendScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="FinishSendScreen" component={FinishSendScreen} options={{ title: '', headerShadowVisible: false, headerBackVisible: false }}/>

            <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="CheckInfoBeforeBuyScreen" component={CheckInfoBeforeBuyScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ title: '', headerShadowVisible: false }}/>
            <Stack.Screen name="FinishPaymentScreen" component={FinishPaymentScreen} options={{ title: '', headerShadowVisible: false, headerBackVisible: false }}/>

            <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: '', headerShadowVisible: false }}/>
          </Stack.Navigator>


        </NavigationContainer>
      </RecoilRoot>

    </SafeAreaProvider>
  );
}

// name="T1Screen" 이 변수로 해당 화면을 호출함

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