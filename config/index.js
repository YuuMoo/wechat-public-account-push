export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxfd22566357ed3fb9",
    // 公众号appSecret
    appSecret: "7527e23d19122c6ea71d19e9383dd3ea",
    // 模板消息id
    templateId: "M25SSCo23rdwStCYuGWIndYZEYfZI_0zUotmES_JnIA	",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [],

    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "焦作",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小于", "year": "2000", "date": "04-07", "type": 'new'},
    ],
    // 相遇的日子，格式同上
    loveDate: "2022-07-02",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
