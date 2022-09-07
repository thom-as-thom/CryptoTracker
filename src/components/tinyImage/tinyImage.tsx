import React from 'react'
import { Image, StyleSheet } from 'react-native'

function TinyImage() {
  return (
    <Image 
        style={styles.tinyLogo}
        source={{
          uri: 'https://picsum.photos/200' }}
          />
  )
}

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