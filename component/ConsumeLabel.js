import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Button as PaperButton, Avatar } from 'react-native-paper';

const History = ({data, navigation}) =>{
    return(
        <TouchableOpacity onPress={() => console.log(data)} 
        style={{width:335, flexDirection: 'row', marginBottom:20, justifyContent: 'space-between', backgroundColor: '#FFFFFF'}}>

            <View style={{width:'auto', flexDirection: 'row'}}>
                <Avatar.Image style={{marginRight: 15}} size={48} source={require('../assets/toss-logo.png')}   /> 

                <View style={{justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{data.title}</Text>
                    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                        <Text style={{fontSize: 13}}>{data.time}</Text>
                    </View>
                </View> 
            </View>

            <View style={{justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{data.consumePrice}</Text>
                <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <Text style={{fontSize: 13}}>{data.consumePrice}</Text>
                </View>
            </View> 
        </TouchableOpacity>
    );
}

export default History; // 외부로 노출 