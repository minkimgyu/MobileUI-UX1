import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, Button as PaperButton, Appbar, Drawer, IconButton, MD3Colors, Avatar} from 'react-native-paper';

const AssetLabel = ({labelData, setting, OnLabelPressed, OnButtonPressed}) =>{
    return(
        <View style={{width:315, marginBottom: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={OnLabelPressed} style={{width:315, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', padding: 10}}>
          <Avatar.Image style={{marginRight: 15, backgroundColor:'rgb(0,0,0,0)'}} size={45} source={labelData.iconPath}/> 
  
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'left', marginRight: 30}}>
            <Text style={{fontSize: 12.5, marginBottom:-7}} variant="titleLarge">{labelData.title}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}} variant="titleLarge">{(labelData.content).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
          </View> 
  
          <PaperButton style={{flex:0.2, borderRadius: 5, display:setting.buttonDisplay}} mode="contained" buttonColor={'#65ABFF'} 
          onPress={OnButtonPressed}>
            {setting.buttonTxt}
          </PaperButton>
        </TouchableOpacity>
      </View>
    );
}

export default AssetLabel; // 외부로 노출 