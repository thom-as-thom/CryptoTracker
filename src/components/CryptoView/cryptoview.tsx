import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TinyImage from '../tinyImage/tinyImage'

// todos los valores estan hardcoded, pero deberían de venir por props

function Cryptoview(props:any) {
  return (
    <View style={styles.cryptoView}>
      <View style={styles.cryptoName}>
        <TinyImage/>
          <View style={styles.cryptoText}>
            <Text style={styles.bold}>
              {props.name}
            </Text>
            <Text>
              {props.abreviation}
            </Text>
          </View>
      </View>
      <View style={styles.cryptoStatus}>
        <Text style={styles.bold}>
          ${props.price}
        </Text>
        <Text style= { props.change > 0 ? styles.greenChange : styles.redChange }>
          {props.change}
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
    marginHorizontal: 30,
    paddingVertical: 28,
    alignItems: 'center',
    borderBottomColor: '#dedede',
    borderStyle:'solid',
    borderBottomWidth:1
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10
  },
  cryptoName: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cryptoText: {
    flexDirection: 'column',

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
    color: "red"
  }

})