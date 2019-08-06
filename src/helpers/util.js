module.exports = {
  /**
   * 将Object格式转换为查询字符串，如{a:1} => a=1
   *
   * @param {Object} data 数据
   * @returns {String} 查询字符串
   */
  getParams(data) {
    let queryStr = [] // 返回字符串
    for (let param in data) {
      queryStr.push(`${encodeURIComponent(param)}=${encodeURIComponent(data[param])}`)
    }
    return queryStr.join('&')
  },

  /**
   * 如果是json格式字符串，则返回object，否则不改变原字符串
   *
   * @param {String} str
   * @returns {Object | String}
   */
  convertIfJson(str) {
    try {
      return JSON.parse(str)
    } catch (error) {
      return str
    }
  },

  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */
  createOptions(options = {}, url = '', data = {}) {
    options = Object.assign(
      {
        method: 'GET',
        url: '',
        data: {},
        dataType: 'json',
        async: true,
        cache: true,
        timeout: 0,
        baseURL: ''
      },
      options,
      {
        url: url,
        data: data
      }
    )
    return options
  },

  /**
   * 用于连接格式化url字符串，比如http://localhost:3000与students连接为
   * http://localhost:3000/students
   * 
   * @param {String} baseURL  
   * @param {String} url 
   * @returns {String} 格式后的url字符串
   */
  concatBaseURLAndURL(baseURL, url) {
    if (baseURL[baseURL.length-1] !== '/') {
      baseURL = baseURL + '/'
    }
    if (url[0] === '/') {
      url = url.slice(1)
    }
    return baseURL+url
  },

 
}
