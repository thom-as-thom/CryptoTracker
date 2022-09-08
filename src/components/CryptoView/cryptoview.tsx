import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TinyImage from '../tinyImage/tinyImage'

type crypto = {
  name: string;
  symbol: string;
  price_usd: number;
  percent_change_usd_last_24_hours: number;
  id: string;
  imgUrl:string;
}

const Cryptoview = (props:crypto) => (
    <View style={styles.cryptoView}>
      <View style={styles.cryptoName}>
        <TinyImage imgUrl={props.imgUrl} />
          <View style={styles.cryptoText}>
            <Text style={styles.bold}>
              {props.name}
            </Text>
            <Text>
              {props.symbol}
            </Text>
          </View>
      </View>
      <View style={styles.cryptoStatus}>
        <Text style={styles.bold}>
          ${props.price_usd}
        </Text>
        <Text style= { props.percent_change_usd_last_24_hours > 0 ? styles.greenChange : styles.redChange }>
          {props.percent_change_usd_last_24_hours}
        </Text>
      </View>
    </View>
  )


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