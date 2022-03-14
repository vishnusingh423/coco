import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>SORTING</Text>
            <BouncyCheckbox
              style={styles.item}
              size={25}
              fillColor="blue"
              unfillColor="#FFFFFF"
              text="Sort -- A to Z"
              onPress={() => setModalVisible(!modalVisible)}
              iconStyle={{borderColor: 'blue'}}
            />

            <BouncyCheckbox
              style={styles.item}
              size={25}
              fillColor="blue"
              unfillColor="#FFFFFF"
              text="Sort -- Z to A"
              onPress={() => setModalVisible(!modalVisible)}
              iconStyle={{borderColor: 'blue'}}
            />

           
          </View>
          <View>
            <Text>oks</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginTop: 741,
    paddingLeft:52,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    alignItems: 'flex-start',
    shadowColor: '#000',
    width: 443,
    height: 122,
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
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Modals;
