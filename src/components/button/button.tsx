import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Button(props:any) {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            {props.text}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button:{
    alignSelf: "center",
    margin: 42,
    
  },
  buttonText:{
    color: "#38577f",
    fontSize: 17,
  }
})