// 用async和await重写
function loadJson (url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}


async function loadJson (url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json;
    return json;
  }
  throw new Error(response.status);
}

// 重写
/*
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

// 查询用户名直到 github 返回一个合法的用户
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();
*/
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson (url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }
  throw new HttpError(response);
}
async function demoGithubUser () {
  let name = prompt("Enter a name?", "iliakan");
  let user;
  while (true) {
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      return user;
    } catch (error) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  }
}


//我们在一个「普通的」函数中，如何调用另一个 async 函数并且拿到返回值？

async function wait () {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f () {
  wait().then(result => alert(result));
  // ...这里怎么写？
  // 我们需要调用 async wait() 等待并拿到结果 10
  // 记住, 我们不能使用 「await」
}