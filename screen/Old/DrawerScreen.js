import { StyleSheet, Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Main = (props) =>{
    console.log('Main', props)
    return(
      <View style={styles.container}>
        <Button onPress={props.navigation.openDrawer} title="서랍장 열기"/>
        <Button onPress={props.navigation.closeDrawer} title="서랍장 닫기"/>
      </View>
    )
  }

const Drawer2 = (props) =>{
    console.log('Drawer2', props)
    return(
      <View style={styles.container}>
        <Button onPress={props.navigation.openDrawer} title="서랍장 열기"/>
        <Button onPress={props.navigation.closeDrawer} title="서랍장 닫기"/>
      </View>
    )
  }
  
  const DrawerScreen = (props) =>{
    console.log('DrawerScreen', props)
    return(
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main}/>
        <Drawer.Screen name="Drawer2" component={Drawer2}/>
      </Drawer.Navigator>
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
  

  export default DrawerScreen; // 외부로 노출