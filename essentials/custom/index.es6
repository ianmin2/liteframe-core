/** 
 *  AGE CALCULATOR
 **/   
exports.getMyAge 
=   exports.getAge 
=   exports._GET_MY_AGE 
=   exports._GET_AGE 
=   ( birthDate ) => 
{     
    return ( Math.abs( new Date( Date.now() - new Date( birthDate ).getTime() ).getUTCFullYear() - 1970 ) );
};

/**
* PROPERLY FORMAT JSON ( made especially FROM jQuery.ajax REQUESTS )
*/
exports.keyFormat 
=   exports._KEY_FORMAT 
=   (dta = {} ,exemptions = []) => 
{
    
    //@ Piece declaration
    var pieces;

     //@ Loop through each key => value pair
    for(var key in dta) {

         //@ EXEMPT THE SPECIFIED KEYS */
        if( exemptions.indexOf(key) == -1 ){

            if (dta[key]) {
                pieces = key.match(/(.+)\[(.+)]/);
                if(pieces){
                    if (pieces.length > 1) {
                        dta[pieces[1]] = dta[pieces[1]] || {};
                        dta[pieces[1]][pieces[2]] = dta[key];
                        delete dta[key];
                    }
                }
                
            }

        }
         
    }

    return dta;

};

/**
* SPLIT ARRAY INTO CHUNKS OF 'x' UNITS
*/   
exports.splitArray  
=   exports._SPLIT_ARRAY 
=   function(arr = [],chunk_size=25)
{

    if(Array.isArray(arr)){

        return arr.map( function(e,i){
            return i%chunk_size===0? arr.slice(i,i+chunk_size): null;
        })
        .filter(function(e){
            return e;
        });
        
    }

};

//@ Api Response formatter
Object.assign(exports,require(path.join(__dirname,'api_response_formatter.es6')));

//@ Custom methods for object manipulation
Object.assign(exports,require(path.join(__dirname,'basic_methods.es6')));

//@ The file logger
Object.assign(exports,require(path.join(__dirname,'logger.es6')));

//@ The internet connectivity status checker
Object.assign(exports,require(path.join(__dirname,'is_online.es6')));

//@ HTTP PARAMETERS GETTER/PARSER
Object.assign(exports,require(path.join(__dirname,'get_http_request_params.es6')));

//@ Check if the specified properties are defined in an object
Object.assign(exports,require(path.join(__dirname,'is_object_parameter_defined.es6')));

//@ Check if the specified properties are present in an object
Object.assign(exports,require(path.join(__dirname,'is_object_parameter_present.es6')));

// //@ Handle IP address formating
Object.assign(exports,require( path.join(__dirname,'ip_formatter.es6')));

// //@ File I/O Handlers
Object.assign(exports,require(path.join(__dirname,'file_reader.es6')));
Object.assign(exports,require(path.join(__dirname,'file_writer.es6')));

//@ A complex regex based object content format verifier
Object.assign(exports,require(path.join(__dirname,'object_property_structure_verifier.es6')));