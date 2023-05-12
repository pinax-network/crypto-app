interface I18n {
    [locale: string]: {
        "select-your-team": string,
        "i-dont-know": string,
        "lang":string,
        "cryptos": string,
    }
}

export default {
  en: {
    "select-your-team": "Select your team",
    "i-dont-know": "I don't know",
    "lang": "language",
    "cryptos": "Crypto Prices",
  },
  ko: {
    "select-your-team": "팀을 선택하세요",
    "i-dont-know": "모르겠습니다",
    "lang": "언어",
    "cryptos":"암호화폐 가격"
  },
  zh: {
    "select-your-team": "选择您的团队",
    "i-dont-know": "我不知道",
    "lang": "语言",
    "cryptos": "加密价格"
  }
} as I18n;