import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, Searchbar, List, Divider } from 'react-native-paper';

const RecordLabel = ({data, navigation}) =>{

    return(
        <TouchableOpacity onPress={() => console.log("Pressed")} 
        style={{width:335, flexDirection: 'row', marginHorizontal:20, marginBottom:20, justifyContent: 'space-between', backgroundColor: '#FFFFFF'}}>

            <View style={{width:'auto', flexDirection: 'row'}}>
                <Avatar.Image style={{marginRight: 15}} size={48} source={require('../assets/toss-logo.png')}   /> 

                <View style={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>김홍익</Text>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{fontSize: 13}}>하나 1238127839712</Text>
                    </View>
                </View> 
            </View>
        </TouchableOpacity>
    );
  }

export default RecordLabel; // 외부로 노출 