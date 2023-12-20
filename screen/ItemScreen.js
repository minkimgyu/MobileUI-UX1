import {useRef, useState, useMemo, useCallback} from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, Image } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors, Card, IconButton } from 'react-native-paper';

import {SmallItemCard} from './PayScreen';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { productState, selectedItemIdState, selectedItemCountState } from '../recoil/state';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

function ItemScreen(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] =useState(false);
    const onChangeSearch = query => setSearchQuery(query);

    const scrollRef = useRef();

    const [value, setValue] = useState('info');

    const storedProductState = useRecoilValue(productState)
    const storedSelectedItemIdState = useRecoilValue(selectedItemIdState)


    const selectedItemCountStateSetter = useSetRecoilState(selectedItemCountState)

    const nowSelectedItem = storedProductState[storedSelectedItemIdState];

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

      const OthersViewItemList = ({navigation}) => {
        return (
          storedProductState.map((data) => {
  
            if(data.othersWatch == true)
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

    const onPressTouch = (prop) => {
        setValue(prop)
        if(prop == 'info')
        {
            scrollRef.current?.scrollTo({
                y: 0,
                animated: true,
            });
        }
        else
        {
            scrollRef.current?.scrollTo({
                y: 2790,
                animated: true,
            });
        }
    }

    const onScrollEventCalled = (prop) => {
        if(prop > 2790)
        {
            if(value != 'review') setValue('review')
        }
        else
        {
            if(value != 'info') setValue('info')
        }
    }

    const ReturnRating= () => {

        let rating = 0;
        for (let index = 0; index < nowSelectedItem.review.length; index++) {
            rating = rating + nowSelectedItem.review[index].rating
        }

        return Math.round(rating / nowSelectedItem.review.length * 100) / 100;
    }

    const DrawStar= ({rating}) => {

        let max = 5
        let result = []
        let tmpRating = Math.floor(rating);

        for (let index = 0; index < tmpRating; index++) {
            result.push(<Star isDark={false}></Star>);
        }

        for (let index = 0; index < max - tmpRating; index++) {
            result.push(<Star isDark={true}></Star>);
        }

        return result;
    }

    function SwipeableReview({rating, content}) {
      console.log(rating)
      return(
          <TouchableOpacity style={{borderRadius:15, width:340, marginRight:20, paddingLeft:15, paddingRight:50, paddingBottom:50, backgroundColor:'#F3F4F6'}} 
              onPress={() => console.log("Pressed")}>
                  <View style={{marginTop:10, flexDirection: 'row', alignItems: 'center'}}>
                      <DrawStar rating={rating}></DrawStar>
                  </View>
                  <View style={{marginTop:10}}>
                      <Text>{content}</Text>
                  </View>
          </TouchableOpacity>
      );
    }

    const DrawSwipeableReviews = () => {
      let tmpCount = 0;
      let maxCount = 3;
      tmpSelectedItemReview = [...nowSelectedItem.review];
      tmpSelectedItemReviewSort = tmpSelectedItemReview.sort(function(a, b){
        return b.rating - a.rating;
      });

      console.log(tmpSelectedItemReviewSort)
      return (
        tmpSelectedItemReviewSort.map((data) => {
          while (maxCount > tmpCount){
            tmpCount = tmpCount + 1;
            return(
              <SwipeableReview
                key={data.id}
                rating={data.rating}
                content={data.content}
              >
              </SwipeableReview>
            );
          }
        })
      );
    }

    const Review = ({rating, date, name, itemName, count, content}) =>{
  
      return(
         <View style={{paddingLeft:20}}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                <DrawStar rating={rating}></DrawStar>
              </View>
  
              <View style={{marginTop:10, paddingBottom:50, width:'100%', height:'auto'}}>
                  <View style={{marginLeft:5}}>
                      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <Text style={{fontWeight:'bold', fontSize:12, color:'black'}}>{date.getFullYear()}.{date.getMonth()}.{date.getDate()}</Text>
                          <Text style={{fontWeight:'bold', fontSize:12, color:'black'}}>/</Text>
                          <Text style={{fontWeight:'bold', fontSize:12, color:'black'}}>{name}</Text>
                          <Text style={{fontWeight:'bold', fontSize:12, color:'black'}}>/</Text>
                          <Text style={{fontWeight:'bold', fontSize:12, color:'black'}}>{count}개</Text>
                      </View>
  
                      <Text style={{fontWeight:'bold', marginTop:20, fontSize:13, color:'black'}}>{content}</Text>
                  </View>
              </View>
         </View>
      );
    }

    const DrawReviews = () => {

      return (
        nowSelectedItem.review.map((data) => {
            return(
              <Review
                key={data.id}
                rating={data.rating}
                date={data.date}
                name={data.name}

                count={data.buyCount}
                content={data.content}
              >
              </Review>
            );
          }
        )
      )
    }

    const [count, setCount] = useState(1);

    return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <ScrollView onScroll={(event)=>onScrollEventCalled(event.nativeEvent.contentOffset.y)} ref={scrollRef} nestedScrollEnabled = {true} vertical={true} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} >
            <View style={{width:'100%', flexDirection: 'column', alignItems: 'center'}}>
                <Card style={{height:500, width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Card.Cover style={{width:300, height:'80%'}} source={nowSelectedItem.ImagePath} />
                </Card>

                <View style={{width:'100%', marginLeft:20, marginTop:10, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Text style={{fontSize:15, color:'gray'}}>{nowSelectedItem.manufacturingCompany}</Text>
                    <Text style={{fontSize:17, color:'black'}}>{nowSelectedItem.name}</Text>
                    <Text style={{fontSize:10, color:'gray'}}>{(nowSelectedItem.watcherCount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명이 구경함</Text>
                </View>

                <View style={{width:'100%', marginLeft:30, marginTop:10, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <Text style={{fontSize:25, marginTop:5, color:'red'}}>{Math.floor(nowSelectedItem.discountRatio * 100)}%</Text>
                        <Text style={{fontSize:25, marginLeft:10, color:'black'}}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    </View>
                    <Text style={{fontSize:15, color:'gray', textDecorationLine:'line-through'}}>{(Math.floor(nowSelectedItem.price)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    <Text style={{fontWeight:'bold', fontSize:12, color:'gray', marginTop:10}}>배송비 무료, 이 상품 배송은 평균 {nowSelectedItem.deliveryMinDate}~{nowSelectedItem.deliveryMaxDate}일 걸려요</Text>

                    <View style={{marginTop:10, flexDirection: 'row', alignItems: 'center'}}>
                        <DrawStar rating={ReturnRating()}></DrawStar>
                        <Text style={{fontWeight:'bold', fontSize:20, marginLeft:8, color:'#6C7682'}}>{ReturnRating()}</Text>
                    </View>
                </View>

                <ScrollView style={{marginTop:30}} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={{marginLeft:15, marginBottom:30, flexDirection: 'row'}}>
                        <DrawSwipeableReviews></DrawSwipeableReviews>
                    </View>
                </ScrollView>
            </View>

            <View style={{width:'100%', flexDirection: 'column', alignItems: 'center'}}>
                <SegmentedButtons style={{width:'100%', backgroundColor:'white'}}
                
                value={value}
                onValueChange={onPressTouch}
                buttons={[
                {
                    value: 'info',
                    label: '정보',
                    style: {
                        borderRadius: 0,
                      },
                },
                {
                    
                    value: 'review',
                    label: '리뷰',
                    style: {
                        borderRadius: 0,
                      },
                },
                ]}
            />
            </View>

            <View style={{width:'100%', flexDirection: 'column', alignItems: 'center'}}>
              <Image source={require('../assets/Info.png')} style={{width:'100%', marginTop:-1680, marginBottom:-1680}} resizeMode='contain'
              ></Image>
            </View>

            <Divider style={{height:10, marginVertical:10, backgroundColor:'#ECF1F8'}} />

            <View style={{width:'100%', flexDirection: 'column', justifyContent: 'center'}}>
                <DrawReviews></DrawReviews>
                <Divider style={{height:2, marginBottom:10, backgroundColor:'#ECF1F8'}} />

                <View style={{width:'100%', flexDirection: 'row', justifyContent: 'center'}}>
                    <PaperButton style={{borderRadius: 5, width:'85%', height:50}} labelStyle={{fontSize:17, color:"#0074FF"}} 
                        mode="text" onPress={() => console.log("Pressed")}>
                            더 보기
                    </PaperButton>
                </View>
            </View>

            <View style={{width:'100%', marginTop: 23, marginBottom: 20, marginLeft:20, flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', fontSize:17}} variant="headlineMedium">지금 본 상품과 비슷한 상품</Text>
            </View>
  
            <ScrollView style={{paddingLeft: 20}} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
              <RecentItemList navigation={props.navigation}></RecentItemList>
            </ScrollView>

            <View style={{width:'100%', marginTop: 23, marginBottom: 20, marginLeft:20, flexDirection: 'column'}}>
                <Text style={{fontWeight: 'bold', fontSize:17}} variant="headlineMedium">다른 고객이 함께 본 상품</Text>
            </View>

            <ScrollView style={{paddingLeft: 20, marginBottom:100}} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
                <OthersViewItemList navigation={props.navigation}></OthersViewItemList>
            </ScrollView>
        </ScrollView>

        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>

            <Pressable
              style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)'}}
              onPress={() => setModalVisible(!modalVisible)}>
            </Pressable>

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>{nowSelectedItem.name}</Text>
                <View style={{flexDirection: 'row', width:'100%', justifyContent: 'space-between', alignItems:'center', marginBottom:10}}>
                    <View>
                        <Text style={styles.modalNum}>{nowSelectedItem.serialNumber}</Text>
                        <Text style={styles.modalPrice}>{(Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    </View>
                    {/* #F3F4F6 */}
                    <View style={{flexDirection: 'row', width:'auto', height:40, borderRadius:10, justifyContent: 'space-between', alignItems:'center', backgroundColor:'#F3F4F6'}}>
                        <IconButton
                            icon="minus"
                            iconColor="#5B6470"
                            size={15}
                            onPress={() => {
                                if(count > 1) setCount(count - 1)
                            }}
                            style={{margin:-3}}
                        />

                        <Text style={{fontSize: 15, textAlign:'center', paddingHorizontal: 15, 
                        paddingVertical: 7, borderRadius:10, backgroundColor:'white', elevation: 1}}> {count} </Text>

                        <IconButton
                            icon="plus"
                            iconColor="#5B6470"
                            size={15}
                            onPress={() => setCount(count + 1)}
                            style={{margin:-3}}
                        />
                    </View>
                </View>
                
                <Text style={styles.modalTotalPrice}>총 {(count * Math.floor(nowSelectedItem.price - (nowSelectedItem.price * nowSelectedItem.discountRatio))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                    <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalVisible(!modalVisible); selectedItemCountStateSetter(count); props.navigation.navigate('CheckInfoBeforeBuyScreen');}}>
                        <Text style={styles.textStyle}>확인</Text>
                    </Pressable>
                </View>
            </View>
          </Modal>

        <View style={{position:'absolute', height:100, bottom:0, borderRadius:10, width:'100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor:"#FFFFFF"}}>
            <PaperButton style={{borderRadius: 10, width:'85%', height:60, backgroundColor:"#3182F7", justifyContent: 'center'}} labelStyle={{fontSize:17, color:"#FFFFFF"}} 
                mode="contained" onPress={()=> setModalVisible(true)}>
                    구매하기
            </PaperButton>
        </View>

    </View>
    );
  }

//   setModalVisible(!modalVisible); props.navigation.navigate('CheckInfoBeforeBuyScreen');

  const ItemReviewCard = ({props}) =>{
  
    return(
        <TouchableOpacity onPress={() => console.log("Pressed")}>
            <Image source={require('../assets/icon.png')} style={{width:100, height:100}}>
            </Image>
        </TouchableOpacity>
    );
  }

  function Star({isDark}) {
    
    if(isDark == true) tmpColor='#D9D9D9'
    else tmpColor='#FFD058'
    return(
        <Icon
            source="star"
            color={tmpColor}
            size={20}
        />
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    centeredView: {
      position: 'absolute',
      bottom:0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      width:350,
      height: 310,
      padding: 35,
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
    button: {
      margin:5,
      borderRadius: 15,
      width:'100%',
      height:50,
      elevation: 7,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      fontSize:15,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 35,
      width:'100%',
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'left',
    },
    modalTotalPrice: {
        marginBottom: 50,
        width:'100%',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'left',
      },
    modalNum: {
        color:'#4A5663',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'left',
    },
    modalPrice: {
        marginBottom: 15,
        color:'#4A5663',
        fontSize: 15,
        textAlign: 'left',
    },
  });

  export default ItemScreen; // 외부로 노출 