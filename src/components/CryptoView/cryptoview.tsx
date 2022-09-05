import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

function Cryptoview(change) {
  return (
    <View style={styles.cryptoView}>
      <View style={styles.cryptoName}>
        <Image 
        style={styles.tinyLogo}
        source={{
          uri: 'https://picsum.photos/200' }}
          />
          <View style={styles.cryptoText}>
            <Text style={styles.bold}>
              Bitcoin
            </Text>
            <Text>
              BTC
            </Text>
          </View>
      </View>
      <View style={styles.cryptoStatus}>
        <Text style={styles.bold}>
          $7215.68
        </Text>
        <Text style= { change > 0 ? styles.greenChange : styles.redChange}>
          +1.82%
        </Text>
      </View>
        
    </View>
  )
}

export default Cryptoview

const styles = StyleSheet.create ({
  cryptoView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 30,
    alignItems: 'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  cryptoName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cryptoText: {
    flexDirection: 'column',
    margin: 5
  },
  bold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black"
  },
  cryptoStatus: {
    alignItems: 'flex-end'
  },
  greenChange: {
    color: "green"
  },
  redChange: {
    color: "green"
  }

})