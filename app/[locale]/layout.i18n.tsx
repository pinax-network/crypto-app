interface I18n {
  [locale: string]: {
    title: string,
    description: string,
  }
}

export default {
  en: {
    title: "Crypto Prices",
    description: "See the prices of different cryptocurrencies",
  },
  ko: {
    title: "암호화폐 가격",
    description: "다양한 암호화폐의 가격 보기",
  },
  zh: {
    title: "加密价格",
    description: "查看不同加密货币的价格",
  }
} as I18n;
