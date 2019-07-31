# Simple Ajax Promise - Ajaxp
### 使用Promise封装的轻量化ajax库
### A light lib of ajax using Promise

---

# 基本使用
在头部引入
```html
<script src="ajaxp.js"></script>
```

- 使用ajaxp
```javascript
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

## 简化方式
- ajax.get()
- ajax.post()
```javascript
ajaxp.get(url, config).then((res) => {
  console.log(res.data)
}, (error) => {
  console.log(error)
})
```

# 文档持续重新中