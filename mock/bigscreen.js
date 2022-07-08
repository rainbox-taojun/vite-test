export default [
  {
    url: '/city/city_features',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 200,
        data: [
          {
            "name": "治安评估指数",

            "value": "93"

          },
          {
            "name": "交通运行指数",

            "value": 0

          },
          {
            "name": "GDP增速",

            "value": 0

          },
          {
            "name": "实时空气质量",

            "value": "37"

          },
          {
            "name": "平安治理指数",

            "value": 0

          },
          {
            "name": "畅游指数",

            "value": 0

          },
          {
            "name": "民营经济健康指数",

            "value": 0

          },
          {
            "name": "智控指数",

            "value": "98.94"

          }
        ]
      }
    }
  },

  {
    url: '/assessment/index',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [
          {
            "name": "市民政局",
            "value": "93"
          }
        ]
      }
    }
  },

  // user logout
  {
    url: '/dltj/index',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          "education": [
            {
              "name": "最高学历本科以上占比",

              "value": "0.8294575596482829"

            },
            {
              "name": "全日制本科学历占比",

              "value": "0.34448615555163636"

            }
          ],

          "position": [
            {
              "name": "科级以上领导职务占比",

              "value": "21.92"

            },
            {
              "name": "四级调研员以上职级占比",

              "value": "5.60"

            },
            {
              "name": "一至四级主任科员职级占比",

              "value": "61.31"

            }
          ]

        }
      }
    }
  },

  {
    url: '/safety/index',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 200,
        data: {
          "list": [
            {
              "name": "总人口",

              "value": "8321102"

            },
            {
              "name": "当日有效求助警情",

              "value": "498"

            },
            {
              "name": "当日有效警情",

              "value": "2853"

            },
            {
              "name": "当日报警量",

              "value": "6647"

            }
          ],

          "chart": {
            "x": [
              "2022-06-27",
              "2022-06-28",
              "2022-06-29",
              "2022-06-30",
              "2022-07-01",
              "2022-07-02",
              "2022-07-03",
              "2022-07-04",
              "2022-07-05",
              "2022-07-06"
            ],

            "y": [
              "596999527",
              "597872020",
              "598725127",
              "599546225",
              "600400356",
              "601318955",
              "602060477",
              "602811350",
              "603646493",
              "604313729"
            ]

          }
        }
      }
    }
  },

  {
    url: '/economic',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 200,
        "data": {
          "chart1": {
            "x": [
              "2021-2",
              "2021-3",
              "2021-4",
              "2021-5",
              "2021-6",
              "2021-7",
              "2021-8",
              "2021-9",
              "2021-10",
              "2021-11",
              "2021-12",
              "2022-1",
              "2022-2",
              "2022-3"
            ],

            "y": [
              "100.8",
              "101.1",
              "101.2",
              "101.3",
              "101.5",
              "101.5",
              "101.4",
              "101.4",
              "101.4",
              "101.4",
              "101.4",
              "100.9",
              "100.5",
              "100.5"
            ]

          },

          "list": [
            {
              "name": "核心制造业增加值增速",

              "value": "9.00"

            },
            {
              "name": "GDP增速",

              "value": 0

            },
            {
              "name": "民营经济健康指数",

              "value": 0

            },
            {
              "name": "地区生产总值（GDP）累计增速",

              "value": 0

            }
          ]

        }
      }
    }
  },

  {
    url: '/evt/getWorkOrderSecondByKeyword',
    method: 'get',
    response: ({ body }) => {
      return {
        code: 200,
        data: [
          {
            "name": "防疫政策",

            "value": 1200

          },
          {
            "name": "防疫码",

            "value": 3700

          },
          {
            "name": "离职欠薪纠纷",

            "value": 138

          },
          {
            "name": "道路施工",

            "value": 364

          },
          {
            "name": "韵达",

            "value": 195

          },
          {
            "name": "公司欠薪",

            "value": 1128

          },
          {
            "name": "道路破损",

            "value": 192

          },
          {
            "name": "非法用工",

            "value": 33

          },
          {
            "name": "汽车消费",

            "value": 174

          },
          {
            "name": "交通",

            "value": 270

          },
          {
            "name": "城市园林",

            "value": 120

          },
          {
            "name": "工地欠薪",

            "value": 674

          },
          {
            "name": "建筑垃圾",

            "value": 204

          },
          {
            "name": "预付卡消费",

            "value": 305

          },
          {
            "name": "核酸检测",

            "value": 1359

          },
          {
            "name": "工地噪音",

            "value": 367

          },
          {
            "name": "圆通",

            "value": 176

          },
          {
            "name": "生产噪音",

            "value": 287

          },
          {
            "name": "线上交易",

            "value": 392

          },
          {
            "name": "生活垃圾",

            "value": 493

          },
          {
            "name": "商业噪音",

            "value": 197

          },
          {
            "name": "邮政",

            "value": 182

          },
          {
            "name": "疫苗",

            "value": 275

          },
          {
            "name": "中通",

            "value": 277

          },
          {
            "name": "餐饮消费",

            "value": 74

          },
          {
            "name": "垃圾分类",

            "value": 21

          },
          {
            "name": "公共设施",

            "value": 61

          },
          {
            "name": "广场舞噪音",

            "value": 32

          },
          {
            "name": "百世",

            "value": 13

          },
          {
            "name": "工业垃圾",

            "value": 9

          }
        ]
      }
    }
  }
]
