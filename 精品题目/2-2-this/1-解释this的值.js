let obj, method;

obj = {
  go: function() { alert(this); }
};
(obj.go || obj.stop)(); //  undefined
