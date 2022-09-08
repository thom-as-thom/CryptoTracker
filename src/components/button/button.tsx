import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type prop = {
  text: string;
}

const Button = (props:prop) => (

    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            {props.text}
        </Text>
    </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
  button:{
    alignSelf: "center",
    margin: 42,
    flex: 1
    
  },
  buttonText:{
    color: "#38577f",
    fontSize: 17,
  }
})