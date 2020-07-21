/*
 * @Author: OriX
 * @Date: 2020-07-22 00:17:24
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-22 00:20:24
 */
function setCookie (name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  // 将name和value进行编码
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  // 将选项增加到cookie中
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// 使用范例：
setCookie('user', 'OriX', { secure: true, 'max-age': 3600 });