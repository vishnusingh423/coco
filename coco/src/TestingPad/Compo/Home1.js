import React, { useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { fetchDataToChange } from '../Redux/Action/MyAction';
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title.title}</Text>
    </View>
  );
  
const Home1 = ()=>{
    const dispatch = useDispatch();
    const myFetchData  = useSelector((state)=>
    {
        return state.fetchData
    })

myFetchData.map((E) => console.log(E.title))
useEffect(()=>{
    dispatch(fetchDataToChange());

},[])


    const renderItem = ({ item }) => (
        <Item title={item} />
      );

    return(
        <SafeAreaView style={styles.container}>
        <FlatList
          data={myFetchData}
          renderItem={renderItem}
        />
      </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 0,
      marginTop: StatusBar.currentHeight || 10,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
export default Home1;