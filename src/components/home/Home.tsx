import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../button/button';
import Cryptoview from '../CryptoView/cryptoview'
import Header from '../header/header';

function Home() {
  type crypto = {
    name: string;
    symbol: string;
    price_usd: number;
    percent_change_usd_last_24_hours: number;
    id: string;
  }

  let cryptos: crypto[] = [
    {name:"Bitcoin", symbol: "BTC", price_usd: 19778.51, percent_change_usd_last_24_hours:-0.64, id:"1"}, {name:"Ethereum", symbol: "ETH", price_usd: 7591.48, percent_change_usd_last_24_hours:+1.64, id:"2"}, {name:"Litecoin", symbol: "LTC", price_usd: 654.25, percent_change_usd_last_24_hours:-6.64, id:"3"},
  ]

  return (
    <View>

      <Header/>
      <SafeAreaView>

          <FlatList
            data={cryptos}
            keyExtractor={ (item)=> item.id}
            renderItem={({item}) => <Cryptoview name={item.name} abreviation={item.symbol} price={item.price_usd} change={item.percent_change_usd_last_24_hours} id={item.id}/>}
            />
            <Button text="+ Add a Cryptocurrency"/>
      </SafeAreaView>
    </View>
  )
}

export default Home

