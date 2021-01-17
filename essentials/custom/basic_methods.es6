
//**  MONTHS ARRAY
exports.monthArray 
= exports._MONTH_ARRAY 
= ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//** VALIDATE WHETHER TWO GIVEN VALUES MATCH
exports.matches 
= exports._MATCHES 
= ( val1, val2 ) => ( val1 === val2 );
    
//** TRANFORM NUMBER TO MONTH
exports.num2month 
= exports._NUM2MONTH 
= ( month_number ) => ( !isNaN(month_number) && (month_number <= exports._MONTH_ARRAY.length) ) ? exports._MONTH_ARRAY[month_number] : "Invalid Month" ;

exports.getMonthName  
= exports._GET_MONTH_NAME   
= exports.num2month;
    
//** REMOVE DUPLICATES FROM ARRAY
exports.isUnique 
= exports._IS_UNIQUE 
=  ( array_ ) => 
{

    if(Array.isArray(array_))
    {
        var ret_array = new Array();

        for (var a = array_.length - 1; a >= 0; a--) {

            for (var b = array_.length - 1; b >= 0; b--) {

                if(array_[a] == array_[b] && a != b){

                    delete array_[b];

                }

            };

            if(array_[a] != undefined)

            ret_array.push(array_[a]);

        };

        return ret_array.reverse();

    }
    else
    {
        return ["not an array"];
    }

};
    
//** COUNT OCCURANCES IN AN ARRAY
exports.count 
=  exports._COUNT 
= ( val, obj ) => 
    obj.reduce( (cumulative,currVal) => {
        return ( currVal == val ) ? cumulative+=1 : cumulative;
    },
0);

//** CONDITIONALLY TRANSFORM TO STRING
exports.str 
= exports._STR 
= ( obj ) =>
{
    try {
        return ( typeof(obj) === "object" ) ? JSON.stringify(obj) : obj ;
    } 
    catch (error) 
    {
        return obj;
    }
} 

//** CONDITIONALLY TRANSFORM TO JSON
exports.json 
= exports._JSON 
= ( obj ) => 
{ 
    try 
    {  
        return ( typeof(obj) === 'object' ) ? obj : JSON.parse( obj );
    } 
    catch(e)
    { 
        return obj; 
    } 
}

//** CLONE AN OBJECT
exports.clone 
= exports._CLONE 
= (obj) => JSON.parse( JSON.stringify( obj ) );
