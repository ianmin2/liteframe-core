
/**
    SO SERVER INITIALIZATION
**/

    //@ Load the lightly configured express application globally 
    Object.assign( global, require(path.join(__dirname,"app.es6")) );

    //@ Instantiate a global copy of the server with the configured express application
    let server = _SERVER =  http.createServer(app);
    Object.assign(global,{server,_SERVER});

    //@ Make available a global method that instantiates and returns a basic https express application
    let ssl_server  = _SSL_SERVER = ssl_config => https.createServer(ssl_config, app)
    Object.assign( global, { ssl_server,_SSL_SERVER });
    
    //@ Instantiate a socket.io instance on the basic server instance
    let io = _IO = socket.listen(server)
    Object.assign( global, { io, _IO  });

/**
    EO SERVER INITIALIZATION
**/
