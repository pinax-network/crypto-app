interface I18n {
    [locale: string]: {
        "select-your-team": string,
        "i-dont-know": string,
        "lang":string,
        "cryptos": string,
        "request-limit": string,
        "select-currency": string,
        "title": string,
    }
}

export default {
  en: {
    "select-your-team": "Select your team",
    "i-dont-know": "I don't know",
    "lang": "English",
    "cryptos": "Testing the localization",
    "request-limit": "Request limit reached",
    "select-currency": "Select your currency",
    "title": "Crypto prices"
  },
  ko: {
    "select-your-team": "팀을 선택하세요",
    "i-dont-know": "모르겠습니다",
    "lang": "중국인",
    "cryptos":"현지화 테스트",
    "request-limit": "요청 한도 도달",
    "select-currency": "통화 선택",
    "title": "암호화폐 가격"
  },
  zh: {
    "select-your-team": "选择您的团队",
    "i-dont-know": "我不知道",
    "lang": "中国人",
    "cryptos": "测试本地化",
    "request-limit": "已达到请求限制",
    "select-currency": "选择您的货币",
    "title": "加密价格"

  }
} as I18n;