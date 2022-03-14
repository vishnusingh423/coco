import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  StatusBar,
  TextInput,
  Button, TouchableOpacity
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {Sort} from '..';
import NavigationString from '../../NavigatorScreen/NavigationString';
import { useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import userReducer from '../../../redux/reducer';
import firestore from '@react-native-firebase/firestore';

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
     <BouncyCheckbox
              style={styles.item}
              size={30}
              fillColor="blue"
              unfillColor="#FFFFFF"
              text={item}
              iconStyle={{borderColor: 'blue'}}
            />

  </TouchableOpacity>
);
const Filter = ({navigation, route}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [filterUsers, setFilterUsers] = useState([]); 
  const mn =  route.params;

  console.log('ffff' , mn)
  const [users, setUsers] = useState([]); 
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "transparent";
    const color = item.id === selectedId ? 'black' : 'black';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
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

  const {items} = useSelector(state => state.userReducer)

  const [isSelected, setSelection] = useState(false);
    const callHome =()=>{
        
    navigation.navigate(NavigationString.HOME);
    }

    const  journalEvents = (journal)=>{
      let events = [];
      for (let entry of journal) {
        for (let event of entry.data) {
          if (!events.includes(event)) {
            events.push(event);
          }
        }
      }
      return events;
    }
    // var result = journalEvents(users)
    // setFilterUsers(result)
    
    console.log('the main data ', filterUsers);

  return (
    <>
  <SafeAreaView style={styles.container}>
      <FlatList
        data={mn.name}
        renderItem={renderItem}
       
      />
    </SafeAreaView>
      
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 0,
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
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
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
