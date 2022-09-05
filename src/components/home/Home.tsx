import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Cryptoview from '../CryptoView/cryptoview'

function Home() {
  let cryptos = [
    {name:"Bitcoin", symbol: "BTC", price_usd: 19778.46, percent_change_usd_last_24_hours:-0.64}
  ]
  return (
    <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            CryptoTracker Pro
          </Text>
        </View>
        {/* Para mostrar las cryptos aca tengo que hacer un map */}
        <Cryptoview name={cryptos[0].name} abreviation={cryptos[0].symbol} price= {cryptos[0].price_usd} change={cryptos[0].percent_change_usd_last_24_hours} />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create ({
  header: {
    padding: 40,
    backgroundColor: "#38577f"
  },
  headerText:{
    color: "white",
    fontSize: 20,
    fontWeight:"bold",
    marginLeft: -10
  }
})