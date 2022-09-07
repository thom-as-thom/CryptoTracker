import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import Button from '../button/button';
import Cryptoview from '../CryptoView/cryptoview'
import Header from '../header/header';

function ListContainer() {

    type crypto = {
        name: string;
        symbol: string;
        price_usd: number;
        percent_change_usd_last_24_hours: number;
        id: string;
      }
    
      let cryptos: crypto[] = [
     
      ]
  return (
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
}

export default ListContainer