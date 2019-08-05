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

}
