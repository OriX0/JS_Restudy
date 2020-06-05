const user = {
  name: "John"
};

// 这样有效吗？ 
// 有效 const 保证user的引用不变 但引用内部的改变对其没有影响
user.name = "Pete";