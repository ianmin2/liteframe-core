//@ Capitalize string values in an array **/
Array.prototype.capitalize = function(){
    return this.map(d=>{
        if(typeof(d) == "string"){ 
            return d.capitalize();
        }else{
            return d;
        }
    },[]);
};

//@ ENABLE THE SIMPLE REPLACEMENT OF STRINGS THROUGH THE Array.replace **/
Array.prototype.replace = function( regex, replacement ){ 
    return this.map( e => { 
        if(typeof(e) == "string"){ 
            return e.replace(regex,replacement)  
        }else{
            return e;
        }  
    },[]);
};

//@ ALLOW PROTOTYPICAL REMOVAL OF MULTIPLE ELEMENTS BY POSITION **/
Array.prototype.remove = function( rmIndices ){
    if( Array.isArray(this) ){

        for (var i = rmIndices.length -1; i >= 0; i--){
            this.splice(rmIndices[i],1);
        }
        return this;

    }else{
        return this;
    }
};

//* COUNT INSTANCES OF A VALUE 'val' IN AN ARRAY **/
Array.prototype.count = function( val ){
    
    if( val === undefined ){
        return this.length;
    }else{        
        var counter = 0;        
        this.forEach(function(ElementValue,ElementPosition){        
            if( val == ElementValue ){
                counter++;	  
            }        
        });
        
        return counter;
        
    } 
    
};
    
//@ GET AN ARRAY OF UNIQUE VALUES AND THEIR FREQUENCY IN THE ORDER [item,frequency]
Array.prototype.get_count= function(){
    
    var itm, a= [], L= this.length, o= {};
    
    for(var i= 0; i<L; i++){
        itm= this[i];
        if(!itm) continue;
        if(o[itm]== undefined) o[itm]= 1;
        else ++o[itm];
    }
    
    for(var p in o) a[a.length]= [ p, o[p]];
    
    return a.sort(function(a, b){
        return o[b[0]]-o[a[0]];
    });
};
Array.prototype.getCount = Array.prototype.get_count;

//@ ARRAY FAST UNIQUE */
Array.prototype.unique = function() {

    var sorted = this;
    
    sorted.sort();
    
    return sorted.filter(function(value, index, arr){
    
        return ( index < 1 ) ? true : ( value != arr[index-1] );
        
    });
    
};
    
//@ REMOVE A VALUE FROM AN ARRAY
Array.prototype.clean = function(deleteValue=[undefined,null,'']) {
    
    deleteValue = Array.isArray( deleteValue ) ? deleteValue : deleteValue.split(',');
        
    return this.filter( d => { return (deleteValue.indexOf( d ) === -1); } );

};
        
//@ GET THE SUM OF ALL VALUES IN AN ARRAY
Array.prototype.sum = function(){
    return this.reduce(function(a,b){ return (parseInt(a)||0)+(parseInt(b)||0); },0);
};

//@ GET THE MEAN OF ALL VALUES IN AN ARRAY
Array.prototype.mean = function(){
    return ( this.reduce(function(a,b){ return  (parseInt(a)||0)+(parseInt(b)||0) },0)  / this.length )  
};