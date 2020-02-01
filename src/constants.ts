import { SiteItem } from './types';

export const DEFAULT_CONFIG_SITES: SiteItem[] = [
  {
    urlRegExp: '^https://github.com',
    markdownBodySelector: '.markdown-body',
    stickyHeight: 0,
  },
  {
    urlRegExp: '^https://github.com/.*/issues/',
    markdownBodySelector: '.markdown-body',
    // in issues page, the issues title will be sticky, so we need to minus its height
    stickyHeight: 60,
  },
  {
    urlRegExp: '^https://www.cnblogs.com/.*.html/',
    markdownBodySelector: '#cnblogs_post_body',
    stickyHeight: 0,
  },
  {
    markdownBodySelector: '.Post-RichText',
    stickyHeight: 52,
    urlRegExp: '^https://zhuanlan.zhihu.com/p/',
  },
];

// 插件是否开启
export const DEFAULT_EXTENSION_ENABLE = true;

// 抽屉是否打开
export const DEFAULT_EXTENSION_ACTIVE = false;
