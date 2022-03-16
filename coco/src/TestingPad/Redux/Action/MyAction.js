import firestore from '@react-native-firebase/firestore';

export const fetchDataToChange =()=>{
    return async (dispatch) =>{
        const unsubscribe = firestore()
        .collection('cocoData')
        .onSnapshot(snapshot => {
          const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
        //   setUsers(data[0].userCocoData);
          console.log('FIREBASE DATA ' , data[0].userCocoData )
      
       
          dispatch({type : 'FETCH_DATA' ,payload: data[0].userCocoData });
        });
    }
}

export const setAtoZ =(params)=>{
  return (dispatch)=>{
    dispatch({type:'SET_DATA' , payload:params})
  }
}
// return{
//     type:'FETCH_DATA',
//     payload:paramsData
// }