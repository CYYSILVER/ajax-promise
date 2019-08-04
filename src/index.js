const { convertIfJson } = require('./helpers/util')

module.exports = /** @class */ (function() {
  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   *
   * @param {Obejct} options ajax请求配置
   * @returns {Promise}
   */
  function ajax(options) {
    options = createDefaultOptions(options)
    return send(options)
  }

  ajax.create = function(options) {
    new ajax(options)
  }
  /**
   * ajax GET\DELETE\HEAD请求
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项
   * @returns {Promise}
   */
  ajax.get = function(url, options) {
    options = createDefaultOptions(options)
    options.url = url
    options.method = 'GET'
    return send(options)
  }
  ajax.delete = function(url, options) {
    options = createDefaultOptions(options)
    options.url = url
    options.method = 'DELETE'
    return send(options)
  }
  ajax.head = function(url, options) {
    options = createDefaultOptions(options)
    options.url = url
    options.method = 'HEAD'
    return send(options)
  }

  /**
   * ajax POST\PUT\PATCH 请求
   *
   * @param {String} url url地址
   * @param {Object} data post数据
   * @param {Object} options 其他选项
   * @returns {Promise}
   */
  ajax.post = function(url, data, options) {
    options = createDefaultOptions(options)
    options.data = data
    options.url = url
    options.method = 'POST'
    return send(options)
  }
  ajax.put = function(url, data, options) {
    options = createDefaultOptions(options)
    options.data = data
    options.url = url
    options.method = 'PUT'
    return send(options)
  }
  ajax.patch = function(url, data, options) {
    options = createDefaultOptions(options)
    options.data = data
    options.url = url
    options.method = 'PATCH'
    return send(options)
  }
  

  /**
   * 用于封装xhr对象，发送请求，返回promise对象
   *
   * @param {Object} options ajaxq请求配置
   * @return {Promise}  promised对象
   */
  function send(options) {
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
      let params = JSON.stringify(data)
      method = method.toUpperCase()
      xhr.timeout = timeout
      if (method.match(/^(?:GET|DELETE|HEAD)$/)) {
        xhr.open(method, `${url}?${params}`, async)
        xhr.send(null)
      } else if (method.match(/^(?:POST|PUT|PATCH)/)){
        xhr.open(method, url, async)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(params)
      }
      // TODO: method不支持错误处理
    })
  }

  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */
  function createDefaultOptions(options, url, data) {
    options = Object.assign(
      {
        method: 'GET',
        url: '',
        data: {},
        dataType: 'json',
        async: true,
        cache: true,
        timeout: 0
      },
      options,
    )
    return options
  }

  return ajax
}())

