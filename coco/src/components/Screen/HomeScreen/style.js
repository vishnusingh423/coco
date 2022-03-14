import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 2,
  },
  item: {
    padding: 30,
    fontSize: 17,
    height: 1,
  },
  centeredView: {
    marginTop: 622,
  },
  modalView: {
    paddingLeft: 44,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingBottom: 22,
    justifyContent: 'space-evenly',
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
    fontSize: 13,
  },
});

export default styles;
