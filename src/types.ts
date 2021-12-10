export interface SiteItem {
  urlRegExp: String;
  markdownBodySelector: string;
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
