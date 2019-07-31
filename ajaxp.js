var ajaxp = /** @class */ (function() {

  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   * 
   * @param {Obejct} options ajax请求配置
   * @returns
   */
  function ajax(options) {
    options = createDefaultOptions(options)
    return send(options)
  }

  ajax.get = function(url, options) {
    options = createDefaultOptions(options)
    options.url = url
    options.method = 'GET'
    return send(options)
  }

  ajax.post = function(url, options) {
    options = createDefaultOptions(options)
    options.url = url
    options.method = 'POST'
    return send(options)
  }

  /**
   * 用于封装xhr对象，返回promise对象
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
            headers.trim('\n').split('\n').forEach((param, index) => {
              
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
      let { method, async, url, params, timeout } = options
      xhr.timeout = timeout
      if (method == 'GET') {
        xhr.open(method, `${url}?${params}`, async)
        xhr.send(null)
      } else {
        xhr.open(method, url, async)
        xhr.setRequestHeader('Content-method', 'application/x-www-form-urlencoded')
        xhr.send(params)
      }
    })
  }
  /**
   * 如果是jsong格式字符串，则返回object，否则不改变原字符串
   *
   * @param {String} str
   * @returns {Object | String} 
   */
  function convertIfJson(str) {
    try { 
      return JSON.parse(str)
    } catch (error) {
      return str
    }
  } 


  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */
  function createDefaultOptions(options) {
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
      options
    )
    options.method = options.method.toUpperCase()
    // 将传入参数转化为查询字符
    options.params = getParams(options.data)
    return options
  }

  /**
   * 将Object格式转换为查询字符串，如{a:1} => a=1
   *
   * @param {Object} data 数据 
   * @param {Boolean} cache 暂时没用
   * @returns {String} 查询字符串
   */
  function getParams(data, cache) {
    let queryStr = [] // 返回字符串
    for (let param in data) {
      queryStr.push(`${encodeURIComponent(param)}=${encodeURIComponent(data[param])}`)
    }
    return queryStr.join('&')
  }

  return ajax
})()
