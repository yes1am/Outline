<h1> Outline </h1>

A Chrome extension, generate outline for website, inspired by [Github Markdown Outline Extension](https://github.com/dbkaplun/github-markdown-outline-extension)

**[知乎示例](https://zhuanlan.zhihu.com/p/41179053)**

![知乎](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633247939964.png)

**[Github 示例](https://github.com/yes1am/logo-hub)**
![Github](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633248093597.png)

**[博客园示例](https://www.cnblogs.com/rubylouvre/p/4783966.html)**
![博客园](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633248543403.png)

## 1. 如何使用

1. 通过 `git clone ...` or `Download ZIP` 下载该扩展
2. 在 Chrome 地址栏输入 `chrome://extensions` 进入扩展页
3. 开启开发者模式
4. 点击加载 "已解压的扩展程序"，选择该扩展所在的路径
5. 通过点击插件图标，切换是否启用该扩展
6. 通过选项页，可配置插件所运行的网站页面(默认支持知乎专栏、Github、博客园)

## 2. 选项页配置

### 2.1 [默认配置](https://github.com/yes1am/Outline/blob/master/src/constants.ts#L3-L25)

```json
[
  {
    "markdownBodySelector": ".markdown-body",
    "urlRegExp": "^https://github.com"
  },
  {
    "markdownBodySelector": ".markdown-body",
    "urlRegExp": "^https://github.com/.*/issues/"
  },
  {
    "markdownBodySelector": "#cnblogs_post_body",
    "urlRegExp": "^https://www.cnblogs.com/.*.html"
  },
  {
    "markdownBodySelector": ".Post-RichText",
    "urlRegExp": "^https://zhuanlan.zhihu.com/p/"
  }
]
```

### 2.2 参数解释:

- **markdownBodySelector**
```js
// markdownBodySelector 参数用来确定文章的内容区域
// 只有该区域的 header 标签会被选择出来
// markdownBodySelector 可以是 id,class

const container = document.querySelector(markdownBodySelector);
const headers = container.querySelector('h1,h2,h3,h4,h5')
```

- **urlRegExp**

```js
// 用于判断当前网站是否含有配置项
//
if(new RegExp(urlRegExp).test(window.location.href)) {
// extension work
} else {
// not work
}
```

## 参考资料
1. [Chrome 扩展开发教程](http://blog.haoji.me/chrome-plugin-develop.html)
2. [Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)