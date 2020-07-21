/*
 * @Author: OriX
 * @Date: 2020-07-22 00:20:46
 * @LastEditors: OriX
 * @LastEditTime: 2020-07-22 00:20:46
 */
function deleteCookie (name) {
  setCookie(name, "", {
    'max-age': -1
  })
}