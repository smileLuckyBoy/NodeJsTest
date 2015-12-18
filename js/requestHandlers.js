function start(){
	console.log("request handler 'start' was called");
	return "start was called";
}

function upload(){
	// console.log("request handler 'upload' was called");
	return "upload was called";
}

exports.start = start;
exports.upload = upload;