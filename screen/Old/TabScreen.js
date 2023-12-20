import React from 'react';
import { StyleSheet, Button, View, Image } from 'react-native';
import { Button as PaperButton, ActivityIndicator, MD2Colors, Avatar, Badge, Card, Text, List  } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Tab1 = (props) =>{
    console.log('Tab1', props)
    return( // 색상의 theme의 primary color임 ---> tomato contained
      <View style={styles.container}> 

        <Badge>3</Badge>

        <PaperButton icon="cursor-default-click" mode="outlined" onPress={() => console.log("Pressed")}>
            Press me
        </PaperButton>
        
       

        <ActivityIndicator animating={true} color={MD2Colors.red800} />

        <Avatar.Image size={60} source={require('../assets/Hongik_University.png')} />

        <PaperButton icon="microsoft-xbox-controller-menu" mode="outlined" onPress={() => console.log("Pressed")}>
            Press me
        </PaperButton>

        <PaperButton icon={require('../assets/Hongik_University.png')} mode="outlined" onPress={() => console.log("Pressed")}>
            Press me
        </PaperButton>
        
        <PaperButton icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }} mode="outlined" onPress={() => console.log("Pressed")}>
            Press me
        </PaperButton>

        <Image style={styles.logo} 
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HelloWorld.svg/512px-HelloWorld.svg.png'}}
            resizeMode='contain'
            // resizeMode='stretch'
            // resizeMode='cover'
        />

        <Button title="Press me" onPress={()=>console.log("Pressed")}/>
        <Button title="Drawer" onPress={()=>props.navigation.navigate('Drawer')}/>
        <Button title="Tab2" onPress={()=>props.navigation.navigate('Tab2')}/>
      </View>
    )
  }

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  
  const Tab2 = (props) =>{

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    console.log('Tab2', props)
    return(
      <View style={styles.container}>


    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item">
          
          <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <PaperButton>Cancel</PaperButton>
            <PaperButton>Ok</PaperButton>
          </Card.Actions>
        </Card>

          </List.Item>
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item">



        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <PaperButton>Cancel</PaperButton>
            <PaperButton>Ok</PaperButton>
          </Card.Actions>
        </Card>



        </List.Item>
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>



       

        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <PaperButton>Cancel</PaperButton>
            <PaperButton>Ok</PaperButton>
          </Card.Actions>
        </Card>



        <Button title="Home" onPress={()=>props.navigation.navigate('Home')}/>
        <Button title="Tab1" onPress={()=>props.navigation.navigate('Tab1')}/>
      </View>
    )
  }
  
  const TabScreen = (props) =>{
    console.log('TabScreen', props)
    return(
      <Tab.Navigator>
        <Tab.Screen name="Tab1" component={Tab1}/>
        <Tab.Screen name="Tab2" component={Tab2}/>
      </Tab.Navigator>
    )
  }

  // json 정보를 넣어줌
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    logo: {
        width:66,
        height:58
    }
  });
  

  export default TabScreen; // 외부로 노출