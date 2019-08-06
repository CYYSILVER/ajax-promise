const { send, ajaxRequestWithData, ajaxRequestWithoutData } = require('./core/index')
const { createOptions, concatBaseURLAndURL } = require('./helpers/util')
const ajaxp = /** @class */ (function() {
 
 
 
  /**
   * 直接发送ajax请求，相关配置以options为参数传入
   *
   * @param {Obejct} options ajax请求配置
   * @returns {Promise}
   */
  function ajax(param1, param2) {
    let options = param2 || param1
    let url = param2 ? param1 : ''
    options = createOptions(options, url)
    return send(options)
  }



  /**
   * 创建ajaxp实列对象，使用Object.create方法
   *
   * @param {Object} options 要传入的配置参数
   * @returns {Object} ajaxp对象
   */
  ajax.create = function(options) {
    let o = Object.create(ajax.prototype)
    o.options = createOptions(options)
    createOptions()
    return o
  }



  /**
   * 发送请求，方法为config.method
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项，该选项优先级高于实例选项
   * @returns {Promise}
   */
  ajax.prototype.request = function(url, options) {
    let { baseURL, method } = this.options
    options = Object.assign({}, this.options, options)
    return ajax[method](concatBaseURLAndURL(baseURL, url), options)
  }



  ;['get', 'delete', 'head'].forEach(method => {
    /**
     * ajax GET\DELETE\HEAD请求
     *
     * @param {String} url url地址
     * @param {Object} options 其他选项，该选项优先级高于实例选项
     * @returns {Promise}
     */
    ajax.prototype[method] = function(url, options) {
      let { baseURL } = this.options
      options = Object.assign({}, this.options, options)
      return ajax[method](concatBaseURLAndURL(baseURL, url), options)
    }
  })



  ;['post', 'put', 'patch'].forEach(method => {
    /**
     * ajax POST\PUT\PATCH 请求
     *
     * @param {String} url url地址
     * @param {Object} data 数据
     * @param {Object} options 其他选项，该选项优先级高于实例选项
     * @returns {Promise}
     */
    ajax.prototype[method] = function(url, data, options) {
      let { baseURL } = this.options
      options = Object.assign({}, this.options, options)
      return ajax[method](concatBaseURLAndURL(baseURL, url), data, options)
    }
  })



  /**
   * ajax GET\DELETE\HEAD请求
   *
   * @param {String} url url地址
   * @param {Object} options 其他选项
   * @returns {Promise}
   */
  ajax.get = ajaxRequestWithoutData('GET')
  ajax.delete = ajaxRequestWithoutData('DELETE')
  ajax.head = ajaxRequestWithoutData('HEAD')


  
  /**
   * ajax POST\PUT\PATCH 请求
   *
   * @param {String} url url地址
   * @param {Object} data 数据
   * @param {Object} options 其他选项
   * @returns {Promise}
   */
  ajax.post = ajaxRequestWithData('POST')
  ajax.put = ajaxRequestWithData('PUT')
  ajax.patch = ajaxRequestWithData('PATCH')

  return ajax
})()

module.exports = ajaxp
