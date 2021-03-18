import React from 'react'
import { View, Text , TextInput ,StyleSheet} from 'react-native'

export default function InputText( {placeholder , onChangeText, value} ) {
    return (
        <TextInput 
        style={styles.input}
        placeholder = {placeholder}
        onChangeText = {onChangeText}
        value={value}

        ></TextInput>

    )
}
const styles = StyleSheet.create({
    input:{
        
        
        marginTop:20,
        marginLeft:50,
        marginRight:50,
        paddingLeft:30,
        marginBottom:5,
        fontSize:18,
        backgroundColor:"lightgrey",
    }
})

