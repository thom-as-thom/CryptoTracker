import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import Button from '../button/button';
import Cryptoview from '../CryptoView/cryptoview'
import Header from '../header/header';

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

const ListContainer = () => (
    <SafeAreaView>
        <FlatList
            ListHeaderComponent={<Header/>}
            ListEmptyComponent={<></>}
            data={cryptos}
            keyExtractor={ (item)=> item.id}
            renderItem={({item}) => <Cryptoview name={item.name} symbol={item.symbol} price_usd={item.price_usd} percent_change_usd_last_24_hours={item.percent_change_usd_last_24_hours} id={item.id}/>}
            ListFooterComponent={<Button text="+ Add a cryptocurrency"/>}
      />
    </SafeAreaView>
  )

export default ListContainer