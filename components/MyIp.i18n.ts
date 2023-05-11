interface I18n {
    [locale: string]: {
        "my-ip-from": string,
        unknown: string,
    }
}

export default {
    en: {
        "my-ip-from": "My IP from",
        unknown: "unknown",
    },
    ko: {
        "my-ip-from": "내 IP 주소",
        unknown: "알 수 없음",
    },
    zh: {
        "my-ip-from": "我的IP来自",
        unknown: "未知",
    }
} as I18n;