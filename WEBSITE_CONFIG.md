# 常用网站配置

注意: 请使用严格的 JSON 格式(例如需使用**双引号**包裹 `key` 和 `value`)

### 1. Github 

示例网址: https://github.com/yes1am/logo-hub

配置:
```js
{
    "urlRegExp": "^https://github.com",
    "markdownBodySelector": ".markdown-body",
    "navHeight": 49,
}
```

### 2. 博客园

示例网址: https://www.cnblogs.com/rubylouvre/p/4783966.html

配置:
```js
{
    "urlRegExp": "^https://www.cnblogs.com/.*.html",
    "markdownBodySelector": "#cnblogs_post_body",
}
```

### 3. 知乎

示例网址: https://zhuanlan.zhihu.com/p/41179053

配置:
```js
{
    "markdownBodySelector": ".Post-RichText",
    "urlRegExp": "^https://zhuanlan.zhihu.com/p/",
    "navHeight": 52,
}
```

### 4. 掘金

示例网址: https://juejin.cn/post/6950557086916804645

配置:
```js
{
    "markdownBodySelector": ".markdown-body",
    "urlRegExp": "^https://juejin.cn/post/"
}
```