import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {Sort} from '..';
import NavigationString from '../../NavigatorScreen/NavigationString';
import store from '../../../redux/index';
import { useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import userReducer from '../../../redux/reducer';
import firestore from '@react-native-firebase/firestore';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Filter = ({navigation, route}) => {
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

        });
    }, []);
    console.log('the main data ', users);

  const {items} = useSelector(state => state.userReducer)

  const [isSelected, setSelection] = useState(false);
    const callHome =()=>{
        
    navigation.navigate(NavigationString.HOME);
    }
  return (
    <>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <>
            {/* <Item title={item} /> */}

            <BouncyCheckbox
              style={styles.item}
              size={30}
              fillColor="blue"
              unfillColor="#FFFFFF"
              text={item}
              iconStyle={{borderColor: 'blue'}}
            />
          </>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 33,
          justifyContent: 'space-evenly',
        }}>
        <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button title="Clear" color="#841584" accessibilityLabel="Clear" />
        </View>
        <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button title="Apply" color="#841584" accessibilityLabel="Apply" onPress={callHome} />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {},
  item: {
    padding: 10,
    marginVertical: 0,
  },
  header: {
    fontSize: 12,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 14,
  },
});
export default Filter;
