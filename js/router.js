function route(pathname, handler) {
    console.log('pathname is ' + pathname);
    if (typeof handler[pathname] === 'function')
        return handler[pathname]();
    else
    	return "pathname is illegal";
        // console.log('pathname is illegal');
}

exports.route = route;