import React from 'react'
import { Image, StyleSheet } from 'react-native'

const TinyImage = (props:any) =>(
    <Image 
        style={styles.tinyLogo}
        source={{
          uri: props.imgUrl }}
          />
  )

export default TinyImage

const styles = StyleSheet.create ({
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 100,
      marginRight: 10,
      alignSelf: "center"
    },
})