const isDefined 
=  function( object, paramsArray )
{

	let retval = true;

	let process = function( )
	{
	    paramsArray.forEach(function(param) {
		let currParam = object[param]
		if( currParam == undefined || !currParam ){
		    retval = false;
		}
	    }, this);
	    return retval;
	};

	if( !Array.isArray(paramsArray) )
	{
	    paramsArray = (typeof(paramsArray) == "string") ?  paramsArray.split(",") : undefined;

		return (!paramsArray) ? false : process();

	}
	else
	{          

	    return process();

	}

};

exports.isDefined 
= exports.is_defined 
= exports._IS_DEFINED
= isDefined;