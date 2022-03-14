import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  Pressable,ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Filter, Sort} from '..';
import NavigationString from '../../NavigatorScreen/NavigationString';
import store from '../../../redux/index';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
 import { useSelector,useDispatch } from 'react-redux';
 import { setUserData} from '../../../redux/action';
 import { watchPersonData } from '../../../redux/reducer';
import firestore from '@react-native-firebase/firestore';

const TAB_BAR_HEIGHT = 9;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 2,
  },
  item: {
    padding:30,
    fontSize: 17,
    height: 1,
  },
  centeredView: {
    marginTop: 622,
  },
  modalView: {
      paddingLeft:44,
    backgroundColor: 'white',
    flexDirection:'column',
    paddingBottom:22,
    justifyContent:'space-evenly',
    borderRadius: 0,
    shadowColor: '#000',
    width: 443,
    height: 222,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
      fontSize:13
  },
});

const HomeScreen = ({navigation}) => {
  const {name} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();
  const [data, setData] = useState([
    'one',
    'six',
    'two',
    'three',
    'four',
    'Five',
    'Six',
    'One',
    'one',
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [datGet , setDataGet]  = useState(0);
  const user2 = {paylod : 'vishnu'}

  const [loading, setLoading] = useState(true); 
  const [users, setUsers] = useState([]); 
  
  useEffect(() => {
    const unsubscribe = firestore()
        .collection("cocoData")
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
      setUsers(data[0].userCocoData);
      dispatch(setUserData(data[0].userCocoData))

        });
    }, []);


  const funCall = () => {

    setData(data);

    navigation.navigate(NavigationString.FILTER, {name: data});
  };


  const bottomDrawer = () => {
    navigation.navigate(NavigationString.FILTER, {name: data});
  };

  renderContent = () => {
    return (
      <View>
        <Text>Get directions to your location</Text>
      </View>
    );
  };


  return (
    <View >

            <View
                style={{
                borderRadius: 22,
                shadowRadius: 12,
              
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 62,
                marginLeft: 8,
                }}>
             <View  >
                  <Modal
                  close
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sort By</Text>
                <View style={{width:300,borderWidth:2 , borderColor:'black', borderRadius:33, shadowRadius:22}}></View>
                <View >

                <BouncyCheckbox
                  text="Sort -- A to Z"
                  size={25}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  onPress={() => setModalVisible(!modalVisible)}
                  iconStyle={{borderColor: 'blue'}}
                />
                </View>
              <View>

                <BouncyCheckbox
                  size={25}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  text="Sort -- Z to A"
                  onPress={() => setModalVisible(!modalVisible)}
                  iconStyle={{borderColor: 'blue'}}
                />
              </View>

              </View>
            </View>
          </Modal>

          <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button  onPress={() => setModalVisible(true)}  title="Sort" color="#841584" accessibilityLabel="Clear" />
        </View>
        </View>


       

        <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button  onPress={funCall}  title="Filter" color="#841584" accessibilityLabel="Clear" />
        </View>

    </View>

            <View style={styles.container} >
                <FlatList
                showsVerticalScrollIndicator={false}
                data={users.map((e) =>e)}
                renderItem={({item, index}) => (
                    <Text  style={styles.item}>{item.title}</Text>
                )}
                />
            </View>
                  
    </View>
  );
};
export default HomeScreen;
