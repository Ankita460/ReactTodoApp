import React from 'react';
import { View, Text , Modal ,StyleSheet} from 'react-native';
import AddButton from './AddButton';

import InputText from './InputText';


export default function ModalComponent({isModalVisible , isUpdateModal ,  _closeModal , _setName , _setDescription ,  _add , TaskName, updateDescription }) {
    return (
        <View>
            <Modal transparent onRequestClose={() =>_closeModal()} visible={isModalVisible || isUpdateModal}>
         
         
         
          <View>

          <View style={styles.addModal}>
            <InputText placeholder={"Task Name"} onChangeText={(value)=>_setName(value)} value={TaskName}/>
            <InputText placeholder={"Description"} onChangeText={(value)=>_setDescription(value)} value={updateDescription} />

            <AddButton _add={_add}  />
        </View>


       



          </View>

        </Modal>

        </View>
    )
} const styles = StyleSheet.create({
   
    addModal:{
        backgroundColor: 'grey',
        marginVertical:200,
        // borderRadius:10,
        marginLeft:10,
        marginRight:10,
        marginBottom: 25,

    
    },
  
})

