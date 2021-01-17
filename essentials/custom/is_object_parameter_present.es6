const isPresent 
= ( object, paramsArray ) => 
{

    let process = ( p_Array = [] ) => 
    { 
        const keys = (typeof(object) == 'string' || typeof(object) == 'number' )
                        ? [object] 
                        : Object.keys(object);

        return ( p_Array.filter(p_val => keys.indexOf(p_val)!= -1).length ) ? true : false ;
    };

    return Array.isArray(paramsArray) 
            ? process( paramsArray )
            : process( 
                (typeof(paramsArray) == "string") 
                    ? paramsArray.split(',') 
                    : [] 
            );

}

let is_present 
=   _IS_PRESENT 
=   isPresent; 

module.exports = {isPresent,is_present,_IS_PRESENT};