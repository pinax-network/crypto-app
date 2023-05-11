interface I18n {
  [locale: string]: {
    title: string,
    description: string,
  }
}

export default {
  en: {
    title: "What's my Team?",
    description: "Select your team and find out who you are!",
  },
  ko: {
    title: "내 팀은 무엇입니까?",
    description: "팀을 선택하고 누구인지 알아보세요!",
  },
  zh: {
    title: "我的团队是什么？",
    description: "选择您的团队并找出您是谁！",
  }
} as I18n;
