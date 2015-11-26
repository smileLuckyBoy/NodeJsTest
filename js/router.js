function route(pathname, handler) {
    console.log('pathname is ' + pathname);
    if (typeof handler[pathname] === 'function')
        handler[pathname]();
    else
        console.log('pathname is illegal');
}

exports.route = route;