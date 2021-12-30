# Outline

一个为网站生成目录的 Chrome 插件，受到 [Github Markdown Outline Extension](https://github.com/dbkaplun/github-markdown-outline-extension) 的启发。

> *A Chrome extension, generate outline for website, inspired by [Github Markdown Outline Extension](https://github.com/dbkaplun/github-markdown-outline-extension)*

## 1. 安装 
下载地址: [Chrome 网上应用店](https://chrome.google.com/webstore/detail/outline/hdnnkahjgbbebkfcmefalfmcfclakcdh?hl=zh-CN)

## 2. 如何使用

### 2.1 鼠标左键点击插件图标

*示例图片:*
![左键点击插件图标](https://raw.githubusercontent.com/yes1am/PicBed/master/img/20211226223822.png)

1. 插件默认是开启状态，可点击切换开启/关闭插件(*在不卸载插件的情况下，禁用插件*)
2. 重新生成目录(*由于网页上内容不一定都是在一开始就会渲染出来，脚本执行的时候由于获取不到网页内容，导致生成目录失败，此时可以等页面渲染完毕之后，点击该按钮重新生成目录*)


### 2.2 配置插件

#### 2.2.1 默认配置

源码地址: https://github.com/yes1am/Outline/blob/master/src/constants.ts

*源码:*
```js
export const DEFAULT_CONFIG_SITES: SiteItem[] = [
  {
    urlRegExp: '^https://github.com',
    markdownBodySelector: '.markdown-body',
    navHeight: 49,
  },
  {
    urlRegExp: '^https://www.cnblogs.com/.*.html',
    markdownBodySelector: '#cnblogs_post_body',
  },
  {
    markdownBodySelector: '.Post-RichText',
    urlRegExp: '^https://zhuanlan.zhihu.com/p/',
    navHeight: 52,
  },
];
```

#### 2.2.2 参数解释

##### 2.2.2.1 markdownBodySelector: string、必填

- 标题容器的 DOM 选择器，该参数用来确定文章的内容区域，比如知乎专栏中内容区域对应的选择器就是: `.Post-RichText`
- 只有该选择器所对应 DOM **内部**的 `h1,h2...h6` 等标题元素会被选择出来用于生成目录

*源码:*
```js
const container = document.querySelector(markdownBodySelector);
const headers = container.querySelector('h1,h2,h3,h4,h5,h6')
```

*示例图:*
![知乎示例](https://raw.githubusercontent.com/yes1am/PicBed/master/img/20211226230216.png)


可以看到知乎专栏文章中的 `.Post-RichText` 就是 `h1,h2...h6` 等标题元素的容器元素

##### 2.2.2.2 urlRegExp: string、必填

用来匹配网站，插件只在能够匹配 `urlRegExp` 的网站上生效，比如知乎专栏的链接都是 `https://zhuanlan.zhihu.com/p/xxx`

*源码:*
```js
if(new RegExp(urlRegExp).test(window.location.href)) {
// 插件生效
} else {
// 插件不生效
}
```

##### 2.2.2.3 navHeight: number、选填

有些网站会有一直悬浮(*不会随着网页滚动而消失*)的导航栏，此时点击目录里的标题，滚动之后发现标题依然被导航栏遮挡，此时可以配置该参数使得滚动到更加合适的位置。

*示例图:*
![navHeight 示例](https://raw.githubusercontent.com/yes1am/PicBed/master/img/20211226225748.png)

比如 Github 的导航栏高度是 `49px`，因此针对 Github 的网站应该配置 `49`。

##### 2.2.2.4 iframeSelector: string、选填

同 `markdownBodySelector` 一样，该参数用来指定 iframe 元素的 DOM 选择器。在有些网站(比如 `confluence` ) 上，真正的文章内容区域嵌套在 `<iframe>` 标签里面，此时要想正确的生成目录，则应该指定对应 iframe DOM 选择器。

##### 2.2.2.5 useScrollIntoView: boolean、选填

该参数指定是否使用原生的 [element.scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 进行滚动。插件默认采用 [scroll-into-view](https://github.com/KoryNunn/scroll-into-view) 进行滚动，如果该插件滚动位置不准确，可指定 `useScrollIntoView` 参数，使用原生的 [element.scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView) 进行滚动，缺点是：此时可能会存在滚动定位不准确的问题（有些网站顶部悬浮的 navbar 会把标题挡住）。

#### 2.2.3 新增配置

默认只配置了[几个网站](https://github.com/yes1am/Outline/blob/master/src/constants.ts)的规则，想在别的网站生成目录可以自行配置规则:

1. 右键点击插件，点击**选项**进入配置页面

*示例图 1:*  

![右键点击插件](https://raw.githubusercontent.com/yes1am/PicBed/master/img/20211226232142.png)

*示例图 2:*  

![配置详情页](https://raw.githubusercontent.com/yes1am/PicBed/master/img/20211226232311.png)

2. 编辑配置(**严格的 JSON 格式**)，点击提交
3. 进入你所配置的网站，刷新页面查看配置是否生效

## 3. 效果展示

**[知乎示例](https://zhuanlan.zhihu.com/p/41179053)**

![知乎](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633247939964.png)

**[Github 示例](https://github.com/yes1am/logo-hub)**
![Github](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633248093597.png)

**[博客园示例](https://www.cnblogs.com/rubylouvre/p/4783966.html)**
![博客园](https://raw.githubusercontent.com/yes1am/PicBed/master/img/screely-1633248543403.png)

## 4. 常用网站配置

该插件的配置需要一些前端知识，为方便不了解前端的用户使用该插件，故在此 [WEBSITE_CONFIG.md](./WEBSITE_CONFIG.md) 维护一些常用网站的配置，也欢迎贡献配置 ~