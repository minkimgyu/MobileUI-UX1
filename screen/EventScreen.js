import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Text, Button as PaperButton, Appbar, IconButton, MD3Colors, Avatar} from 'react-native-paper';

import {Image} from 'react-native';

function T2Screen() {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium">T12311!</Text>
      </View>
    );
  }

const EventPanel = (props) =>{

    return(
        <View style={{marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{width:345, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', padding: 10}}>
          <Avatar.Image style={{marginRight: 15}} size={70} source={require('../assets/toss-logo.png')}   /> 
  
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'left', marginRight: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom:-7}} variant="titleLarge">오늘의 복권</Text>
            <Text style={{color:'#0074FF', fontSize: 13}} variant="titleLarge">포인트 받기</Text>
          </View> 
        </TouchableOpacity>
      </View>
    );
  }
  
  function EventScreen() {
  
    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
  
    return (
      <>
        <Appbar.Header>
            <View style={{color:'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:10}}>
              <Appbar.Content
                  title={
                    <Image source={require('../assets/toss-logo.png')}
                              style={{ height:'40%',width:'40%', opacity:0 }}
                      />
                    }
                  titleStyle={{backgroundColor: "red",}}
                  style={{alignItems: "left"}}
              />
  
  
              <Appbar.Action icon="bell" style={{marginRight:-5, opacity:0}} onPress={_handleSearch} color="#b0b9c2"/>
              <Appbar.Action icon="reorder-horizontal" style={{marginRight:15}} onPress={_handleMore} component={T2Screen} color="#b0b9c2" />
            </View>
          </Appbar.Header>
  
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor : "white"}}>
  
            <View style={{width:355, marginTop: 5, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', flex: 1, marginLeft:5}} variant="headlineMedium">이벤트</Text>
  
  
              <View style={{flexDirection: 'row', justifyContent: 'right', alignItems: 'right', marginRight:-20}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight:-10}}>
                  <Avatar.Image style={{backgroundColor: '#FFFFFF'}} size={36} source={require('../assets/point.png')} />
                  <Text style={{fontSize: 20}} >5,000원</Text>
                </View>
  
                <IconButton
                  icon="chevron-right"
                  iconColor={MD3Colors.error50}
                  size={35}
                  style={{marginTop:10}}
                  onPress={() => console.log('Pressed')}
                />
  
  
              </View>
  
              
            </View>
  
        <EventPanel></EventPanel>
        <EventPanel></EventPanel>
        <EventPanel></EventPanel>
        <EventPanel></EventPanel>
  
        {/* bottomPadding */}
        <View style={{height:150}}></View> 
      </View>
  
      </>
    );
  }

  export default EventScreen; // 외부로 노출