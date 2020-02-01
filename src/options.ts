import { SiteItem } from './types';
import { getStorageSites, setStorageSites } from './utils';

const KEYS_ARR:string[] = ['urlRegExp', 'markdownBodySelector', 'stickyHeight'];

window.addEventListener('load', () => {
  const configArea = document.querySelector('#config-area');
  let isClicked = false;
  const addConfigBtn = document.querySelector('#add-config-btn');
  if (configArea) {
    getStorageSites((configSites) => {
      try {
        (configArea as HTMLInputElement).value = JSON.stringify(configSites, null, 2);
      } catch (e) {
        console.debug('options.js, JSON.stringify(configSites,null,2) error');
      }
    });
  }

  if (addConfigBtn && configArea) {
    addConfigBtn.addEventListener('click', () => {
      if (isClicked) {
        return;
      }
      isClicked = true;
      const textareaArea = (configArea as HTMLInputElement).value;
      let newConfigValue = null;
      try {
        newConfigValue = JSON.parse(textareaArea);
        newConfigValue.some((item:SiteItem) => KEYS_ARR.some((key) => {
          // eslint-disable-next-line no-prototype-builtins
          if (!(item.hasOwnProperty(key))) {
            throw new Error(`every item should has key: ${key}`);
          }
          return false;
        }));
      } catch (e) {
        alert(`textarea value format error: ${e}`);
        isClicked = false;
        return;
      }
      setStorageSites(newConfigValue, () => {
        isClicked = false;
        alert('config save success');
      });
    });
  }
});
