const { send } = require('./core/index')

module.exports = /** @class */ (function() {
  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   *
   * @param {Obejct} options ajax请求配置
   * @returns {Promise}
   */
  function ajax(param1, param2) {
    let options = param2 || param1
    let url = param2 ? param1 : ""
    options = createOptions(options, url)
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
    options = createOptions(options, url)
    options.method = 'GET'
    return send(options)
  }
  ajax.delete = function(url, options) {
    options = createOptions(options, url)
    options.method = 'DELETE'
    return send(options)
  }
  ajax.head = function(url, options) {
    options = createOptions(options, url)
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
    options = createOptions(options, url, data)
    options.method = 'POST'
    return send(options)
  }
  ajax.put = function(url, data, options) {
    options = createOptions(options, url, data)
    options.method = 'PUT'
    return send(options)
  }
  ajax.patch = function(url, data, options) {
    options = createOptions(options, url, data)
    options.method = 'PATCH'
    return send(options)
  }
  
  /**
   * 混合默认ajax配置与新的ajax配置
   *
   * @param {*} options 新的配置
   * @returns {Object} 混合后的配置
   */
  function createOptions(options, url, data) {
    options = options || {}
    options.url = url
    options.data = data
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

