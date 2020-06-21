let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
// 答案是error 因为属性go后无分号