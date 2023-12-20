

// import { DefaultTheme, PaperProvider, BottomNavigation, Text } from 'react-native-paper';

// import * as React from 'react';
// import { StyleSheet} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import HomeScreen from './screen/HomeScreen';
// import TabScreen from './screen/TabScreen';
// import DrawerScreen from './screen/DrawerScreen';

// const Stack = createNativeStackNavigator();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

// // const App = () => { // 클레스 느낌
// //   return (
// //     <PaperProvider theme={theme}>
// //       <NavigationContainer>
// //         <Stack.Navigator>
// //           <Stack.Screen name="Tab" component={TabScreen} options={{headerShown: false}} />
// //           <Stack.Screen name="Home" component={HomeScreen} />
// //           <Stack.Screen name="Drawer" component={DrawerScreen} />
// //         </Stack.Navigator>
// //       </NavigationContainer>
// //     </PaperProvider>
// //   );
// // }

// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// const NotificationsRoute = () => <Text>Notifications</Text>;

// const App = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
//     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
//     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
//     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//     notifications: NotificationsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

// // json 정보를 넣어줌
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;


// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';

// const MusicRoute = () => <Text>Music</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;

// const NotificationsRoute = () => <Text>Notifications</Text>;

// const MyComponent = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
//     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
//     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
//     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//     notifications: NotificationsRoute,
//   });

//   return (
//     <SafeAreaProvider>
//       <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//       />
//     </SafeAreaProvider>
//   );
// };

// export default MyComponent;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();

// export default function MyComponent() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       tabBar={({ navigation, state, descriptors, insets }) => (
//         <BottomNavigation.Bar
//           navigationState={state}
//          safeAreaInsets={insets}
//           onTabPress={({ route, preventDefault }) => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (event.defaultPrevented) {
//               preventDefault();
//             } else {
//              navigation.dispatch({
//                 ...CommonActions.navigate(route.name, route.params),
//                 target: state.key,
//               });
//             }
//           }}
//           renderIcon={({ route, focused, color }) => {
//             const { options } = descriptors[route.key];
//             if (options.tabBarIcon) {
//               return options.tabBarIcon({ focused, color, size: 24 });
//             }

//             return null;
//           }}
//           getLabelText={({ route }) => {
//             const { options } = descriptors[route.key];
//             const label =
//               options.tabBarLabel !== undefined
//                 ? options.tabBarLabel
//                 : options.title !== undefined
//                 ? options.title
//                 : route.title;

//             return label;
//           }}
//         />
//       )}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => {
//             return <Icon name="home" size={size} color={color} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           tabBarLabel: 'Settings',
//           tabBarIcon: ({ color, size }) => {
//             return <Icon name="cog" size={size} color={color} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium">Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text variant="headlineMedium">Settings!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// const sum = (a, b) => (a + b);

// class Tab1 extends Component{
//   constructor(){
//     this.age = 10;
//     this.count  = 0;
//   }

//   increase()
//   {
//     this.count = this.count + 1;
//   }

//   render()
//   {
//     return(
//       <View>
//         <Text>Hello World</Text>
//       </View>
//     );
//   }
// }

const Tab1 = (props) =>{
    const [count, setCount ] = useState(0);
    const [color, setColor ] = useState('white');
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
          <Text>Hellow World</Text>
  
  
          <Text style={{backgroundColor:'tomato', Color:'white', fontWeight:700, backgroundColor: color}}>{count}</Text>
  
          <PaperButton onPress={() =>{
  
            setCount(count + 1);
            setColor(color == 'white' ? 'blue' : 'white');
  
          }}>카운트 값 증가</PaperButton>
        </View>
    );
  }