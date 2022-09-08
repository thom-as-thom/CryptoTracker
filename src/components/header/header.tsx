import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import TinyImage from '../tinyImage/tinyImage'

const Header = () => (

    <View style={styles.header}>
          <Text style={styles.headerText}>
            CryptoTracker Pro
          </Text>
          <TinyImage imgUrl={"https://firebasestorage.googleapis.com/v0/b/nocountry-c6-g21.appspot.com/o/brand%20image%206.jpg?alt=media&token=192deaea-ca2e-49b1-983d-0675a48d3c1a"}/>
    </View>
  )

export default Header

const styles = StyleSheet.create ({
    header: {
      padding: 20,
      backgroundColor: "#38577f",
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: 'space-between',
    },
    headerText:{
      color: "white",
      fontSize: 20,
      fontWeight:"bold",
      marginLeft: -10,
      alignSelf: "center"
    }
  })