exports.get_params 
=   exports.getParams 
=   exports._GET_PARAMS 
=   ( req ) =>  global.keyFormat(global.keyFormat( ( Object.keys(req.body).length > 0 ) ? req.body : (global.url.parse( req.url , true ).query) ? url.parse( req.url , true ).query : {} ));
