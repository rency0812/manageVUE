// 支持使用 js 文件来输出 mock 配置的内容
module.exports = {
  api: {
    'POST /api/pet': {
      response: {
        'tags|1-5': [{
          'ID': '@id',
          'Name': '@cname'
        }]
      }
    },
    'POST /api/pet/:id/delete': {
      response: {
        'tags|1-5': [{
          'ID': '@id',
          'Name': '@cname'
        }]
      }
    }
  }
}