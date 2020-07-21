/*
 * @Author: OriX
 * @Date: 2020-07-22 00:15:13
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-22 00:16:51
 */
// 返回具有给定 name 的 cookie， 如果没找到，则返回 undefined
function getCookie (name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*
  new RegExp 是动态生成的，以匹配 ; name=<value>
  请注意 cookie 的值是经过编码的，所以 getCookie 使用了内建方法 decodeURIComponent 函数对其进行解码
*/