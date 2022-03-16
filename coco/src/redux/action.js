import firestore from '@react-native-firebase/firestore';
var g = [];
const data111 = param => {
  console.log('ggggggggg', g);
  var t = [];
  console.log('param getting', param);
  t = g
    .filter(function (item) {
      return item.g[0] === param;
    })
    .map(function ({g, title}) {
      return {g, title};
    });
  return t;
};

export const fetchDataToChange = (params, params2) => {
  return async dispatch => {
    const unsubscribe = firestore()
      .collection('cocoData')
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
      
        console.log('FIREBASE DATA ', data[0].userCocoData);

        if (params2 === 'HOME') {
          dispatch({type: 'FETCH_DATA', payload: params});
        } else if (params2 === 'FILTER') {
          console.log('FILTER', params);
          dispatch({type: 'FETCH_DATA', payload: params});
        } else {
          dispatch({type: 'FETCH_DATA', payload: data[0].userCocoData});
        }
      });
  };
};
export const sortAtoZ = () => {
  return dispatch => {};
};
export const SET_USER_DATA = 'SET_USER_DATA';
export const setUserData = dataUser => {
  console.log('setValuesComing', dataUser);
  return dispatch => {
    dispatch({
      type: 'SET_DATA',
      payload: dataUser,
    });
  };
};
