/* 假如有如下每个元素都由字母's'加数字组成的数组arr，
现在找出其中最大的数字：（arr不为空） */
const arr = ['s0', 's4', 's1', 's2', 's8', 's3']
const maxS = arr.reduce((preMax, cur) => {
  const curNum = +(cur.replace('s', ''));
  return curNum > preMax ? curNum : preMax;
}, 0);