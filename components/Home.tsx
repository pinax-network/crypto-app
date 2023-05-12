"use client"
import Image from 'next/image'
import { Locale } from '@/i18n-config'
import t from './Home.i18n'
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import useSWR from 'swr'


export default function Home( props: any ) {
  // const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  // const data = await response.json()
  const locale = props.locale
  //const data = props.data
  
  const [ currency, setCurrency] = useState("cad");
  const [ currencyName, setCurrencyName] = useState("cad");



  const { data, error, isLoading } = useSWR(currency, fetcher)

  const currentCurrency = "CA$";

  console.log(props)
  if(!data) return <></>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="title">
        <h1>Crypto Prices</h1>
      </div>
      <div className="cryptos">
              
        <div className="card">
          <div className="image">
              <img src={data[0].image} alt="" />
          </div>
          <h4>{data[0].name}</h4>
          <p>{currencyName}{data[0].current_price}</p>
        </div>
        <div className="card">
          <div className="image">
              <img src={data[1].image} alt="" />
          </div>
          <h4>{data[1].name}</h4>
          <p>{currencyName}{data[1].current_price}</p>
        </div>
        <div className="card">
          <div className="image">
              <img src={data[2].image} alt="" />
          </div>
          <h4>{data[2].name}</h4>
          <p>{currencyName}{data[2].current_price}</p>
        </div>
      </div>

      <button onClick={() => {setCurrency("usd");  setCurrencyName("US$ ")}} >
        USD
      </button>
      <button onClick={() => {setCurrency("cad");  setCurrencyName("CA$ ")}}>
        CAD
      </button>

      <h1>hello</h1>
      <h1>{t[locale]["lang"]}</h1>
      <h1>{t[locale]["i-dont-know"]}</h1>
    </main>
  )
}
export async function fetcher(currency: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
  const data = await response.json()

  return data
  
}
