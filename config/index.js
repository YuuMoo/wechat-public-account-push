export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxfd22566357ed3fb9",

  // 公众号APP_SECRET
  APP_SECRET: "7527e23d19122c6ea71d19e9383dd3ea",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "臭小王",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oFP-Z6LulZNrC3q3CwFStxGXj4yY",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "M25SSCo23rdwStCYuGWIndYZEYfZI_0zUotmES_JnIA",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "臭小王",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oFP-Z6LulZNrC3q3CwFStxGXj4yY",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "M25SSCo23rdwStCYuGWIndYZEYfZI_0zUotmES_JnIA",
      // 所在省份
      province: "河南",
      // 所在城市
      city: "焦作",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "臭小王", 
      id: "oFP-Z6LulZNrC3q3CwFStxGXj4yY",
      useTemplateId: "M25SSCo23rdwStCYuGWIndYZEYfZI_0zUotmES_JnIA",
      province: "",
      city: "焦作",
      openUrl: "https://wangxinleo.cn"
    }
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: ""M25SSCo23rdwStCYuGWIndYZEYfZI_0zUotmES_JnIA"",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oFP-Z6LulZNrC3q3CwFStxGXj4yY",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "河南",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "焦作",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "小于", "year": "2000", "date": "04-07"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 相识的日子
    {"keyword": "love_day", date: "2022-04-07"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "申请成为你爱里的永久居民。"
      "我攒了好多有趣的事，见面说给你听。"
      "分享日常这件事太暧昧了，你只能和我做。"
      "如果今天你看过晚霞，就当我们见过面了。"
      "我很疯，我的爱也是。"
      "我肯同你一起，没有船票我跟你游"
      "愿我们的祖国繁荣昌盛！"
      "人间本不该如此令人欣喜，但我们相遇了。"
      "1945年8月15日，日本宣布无条件投降。"
      "没法客观评价，我心偏你。",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
