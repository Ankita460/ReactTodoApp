import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import store from '../redux/store';
import {Delete, Update} from '../redux/action'


export default function List({item, id, TaskName, Description , updateIndex, edit, updateDescription }) {
  return (
    <View>
        <TouchableOpacity onPress={()=>edit()}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.TaskName}>{TaskName}</Text>
          <Text style={styles.Description}>{Description}</Text>
        </View>
        <TouchableOpacity style={styles.touch} onPress={()=> store.dispatch(Delete(id))}>
          <Text style={styles.trash}>DELETE</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.update} onPress={()=>edit()}>EDIT</Text>
          </TouchableOpacity> */}
      </View>
      <View style={styles.line}></View>
      </TouchableOpacity>

      
    </View>
  );
}
const styles = StyleSheet.create({
  TaskName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
  Description: {
    marginLeft: 20,
    marginTop: 5,
  },
  line: {
    height: 1.5,
    backgroundColor: '#E0E0E0',
    marginLeft: 15,
  },
  trash: {
    width: 50,
    height: 30,
    marginTop: 10,
    fontWeight: 'bold',
  },
  update:{
    width: 50,
    height: 30,
    marginTop: 10,
    fontWeight: 'bold'
  },
  touch:{
      marginLeft:'auto',
      marginRight:15
  }
});
