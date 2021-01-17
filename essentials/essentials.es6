/**
    FUNCTIONAL IMPORTS
**/

    //@ Fetch the imported [local & installed] modules
    Object.assign(global, require( require(`path`).join(__dirname,"imports.es6")) );

    //@ Include the main type extensions
    require(path.join(__dirname,"extensions/index.es6"));

    //@ The regular expressions setter
    Object.assign(global,require(path.join(__dirname,"regex/index.es6")));
  
    //@ Require some useful custom methods
    Object.assign(global,require(path.join(__dirname,"custom/index.es6")));

    //@ Basic Hashing
    Object.assign(global,require(path.join(__dirname,"hashing/index.es6")));

    global.log  = global._LOG   = logger(  path.join( global.home, ".bixbyte/logs/main.log") );

    global.clog = global.c_log  = global._C_LOG = (a)=>console.log(a);
    
    global.jlog = global.j_log  = global._J_LOG = (a)=>console.log(JSON.stringify(a,null,2));
   
    global.ilog = global.i_log  = global._I_LOg = (a)=>console.log(`\n\n${(a)?a.toUpperCase():''}:\n`);
 
/**
    EO - FUNCTIONAL IMPORTS
**/

    //---------------------------------------------------------------//



console.log( "\n✔".succ + "  B a s i c  e s s e n t i a l s  L o a d e d".info );
