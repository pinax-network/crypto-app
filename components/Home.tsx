import Image from 'next/image'
import { Locale } from '@/i18n-config'
import t from './Home.i18n'
import axios from "axios";
import { useRouter } from "next/router";

type Data = {
  id:                               string;
  symbol:                           string;
  name:                             string;
  image:                            string;
  current_price:                    number;
  market_cap:                       number;
  market_cap_rank:                  number;
  fully_diluted_valuation:          number;
  total_volume:                     number;
  high_24h:                         number;
  low_24h:                          number;
  price_change_24h:                 number;
  price_change_percentage_24h:      number;
  market_cap_change_24h:            number;
  market_cap_change_percentage_24h: number;
  circulating_supply:               number;
  total_supply:                     number;
  max_supply:                       number;
  ath:                              number;
  ath_change_percentage:            number;
  ath_date:                         Date;
  atl:                              number;
  atl_change_percentage:            number;
  atl_date:                         Date;
  roi:                              null;
  last_updated:                     Date;
}



export default function Home({ locale }: { locale: Locale }, {data}) {
  const router = useRouter();

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
                    <p>CA${data[0].current_price}</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={data[1].image} alt="" />
                    </div>
                    <h4>{data[1].name}</h4>
                    <p>CA${data[1].current_price}</p>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={data[2].image} alt="" />
                    </div>
                    <h4>{data[2].name}</h4>
                    <p>CA${data[2].current_price}</p>
                </div>
        </div>
        <div className="currency">
            <h2>Currency</h2>
            <button onClick={() => router.push("/cryptos/usd")}>USD</button>
            <button>CAD</button>
        </div>
        <div className="language">
            <h2>Language</h2>
            <button>English</button>
            <button>Korean</button>
            <button>Chinese</button>

        </div>
      <h1>hello</h1>
      <h1>{t[locale]["i-dont-know"]}</h1>
    </main>
  )
}
export async function getServerSideProps() {
  // const crypto = await axios.get(
  //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  // );
  // const data = crypto.data;
  // return {
  //   props: { data },
  // };
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin%2Cethereum%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
  const data = await response.json()

  return {
    props: {
      data: data
    }
  }
}
