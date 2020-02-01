export interface SiteItem {
  urlRegExp: String;
  markdownBodySelector: string;
  stickyHeight: number;
}

export interface StorageItem {
  enabled: boolean;
  configSites: SiteItem [];
}

export interface HeaderInfo {
  html: string;
  level: string;
  top: number;
}
