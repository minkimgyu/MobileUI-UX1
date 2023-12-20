import { StyleSheet, Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

  const HomeStack1 = (props) =>{
    console.log('HomeStack1', props)
    return(
      <View style={styles.container}>
        <Button title="Tab" onPress={()=>props.navigation.navigate('Tab')}/>
        <Button title="Drawer" onPress={()=>props.navigation.navigate('Drawer')}/>
        <Button title="HomeStack2" onPress={()=>props.navigation.navigate('HomeStack2')}/>
        <Button onPress={props.navigation.openDrawer} title="서랍장 열기"/>
        <Button onPress={props.navigation.closeDrawer} title="서랍장 닫기"/>
      </View>
    )
  }
  
  const HomeStack2 = (props) =>{
    console.log('HomeStack2', props)
    return(
      <View style={styles.container}>
        <Button title="Tab" onPress={()=>props.navigation.navigate('Tab')}/>
        <Button title="Drawer" onPress={()=>props.navigation.navigate('Drawer')}/>
      </View>
    )
  }

  const HomeScreen = (props) =>{
    console.log('HomeScreen', props)
    return(
      <HomeStack.Navigator>
        <HomeStack.Screen name="HomeStack1" component={HomeStack1}/>
        <HomeStack.Screen name="HomeStack2" component={HomeStack2}/>
      </HomeStack.Navigator>
    )
  }

  // json 정보를 넣어줌
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  //export { HomeScreen }; // 외부로 노출 --> 여러개
  // import {HomeScreen} from './screen/HomeScreen'; --> 대괄호 표현

  export default HomeScreen; // 외부로 노출

  // import HomeScreen from './screen/HomeScreen'; 받는 쪽에서 이렇게