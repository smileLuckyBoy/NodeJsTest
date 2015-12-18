//本案例中需要http和url模块
var http = require('http');
var url = require('url');

function start(route,handler){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log('receive the request from' + pathname);

		//安装不同请求进行路由
		var output = route(pathname,handler);

		response.writeHead(200, {"Content-Type":"text/plain"})
		// response.write("hello world");
		response.write(output);

		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('server start...');
}

//创建自己的模块
exports.start = start;