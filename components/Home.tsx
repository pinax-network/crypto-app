"use client"
import Image from 'next/image'
import { Locale } from '@/i18n-config'
import t from './Home.i18n'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import useSWR from 'swr'


export default function Home( props: any ) {

  const locale = props.locale
  const [ currency, setCurrency] = useState("usd");
  const [ currencyName, setCurrencyName] = useState("USD$ ");
  const { data, error, isLoading } = useSWR(currency, fetcher)

  console.log(props)

  if(!data) return <>{t[locale]["request-limit"]}</>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="title">
        <h1>Crypto Prices</h1>
      </div>

      
      <div className="cryptos">
        {data.map((data: { name: string, current_price:number, image: string }) => {
          return (
            <main>
              <div className="image">
                <img src={data.image} alt="" />
              </div>
              <h1>{data.name}</h1>
              <h1>{currencyName}{data.current_price}</h1>
            </main>
          )})}
      </div>

      <h1>{t[locale]["select-currency"]}</h1>
      <button onClick={() => {setCurrency("usd");  setCurrencyName("US$ ")}} >
        USD
      </button>

      <button onClick={() => {setCurrency("cad");  setCurrencyName("CA$ ")}}>
        CAD
      </button>

      <h1>{t[locale]["lang"]}</h1>
      <h1>{t[locale]["cryptos"]}</h1>
    </main>
  )
}

export async function fetcher(currency: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
  const data = await response.json()

  return data
  
}
