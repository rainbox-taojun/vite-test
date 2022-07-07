export default [
  {
    url: '/city/city_features',
    method: 'post',
    response: ({body}) => {
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
    method: 'post',
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
    method: 'post',
    response: ({body}) => {
      return {
        code: 200,
        data: 'success'
      }
    }
  },

  {
    url: '/safety/index',
    method: 'get',
    response: ({body}) => {
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
  }
]
