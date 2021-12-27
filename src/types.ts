export interface SiteItem {
  // URL 的正则表达式
  urlRegExp: string;
  // h1,h2 等等这些标题元素容器的选择器
  markdownBodySelector: string;
  // 导航栏高度(有的网站导航栏会悬浮，导致滚动到的位置不对)
  navHeight?: number;
  // iframe 的选择器
  iframeSelector?: string;
}

export interface StorageItem {
  enabled: boolean;
  configSites: SiteItem [];
}

export interface HeaderInfo {
  text: string;
  level: number;
  index: number;
  children: Partial<HeaderInfo>[];
  parents: number[];
}
