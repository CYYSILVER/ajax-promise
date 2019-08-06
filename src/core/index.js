const { convertIfJson, getParams, createOptions } = require('../helpers/util')
let core = {
  send(options) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            // 将响应封装为对象
            let headersObj = {}
            let headers = xhr.getAllResponseHeaders()
            headers
              .trim('\n')
              .split('\n')
              .forEach((param, index) => {
                let matches = param.match(/(.*?): (.*)/)
                let key = matches[1]
                let value = matches[2]
                headersObj[key] = value
              })

            let response = {
              data: convertIfJson(xhr.response), // 转换为Object，如果为Json格式的h话
              config: options,
              status: xhr.status,
              statusText: xhr.statusText,
              headers: headersObj,
              request: xhr
            }

            resolve(response)
          } else {
            reject(new Error(`Request failed with status code ${xhr.status}`))
          }
        }
      }

      // 获取参数
      let { method, async, url, data, timeout } = options
      // 将传入参数转化为查询字符
      let params = getParams(data)
      method = method.toUpperCase()
      xhr.timeout = timeout
      if (method.match(/^(?:GET|DELETE|HEAD)$/)) {
        xhr.open(method, params ? `${url}?${params}` : `${url}`, async)
        xhr.send(null)
      } else if (method.match(/^(?:POST|PUT|PATCH)/)) {
        xhr.open(method, url, async)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(params)
      }
      // TODO: method不支持错误处理
    })
  },
  ajaxRequestWithData(type) {
    return (url, data, options) => {
      options = createOptions(options, url, data)
      options.method = type
      return core.send(options)
    }
  },
  ajaxRequestWithoutData(type) {
    return (url, options) => {
      options = createOptions(options, url)
      options.method = type
      return core.send(options)
    }
  }
}
module.exports = core