const MakeResponse  = function( status, message, command  )
{
  
        return { 
                response: status || 500,
                data : 
                { 
                        message: message,
                        command: (command === undefined) ? ( ( status === 200 )? "done": "retry" ) : command
                } 
        };
};
    


exports.makeResponse 
= exports.make_response
= exports._MAKE_RESPONSE 
= ( status, message, command ) => 
{
        return new MakeResponse(status, message, command);
};