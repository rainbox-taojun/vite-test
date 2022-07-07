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
  }
]
