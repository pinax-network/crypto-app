"use client"
import t from './Home.i18n'
import React, { useState } from 'react';
import useSWR from 'swr'
import { Card, Text, List, ListItem, Title , Dropdown, DropdownItem, Grid, Col, } from "@tremor/react"

export default function Home( props: any ) {
  
  const locale = props.locale
  const [ currencyHeader, setCurrencyHeader] = useState("usd");
  const [ currencyDisplay, setCurrencyDisplay] = useState("US$ ");
  const { data, error, isLoading } = useSWR(currencyHeader, fetcher)

  function setCurrency(currency: string) {
    switch (currency) {
      case "USD":
        setCurrencyHeader("usd")
        setCurrencyDisplay("US$ ")
        break;
      case "CAD":
        setCurrencyHeader("cad")
        setCurrencyDisplay("CA$ ")
        break;
      case "EUR":
        setCurrencyHeader("eur")
        setCurrencyDisplay("€ ")
        break;
    }
  }

  if(!data) return (
  <main className="bg-slate-200">
  {t[locale]["request-limit"]}
  </main>);
  return (
    <main className="bg-slate-200 h-screen w-full pt-20">
    <Grid numCols={1} numColsSm={3} numColsLg={1} className="gap-2">
      <Card className="max-w-xl h-96">
        <Title>{t[locale]["title"]}</Title>
        <List>
        {data.map((data: { name: string, current_price:number, image: string }) => (
          <ListItem key={data.name}>
            <span>
            <img style={{ width: 20, height: 20 }}src={data.image} alt="" />
            </span>
            <span>{data.name}</span>
            <span>{currencyDisplay}{data.current_price}</span>
          </ListItem>
        ))}
        </List>
      </Card>

      <Card className="max-w-xl">
        <Text>{t[locale]["select-currency"]}</Text>
        <Dropdown onValueChange={(value) => {setCurrency(value);}}>
          <DropdownItem value="USD" text={"USD"} />
          <DropdownItem value="CAD" text={"CAD"} />
          <DropdownItem value="EUR" text={"EURO"} />
        </Dropdown>
      </Card>
      <Card className="max-w-xl">
        <Text>{t[locale]["lang"]}</Text>
        <Text>{t[locale]["cryptos"]}</Text>
      </Card>
    </Grid>

   
    </main>
  )
}

export async function fetcher(currency: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
  const data = await response.json()
  return data
}
