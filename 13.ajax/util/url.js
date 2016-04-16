var url = require('url');
/**
 * {
  protocol: 'http:',协议
  slashes: true, //
 auth: 'zfpx:123', 用户名和密码
  host: 'localhost:8080', 主机
  port: '8080', 端口
  hostname: 'localhost', 主机名
  hash: '#top', 哈希值
  search: '?username=zfpx&password=123456',
  query: 'username=zfpx&password=123456',
  pathname: '/login', 路径 端口号和?中间的部分
  path: '/login?username=zfpx&password=123456',
  href: 'http://localhost:8080/login?username=zfpx&password=123456' }
 */
var urlObj = url.parse('http://zfpx:123@localhost:8080/login?username=zfpx&password=123456#top',true);
console.log(urlObj);
//console.log(JSON.stringify(urlObj));
//把一个对象转成字符串
console.log(url.format(urlObj));