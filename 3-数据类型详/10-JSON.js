// 转换 user 为 JSON 然后将其存进另一个变量。

let user = {
  name: "John Smith",
  age: 35
};
let jsonUser = JSON.stringify(user);
let user2 = JSON.parse(jsonUser);
alert(jsonUser);

// 
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer (key, value) {
  /* your code */
  // return (key="" || key == "occupiedBy" || key == "self") ? undefined : value;
  // 要判断 key=="" 以排除第一个调用时 value 是 meetup
  return (key != "" && value == meetup) ? undefined : value;
}));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/