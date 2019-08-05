# Simple Ajax Promise - Ajaxp
### 使用Promise封装的轻量化ajax库
### A light lib of ajax using Promise

---

# 基本使用
下载 dist/ajaxp.min.js
在头部引入
```html
<script src="ajaxp.min.js"></script>
```

## 使用ajaxp
- ajax(config)

**interface config**
| 参数	| 默认值	| 类型	| 说明	|
| ----	| ----   |----  |   ----  |
| method |  'GET' |  String | 请求方法，目前支持POST和GET|
| url | "" | String  |    请求地址|
| data |  {} |Object | 请求数据 |
| async| true | Boolean | 是否为异步|
| timeout|  0 | Number   |   超时时间 |

```
​```javascript
ajaxp({
  url: 'http://example.com/xxxx',
  method: 'GET',
  data: {
    'name': 'Ajaxp'
  },
  timeout: 0,
  async: true,
}).then((res) => {
  console.log(res.data)
}, (error) => {
  console.log(error)
})
```

## 静态方法
- ajaxp.get(url[, config])
- ajaxp.delete(url[, config])
- ajaxp.head(url[, config])
- ajaxp.post(url[, data [, config]])
- ajaxp.put(url[, data [, config]])
- ajaxp.patch(url[, data [, config]])


### Example
**使用GET**
```javascript
ajaxp.get('http://example.com/xxx').then((res) => {
  console.log(res.data)
}, (error) => {
  console.log(error)
})
```
**使用POST**
```javascript
ajaxp.post('http://example.com/xxx', {
  firstname: 'foo',
  lastname: 'bar'
})then((res) => {
  console.log(res.data)
}, (error) => {
  console.log(error)
}
```

## 创建实例

ajaxp.create(config)

**interface config** 在静态方法的基础上新增baseURL参数

| 参数	| 默认值	| 类型	| 说明	|
| ----	| ----   |----  |   ----  |
| baseURL | "" | String | 请求的根地址，在此后的方法调用会在此地址上进行 |
| method |  'GET' |  String | 请求方法，目前支持POST和GET|
| url | "" | String  |    请求地址|
| data |  {} |Object | 请求数据 |
| async| true | Boolean | 是否为异步|
| timeout|  0 | Number   |   超时时间 |