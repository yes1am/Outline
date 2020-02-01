<h1> essay-outline </h1>

A Chrome extension, generate essay-outline on all sites, inspired by [Github Markdown Outline Extension](https://github.com/dbkaplun/github-markdown-outline-extension)

*知乎 示例*  
![知乎](https://raw.githubusercontent.com/yes1am/PicBed/master/img/626046a6d5a643762ec6217c1b7b5f7.png)  

*Github 示例*  
![Github](https://raw.githubusercontent.com/yes1am/PicBed/master/img/473abadf2de68d59c300bb0cca75ff8.png)

*cnblog 示例*  
![cnblog](https://raw.githubusercontent.com/yes1am/PicBed/master/img/8f4bbaa5090c2f3ae713b306c70ba90.png)

## 1. 如何使用

1. 通过 `git clone ...` or `Download ZIP` 下载该扩展
2. 在 Chrome 地址栏输入 `chrome://extensions` 进入扩展页
3. 开启开发者模式
4. 点击加载 "已解压的扩展程序"，选择该扩展所在的路径
5. 通过点击插件图标，切换是否启用该扩展
6. 通过选项页，可配置插件所运行的网站页面(默认支持 Github, cnblogs, 知乎专栏)

## 2. 选项页配置

### 2.1 默认配置

```json
[
  {
    "markdownBodySelector": ".markdown-body",
    "stickyHeight": 0,
    "urlRegExp": "^https://github.com"
  },
  {
    "markdownBodySelector": ".markdown-body",
    "stickyHeight": 60,
    "urlRegExp": "^https://github.com/.*/issues/"
  },
  {
    "markdownBodySelector": "#cnblogs_post_body",
    "stickyHeight": 0,
    "urlRegExp": "^https://www.cnblogs.com/.*.html/"
  },
  {
    "markdownBodySelector": ".Post-RichText",
    "stickyHeight": 52,
    "urlRegExp": "^https://zhuanlan.zhihu.com/p/"
  }
]
```

### 2.2 参数解释:  

**markdownBodySelector**  
```js
// markdownBodySelector 参数用来确定文章的内容区域
// 只有该区域的 header 标签会被选择出来
// markdownBodySelector 可以是 id,class

const container = document.querySelector(markdownBodySelector);
const headers = container.querySelector('h1,h2,h3,h4,h5')
```

**stickyHeight**  

```js
// 有很多的网站页面，会存在 sticky 元素
// 这导致在实际导航中，需要减去 sticky 的高度，如 github issue 页面该值为 60
// 在一些页面，除了 sticky 元素，滚动过程中还会有别的元素出现，导致计算错误出现 bug

document.documentElement.scrollTop = top - stickyHeight
```

**urlRegExp**  

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

1. [Icon 来源](https://www.flaticon.com/)
2. [Chrome 扩展开发教程](http://blog.haoji.me/chrome-plugin-develop.html)
3. [Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)