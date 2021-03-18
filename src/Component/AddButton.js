import React from 'react'
import { View, Text, Button ,alert, StyleSheet } from 'react-native'
import store from '../redux/store'

export default function AddButton({_add}) {
    const a = store.getState().todoList
    return (
        <View>
            <Button
            onPress={()=>_add()}
            title="ADD"
            color="skyblue">
            
            

            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius:40,
        
        
    }
})
