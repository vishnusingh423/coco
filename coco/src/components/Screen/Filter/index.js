import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  SectionList,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import NavigationString from '../../NavigatorScreen/NavigationString';
import {useDispatch, useSelector} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CheckboxList from 'rn-checkbox-list';
import {fetchDataToChange} from '../../../redux/action';

const Filter = ({navigation, route}) => {
  const [checkboxState, setCheckboxState] = useState(true);
  const datValues = [];
  const dv = [];
  const [dataFilterStore, setDataFilter] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [filterUsers, setFilterUsers] = useState([]);
  const users1 = useSelector(state => {
    return state.fetchData;
  });
  const dispatch = useDispatch();
  const journalEvents = journal => {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.data) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
      ``;
    }
    return events;
  };
  const filterDataSelected = param => {
    var t = [];
    t = users1
      .filter(function (item) {
        return item.data[0] === param || item.data[1] === param;
      })
      .map(function ({data, title}) {
        return {data, title};
      });
    return t;
  };
  const callingFilterFunction = (par1, global1) => {
    var newResultUser;
    var t1 = [];
    par1.forEach(element => {
      t1.push(element.name);
    });
    for (let x of t1) {
      newResultUser=filterDataSelected(x);
    }
    return newResultUser
  };

  var users = journalEvents(users1);
  users.map((e, i) => datValues.push({id: i, name: e}));
  dataFilterStore.map(e => dv.push(e.name));

  useDispatch(() => {}, []);

  const [isSelected, setSelection] = useState(false);
  const callHome = () => {
    var x1 = callingFilterFunction(dataFilterStore, users1);
    dispatch(fetchDataToChange(x1, 'FILTER'));
    navigation.navigate(NavigationString.HOME);
  };

  return (
    <>
      <CheckboxList
        headerName="Select All"
        theme="red"
        listItems={datValues}
        onChange={({items}) => setDataFilter(items)}
        listItemStyle={{borderBottomColor: '#eee', borderBottomWidth: 1}}
        checkboxProp={{boxType: 'circle'}} // iOS (supported from v0.3.0)
      />

      <View
        style={{
          flexDirection: 'row',
          marginBottom: 90,
          justifyContent: 'space-evenly',
        }}>
        {/* <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button title="Clear" color="#841584" accessibilityLabel="Clear" />
        </View> */}

        <View style={{borderWidth: 3, borderRadius: 33, width: 122}}>
          <Button
            title="Apply"
            color="#841584"
            accessibilityLabel="Apply"
            onPress={callHome}
          />
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
