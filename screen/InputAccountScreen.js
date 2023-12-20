import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, KeyboardAvoidingView } from 'react-native';
import { Text, Button as PaperButton, Avatar, SegmentedButtons, TextInput, List, Divider, Icon, MD3Colors } from 'react-native-paper';

import {bankData} from '../data/BankData';
import {IconData} from '../data/IconData';

import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';

import { accountState, myState, sendAccountIdState, selectedAccountIdState } from '../recoil/state';

function InputAccountScreen(props) {

  const storedMyState = useRecoilValue(myState);
  const storedAllAccountState = useRecoilValue(accountState);
  const storedSelectedAccountId = useRecoilValue(selectedAccountIdState);

  const [previewVisible, setPreviewVisible] = React.useState('none');

  const [previewFowardData, setPreviewFowardData] = React.useState('');
  const [previewBankNameData, setPreviewBankNameData] = React.useState('');
  const [previewBankNumberData, setPreviewBankNumberData] = React.useState('');

    const [modalVisible, setModalVisible] = React.useState(false);

    const [bankPlaceHolder, setBankPlaceHolder] = React.useState('계좌번호 입력');

    const [modalVisible1, setModalVisible1] = React.useState(false);

    const selectBank = "은행을 선택하세요"

    const [select, setSelect] = React.useState(selectBank);
    const [accountNumber, setAccountNumber] = React.useState();


    const sendAccountIdSetter = useSetRecoilState(sendAccountIdState)

    const BankButton = ({bankName, iconName}) => {
      return(
        <TouchableOpacity
          style={styles.button}
          onPress={() => 
            {
              setModalVisible(!modalVisible)
              setSelect(bankName)

              for (let index = 0; index < bankData.length; index++) {
                if(bankData[index].name == bankName)
                {
                  setBankPlaceHolder(bankData[index].accountStartNumber + '0000000000')
                }
              }
            }
          }>
          <Icon
            source={IconData[iconName]}
            size={40}
          />
          <Text style={styles.textStyle}>{bankName}</Text>
        </TouchableOpacity>
      );
    }

    const NavigationToNextScreen = () => {
      
      // 여기에서 보낼 계좌 인덱스를 지정해준다.

      for (let index = 0; index < storedAllAccountState.length; index++) {
        const tmpBankData = bankData[storedAllAccountState[index].bankId]

        const tmpBankName = tmpBankData.name
        const tmpAccountNumber = tmpBankData.accountStartNumber + storedAllAccountState[index].endNumber

        if(tmpBankName == select && tmpAccountNumber == accountNumber) // 계좌가 존재하는 경우
        {
          sendAccountIdSetter(index)
          props.navigation.navigate('InputMoneyToSendScreen') // 같은 경우에 이동 + 인덱스 지정
          return;
        }
      }

      setModalVisible1(true); // 모달 띄워주기
    }

    const InputDataToClickButton = () => {
      setAccountNumber(previewBankNumberData)
      setSelect(previewBankNameData)
      setPreviewVisible('none') // 아무 것도 겹치지 않는 경우
    }

    const ChangeAccountNumber = (text) => {

      setAccountNumber(text)

      if(text.length == 0)
      {
        setPreviewVisible('none')
        return;
      }

      for (let index = 0; index < storedAllAccountState.length; index++) {

        const bankId = storedAllAccountState[index].bankId;

        const number = (bankData[bankId].accountStartNumber + storedAllAccountState[index].endNumber).toString()

        if(number.includes(text) && number != text && index != storedSelectedAccountId)
        {
          let fowardTxt = ''

          if(storedMyState.accountIdsInPossession.includes(index))
          {
            fowardTxt= '내 '
          }

          setPreviewFowardData(fowardTxt)
          setPreviewBankNameData(bankData[bankId].name)
          setPreviewBankNumberData(number)
          setPreviewVisible('flex')
          return;
        }
      }
      
      setPreviewVisible('none') // 아무 것도 겹치지 않는 경우
      return;
    }

    return (
    <View style={{height:'100%', backgroundColor:'white'}}>

        <View style={{width:355, marginLeft:35, marginTop: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 25}} variant="titleLarge">어떤 계좌로 보낼까요?</Text>
        </View>

        <View style={{flexDirection: 'column', alignItems: 'center', marginTop:30}}>
          <TextInput style={{width:'85%'}} placeholderTextColor={'#E5E5E5'} placeholder={bankPlaceHolder} contentStyle={{paddingLeft:0, fontSize:22, backgroundColor:'white'}}
            keyboardType = 'numeric'
            value={accountNumber}
            onChangeText={ChangeAccountNumber}
          /> 

          <TouchableOpacity onPress={()=> setModalVisible(true)} style={{width:'85%', marginTop: 50, borderBottomColor:'gray', borderBottomWidth:1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#FFFFFF', padding: 10}}>
            <Text style={{width:'100%', fontSize: 22}} variant="titleLarge">
              {select}
            </Text>

            <Icon
              source="chevron-down"
              color="gray"
              size={20}
            />
          </TouchableOpacity>

          <PaperButton style={{borderRadius: 5, marginTop:45, height:50, display: previewVisible}} labelStyle={{color:'black', marginTop:15, fontSize:17}} 
          mode="contained" buttonColor={'#E5E5E5'} onPress={() => InputDataToClickButton()}>
            {previewFowardData + previewBankNameData + ' ' + previewBankNumberData} 입력
          </PaperButton>

          <PaperButton style={{borderRadius: 5, width:'85%', marginTop:45, height:50, }} labelStyle={{marginTop:15, fontSize:17}} 
          mode="contained" buttonColor={'#0074FF'} onPress={() => NavigationToNextScreen()}>
            확인
          </PaperButton>

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
                <Text style={styles.modalText}>은행을 선택해주세요</Text>

                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>

                  <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                    <BankButton bankName={"신한은행"} iconName={"Shinhan"}></BankButton>
                    <BankButton bankName={"우리은행"} iconName={"Woori"}></BankButton>
                    <BankButton bankName={"국민은행"} iconName={"Kookmin"}></BankButton>
                  </View>
                </View>
              </View>
            </View>
          </Modal>




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
                <Text style={styles.modalText}>잘못된 계좌 번호입니다.</Text>

                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>

                  <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'center'}}>
                    <Text style={styles.modalText1}>보낼 계좌번호가 맞는지 확인 후 다시 입력해주세요</Text>

                    <PaperButton style={{borderRadius: 5, width:'40%', marginTop:30, height:45 }} labelStyle={{marginTop:15, fontSize:17}} 
                      mode="contained" buttonColor={'#0074FF'} 
                      onPress={() => setModalVisible1(!modalVisible1)}>
                          확인
                    </PaperButton>

                  </View>
                </View>
              </View>
            </View>
          </Modal>


        </View>
    </View>
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
      top:80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      width:350,
      height: 600,
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
    modalView1: {
      margin: 20,
      marginTop:200,
      backgroundColor: 'white',
      borderRadius: 20,
      width:350,
      height: 200,
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
      borderRadius: 5,
      width:80,
      height:80,
      // elevation: 7,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFEFEF',
    },
    buttonOpen: {
      backgroundColor: '#B0B9C2"',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      width:'100%',
      fontSize: 18,
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

  export default InputAccountScreen; // 외부로 노출 