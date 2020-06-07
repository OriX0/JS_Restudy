'user strict';
let url = '';
(async ()=>{
  let response = await fetch(url);
  // 获得流读取器
  let reader = response.body.getReader();
  // 获得内容长度
  let contentLength = +response.headers.get('content-length');
  // 缓存读取到的二进制数据及长度
  let chunks =[];
  let receivedLength = 0;
  while(true) {
    let {done,value} = await reader.read();
    if(done) break;
    chunks.append(value);
    receivedLength+=value.length;
  }
  // 根据下载的字节长度创建一个unit8Array
  let chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for(let chunk in chunks){
    chunksAll.set(chunk,position);
    position+=chunk.length;
  }
  // 解码
  let result = new TextDecoder('utf-8').decode(chunksAll);
  console.log(result);
})();


