interface I18n {
    [locale: string]: {
        "select-your-team": string,
        "i-dont-know": string,
    }
}

export default {
  en: {
    "select-your-team": "Select your team",
    "i-dont-know": "I don't know",
  },
  ko: {
    "select-your-team": "팀을 선택하세요",
    "i-dont-know": "모르겠습니다",
  },
  zh: {
    "select-your-team": "选择您的团队",
    "i-dont-know": "我不知道",
  }
} as I18n;