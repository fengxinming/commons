export const inBrowser = typeof window !== 'undefined';

export const supportsPushState = inBrowser && (function () {
  const ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false;
  }

  return window.history && 'pushState' in window.history;
})();

const versions = {
  objectobject: 7, // IE7-8
  objectundefined: 6 // IE6
};

export const msie = inBrowser && (document.documentMode || versions[typeof document.all + typeof XMLHttpRequest]);
