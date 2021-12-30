import { SiteItem } from './types';

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

// 插件是否开启
export const DEFAULT_EXTENSION_ENABLE = true;

// 抽屉是否打开
export const DEFAULT_EXTENSION_ACTIVE = false;
