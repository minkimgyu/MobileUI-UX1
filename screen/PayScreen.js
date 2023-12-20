import React,{ useCallback, useState, useEffect, useMemo, useRef } from 'react';
import { View, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';

import { Text, Button as PaperButton, Appbar, IconButton, MD3Colors, Avatar, Searchbar, Card } from 'react-native-paper';

import {Image, ScrollView} from 'react-native';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { accountState, selectedAccountIdState, selectedItemIdState, consumeState, productState, itemTypeState } from '../recoil/state';

import {productTypeData} from '../data/ProductData';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';

const SmallItemCard = ({id, name, price, discountRatio, imagePath, watcherCount, navigation}) =>{
  
  const selectedItemIdStateSetter = useSetRecoilState(selectedItemIdState); // 값을 변경하는 함수만 반환

  return(
    <TouchableOpacity style={{width:160, marginBottom:30, marginRight:30}} onPress={() => {selectedItemIdStateSetter(id); navigation.navigate('ItemScreen')}}>
    <Card style={{width: "fit-content"}}>
      <Card.Cover source={imagePath} />
      <Card.Content>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'red', marginRight:5, fontSize:17}} variant="bodyLarge">{Math.floor(discountRatio * 100)}%</Text>
          <Text style={{fontSize:17}} variant="bodyLarge">{(Math.floor(price - (price * discountRatio))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
        </View>

        <Text style={{fontSize:14}} variant="titleMedium">{name}</Text>
        <Text style={{fontSize:10}}>{(watcherCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명이 구경함</Text>
      </Card.Content>
    </Card>
  </TouchableOpacity>
  );
}

const LargeItemCard = ({id, name, price, discountRatio, imagePath, watcherCount, navigation}) =>{

  const selectedItemIdStateSetter = useSetRecoilState(selectedItemIdState); // 값을 변경하는 함수만 반환

  return(
    <TouchableOpacity style={{width:"100%", marginBottom:30}} onPress={() => {selectedItemIdStateSetter(id); navigation.navigate('ItemScreen')}}>
    <Card style={{width: "fit-content"}}>
      <Card.Cover source={imagePath} resizeMode={'cover'} />
      <Card.Content>
        <Text variant="titleMedium">{name}</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color:'red', marginRight:5}} variant="bodyLarge">{Math.floor(discountRatio * 100)}%</Text>
          <Text variant="bodyLarge">{(Math.floor(price - (price * discountRatio))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Avatar.Image style={{marginRight:-10}} size={24} source={require('../assets/point.png')} />
          <Avatar.Image style={{marginRight:-10}} size={24} source={require('../assets/point.png')} />
          <Avatar.Image size={24} source={require('../assets/point.png')} />
          <Text variant="bodyMedium" style={{marginLeft:5}}>{(watcherCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명이 구경함</Text>
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>
  );
}

function PayScreen(props) {

    const _handleSearch = () => console.log('Searching');
    const _handleMore = () => console.log('Shown more');
  
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
    const buttonStyle = { width:'auto'}

    const storedProductState = useRecoilValue(productState)
    const storedItemTypeState = useRecoilValue(itemTypeState)

    const [remainingTime, setRemainingTime] = useState('');

    const formatTime = (value) => (value < 10 ? `0${value}` : value);

    useEffect(() => {
    const updateRemainingTime = () => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const timeDifference = endOfDay - now;

      const hours = formatTime(Math.floor(timeDifference / (1000 * 60 * 60)));
      const minutes = formatTime(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = formatTime(Math.floor((timeDifference % (1000 * 60)) / 1000));

      setRemainingTime(`${hours}:${minutes}:${seconds}`);
    };

    // 1초마다 업데이트
    const intervalId = setInterval(updateRemainingTime, 1000);

    // 컴포넌트가 언마운트되면 타이머 정리
    return () => clearInterval(intervalId);
  }, []);
  


    const LargeItemList = ({navigation}) => {
      return (
        storedProductState.map((data) => {

          if(data.todaysProduct == true)
          {
            return(
              <LargeItemCard 
                key={data.id}
  
                id={data.id}
                name={data.name}
                price={data.price}
                discountRatio={data.discountRatio}
                imagePath={data.ImagePath}
                watcherCount={data.watcherCount}
                navigation={navigation}
              >
              </LargeItemCard>
            );
          }
        })
      );
    };

    const SmallItemList = ({navigation}) => {

      tmpIndex = 0; // --> 
      storedData = null;

      if(storedItemTypeState == productTypeData.ALL)
      {
        tmpArr = storedProductState.filter((item) => item.todaysProduct == false && item.recentProduct == false)
      }
      else
      {
        tmpArr = storedProductState.filter((item) => item.type == storedItemTypeState && item.todaysProduct == false && item.recentProduct == false)
      }

      return (
        tmpArr.map((data) => {
          // 같은 타입만 먼저 솎아내고 거기서 처리하는게 빠를 듯

          tmpIndex = tmpIndex + 1;
          if(tmpIndex % 2 == 0)
          {
            return(
              <View style={{flexDirection: 'row', marginLeft:21}}>
                <SmallItemCard 
                  key={storedData.id}

                  id={storedData.id}
                  name={storedData.name}
                  price={storedData.price}
                  discountRatio={storedData.discountRatio}
                  imagePath={storedData.ImagePath}
                  watcherCount={storedData.watcherCount}
                  navigation={navigation}
                >
                </SmallItemCard>

                <SmallItemCard 
                  key={data.id}

                  id={data.id}
                  name={data.name}
                  price={data.price}
                  discountRatio={data.discountRatio}
                  imagePath={data.ImagePath}
                  watcherCount={data.watcherCount}
                  navigation={navigation}
                >
                </SmallItemCard>
              </View>
            );
          }
          else
          {
            storedData = data;
          }
        })
      );
    };

    const RecentItemList = ({navigation}) => {
      return (
        storedProductState.map((data) => {

          if(data.recentProduct == true)
          {
            return(
              <SmallItemCard 
                key={data.id}

                id={data.id}
                name={data.name}
                price={data.price}
                discountRatio={data.discountRatio}
                imagePath={data.ImagePath}
                watcherCount={data.watcherCount}
                navigation={navigation}
              >
              </SmallItemCard>
            );
          }
        })
      );
    };

    return (
      <>
         <Appbar.Header style={{backgroundColor : "rgb(243, 244, 246 )"}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft:10}}>
              <Appbar.Content
                  title={
                    <Image source={require('../assets/toss-logo.png')}
                              style={{ height:'40%',width:'40%', opacity:0 }}
                      />
                    }
                  titleStyle={{backgroundColor: "red",}}
                  style={{alignItems: "left"}}
              />
  
  
              <Appbar.Action icon="barcode-scan" style={{marginRight:-5}} onPress={_handleSearch} color="#b0b9c2"/>
              <Appbar.Action icon="reorder-horizontal" style={{marginRight:15}} onPress={_handleMore} color="#b0b9c2" />
            </View>
          </Appbar.Header>
  
          <ScrollView nestedScrollEnabled = {true} vertical={true} showsVerticalScrollIndicator={false}>
  
          
      
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor : "white"}}>
  
          <View style={{width:355, marginTop: 23, marginBottom: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', flex: 1, marginLeft:5}} variant="headlineMedium">페이</Text>
          </View>
  
  
          <Searchbar
            placeholder="상품을 검색해보세요"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{marginLeft:25, marginRight:25, borderRadius:10, height:55 }}
          />
  
          <View style={{marginTop:15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor : "white"}}>
  
            <View style={{height:110, flexDirection: 'column', justifyContent: 'center'}}>
              <PaperButton labelStyle={{marginRight:9, fontSize: 35 }} style={{width:70, height: 70, marginRight:30, backgroundColor:"#F9BAFF"}} icon="percent" mode="contained" onPress={() => console.log("Pressed")}>
              </PaperButton>
  
              <View style={{width:70, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize:12}} variant="headlineMedium">할인 · 적립</Text>
              </View>
            </View>
  
            <View style={{height:110, flexDirection: 'column', justifyContent: 'center'}}>
              <PaperButton labelStyle={{marginRight:9, fontSize: 35 }} style={{width:70, height: 70, marginRight:30, backgroundColor:"#ADFFFF"}} icon="coffee" mode="contained" onPress={() => console.log("Pressed")}>
              </PaperButton>
  
              <View style={{width:70, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize:12}} variant="headlineMedium">브랜드콘</Text>
              </View>
            </View>
  
            <View style={{height:110, flexDirection: 'column', justifyContent: 'center'}}>
              <PaperButton labelStyle={{marginRight:9, fontSize: 35 }} style={{width:70, height: 70, backgroundColor:"#B3D5FF"}} icon="account" mode="contained" onPress={() => console.log("Pressed")}>
              </PaperButton>
  
              <View style={{alignItems: 'stretch'}}>
                <Text style={{fontWeight: 'bold', fontSize:12}} variant="headlineMedium">내 쇼핑 · 결제</Text>
              </View>
            </View>
  
          </View>
  
          <View style={{width:320, marginTop: 23, marginBottom: 20, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', fontSize:19, marginBottom:-5}} variant="headlineMedium">오늘의 상품</Text>
            <Text style={{fontWeight: 'bold', color:'red', fontSize:15}} variant="headlineMedium">남은 시간: {remainingTime}</Text>
          </View>
  
          <LargeItemList navigation={props.navigation}></LargeItemList>
  
          <View style={{width:350, marginTop: 23, marginBottom: 20, flexDirection: 'column'}}>
            <Text style={{fontWeight: 'bold', fontSize:17, marginBottom:-5}} variant="headlineMedium">김○○님의 최근 상품</Text>
          </View>
  
            <ScrollView style={{paddingLeft: 20}} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
              <RecentItemList navigation={props.navigation}></RecentItemList>
            </ScrollView>
  
            <ItemLabel></ItemLabel>
  
            <ScrollView style={{paddingTop:30}} nestedScrollEnabled={true} showsVerticalScrollIndicator={false} vertical={true}>
              <SmallItemList navigation={props.navigation}></SmallItemList>
            </ScrollView>
  
          </View>
          </ScrollView>
      </>
    );
  }


  const ItemLabel =() =>{
    const buttonStyle = { width:'auto'}
    const fontStyle = { fontSize: 15, fontWeight:'bold', width:'auto', color:"#6C7682"}

    const [storedItemTypeState, itemTypeStateSetter] = useRecoilState(itemTypeState);

    const DrawBottomLine = (nowType) =>{
      if(nowType == storedItemTypeState)
      {
        return 1;
      }
      else
      {
        return 0;
      }
    }

    const ReturnSelectedColor = (nowType) =>{
      if(nowType == storedItemTypeState)
      {
        return '#0074FF';
      }
      else
      {
        return '#59616B';
      }
    }

    const [modalVisible1, setModalVisible1] = React.useState(false);

    return(
      <>
          <ScrollView style={{marginRight:35}} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.ALL), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.ALL)}>
              전체
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.FOOD), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.FOOD)}>
              식품
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.LIFE), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.LIFE)}>
              생활
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.DRINK), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.DRINK)}>
              음료
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.HOMEAPPLIANCES), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.HOMEAPPLIANCES)}>
              가전
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.BEAUTY), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.BEAUTY)}>
              뷰티
            </PaperButton>
            <PaperButton labelStyle={fontStyle} style={{buttonStyle, marginLeft:10, borderColor: 'black', borderBottomWidth: DrawBottomLine(productTypeData.HEALTHYFOOD), borderRadius: 0}} 
            mode="text" onPress={() => itemTypeStateSetter(productTypeData.HEALTHYFOOD)}>
              건강
            </PaperButton>
          </ScrollView>
  
          <IconButton
            style={{position:'absolute', top:1675, left:340, backgroundColor:"#F3F4F6"}}
            icon="view-headline"
            iconColor="#8B94A0"
            mode='contained'
            size={30}
            onPress={() => {console.log('Pressed'); setModalVisible1(!modalVisible1)}}
          />

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible1}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible1(!modalVisible1);
            }}>

            <Pressable
              style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}
              onPress={() => setModalVisible1(!modalVisible1)}>
            </Pressable>

            <View style={styles.centeredView}>
              <View style={styles.modalView1}>
                <Text style={styles.modalText}>카테고리를 선택해주세요</Text>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems:'flex-start', width:300}}>
                  <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems:'flex-start', width:100, marginRight: 75 }}>
                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.ALL)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.ALL); setModalVisible1(!modalVisible1);}}>
                          전체
                    </PaperButton>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.LIFE)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.LIFE); setModalVisible1(!modalVisible1);}}>
                          생활
                    </PaperButton>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.HOMEAPPLIANCES)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.HOMEAPPLIANCES); setModalVisible1(!modalVisible1);}}>
                          가전
                    </PaperButton>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.HEALTHYFOOD)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.HEALTHYFOOD); setModalVisible1(!modalVisible1);}}>
                          건강
                    </PaperButton>
                  </View>

                  <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems:'flex-start', width:100 }}>
                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.FOOD)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.FOOD); setModalVisible1(!modalVisible1);}}>
                          식품
                    </PaperButton>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.DRINK)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.DRINK); setModalVisible1(!modalVisible1);}}>
                          음료
                    </PaperButton>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45}} labelStyle={{marginTop:15, fontSize:17, fontWeight:'bold', color: ReturnSelectedColor(productTypeData.BEAUTY)}} 
                      mode="text"
                      onPress={() => {itemTypeStateSetter(productTypeData.BEAUTY); setModalVisible1(!modalVisible1);}}>
                          뷰티
                    </PaperButton>
                  </View>
                </View>

              </View>
            </View>
          </Modal>
      </>
    );
  }
  





  const styles = StyleSheet.create({
    centeredView: {
      position: 'absolute',
      top:80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView1: {
      backgroundColor: 'white',
      borderRadius: 20,
      marginTop: 200,
      width:395,
      height:500,
      padding: 35,
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      width:'100%',
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'left',
    },
    modalText1: {
      marginTop: 15,
      marginLeft: 8,
      width:'100%',
      fontSize: 13,
      textAlign: 'left',
    }
  });
  
  export {PayScreen, SmallItemCard}; // 외부로 노출