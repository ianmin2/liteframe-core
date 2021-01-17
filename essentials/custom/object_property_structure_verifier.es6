/**
    * VERIFIES THE PASSED EMAIL PARAMETERS BEFORE AUTHORIZING THE PASSING OF THE OBJECT
    * @param   {[[OBJECT]]}  fullObject { param1 : {}, param2: "str" }
    * @param   {[[ARRAY]]}   rulesArray [["variable_name", "regex", "error_message", "error_command"],["variable_name", "regex", "error_message", "error_command", "error_command"]]
    * @returns {[[Promise]]} [[resolve() || reject() ]]
**/
const objVerify 
= ( mainObject, verifyArray ) => 
{

    return new Promise( (resolve,reject) => {

        //!GET THE OBJECT KEYS FROM THE 'mainObject' OBJECT
        let objectKeys  = Object.keys(mainObject);
        let arrLength   = verifyArray.length;
        let currLength  = 0;
        let verify_data = {};
        let resp_string = "";
                
        //!ITERATE THROUGH ALL THE POINTS IN THE VERIFICATION ARRAY
        for( verifyPos in verifyArray ){
            
             currLength++;
            
            //!MAKE A REFERENCE TO THE CURRENT VERIFICATION ITEM 
            verify_data.key       = verifyArray[verifyPos][0] || "undefined";
            verify_data.test      = verifyArray[verifyPos][1] || /[.+]/ig;
            verify_data.error     = verifyArray[verifyPos][2] || "Failed to capture the \"" + verify_data.key +"\" attribute.";
            verify_data.command   = verifyArray[verifyPos][3] || "retry";
            
            //!CHECK IF THE SPECIFIED 'key' EXISTS in the 'mainObject'
            if( !mainObject[verify_data.key] ){
                //!UH OH! THE DEFINED KEY IS A GHOST!
                
                
                //!rejection RANT
                resp_string     = makeResponse( 500, verify_data.error, verify_data.command );
               // console.log( resp_string );
               
               reject( resp_string );
                              
                
            }else{
                //!RELAX, THE DEFINED KEY EXISTS                        
                
                
               // console.log("Starting verification tests for " + verify_data.key + "\n" );
                
                //!PERFORM THE ACTUAL DATA INTEGRITY (regex based) TEST
                if( !verify_data.test.test( mainObject[verify_data.key] ) ){                    
                    //!OH NO, YOUR DATA DID NOT PASS THE TEST
                    
                    
                    //!WAIT, WHAT IF IT'S COZ IT'S AN ARRAY
                    if( typeof(mainObject[verify_data.key]) != "array" ){
                        
                        //!NAAAAH, NEVER MIND
                        
                        //!rejection RANT
                        resp_string     = makeResponse(500, verify_data.error, verify_data.command );
                        //console.log( resp_string );
                        
                        reject( resp_string );

                        
                    }else{
                        
                      //!WAIT, IT ACTUALLY IS AN ARRAY -- JUST TEST EACH ITEM THEN DECIDE
                      for( obj in mainObject[verify_data.key] ){
                          
                          //!CHECK IF THE OBJECT IS VALID
                          if( !verify_data.test.test(mainObject[verify_data.key][obj]) ){
                              
                              //!SHUCKS, IT STILL AINT VALID
                              reject(resp_string);
                              
                          }else{
                              
                              //!OH, SO YOU MEAN IT'S VALID!!
                              if( currLength >= arrLength ){
                    
                                    resolve( mainObject );

                                };
                              
                          };
                         //!EO - IS OBJECT VALID? 
                          
                          
                      };
                      //!EO - ARRAY CHECK
                        
                    };
                    //!EO - IF IS ARRAY
                    
                }else{                    
                    //!YOU ARE SO BOSS RIGHT NOW, JUST HOPE THAT ALL OTHER TESTS GO LIKE THIS
                    
                    //!resolution party
                    //console.log( "Sucessfully evaluated " + verify_data.key );
                                        
                    if( currLength >= arrLength ){
                    
                        resolve( mainObject );

                    };
                    
                    
                };                
                //!EO - regex based DATA INTEGRITY TEST
                
            };
            //!EO - key EXISTS IN 'mainObject' Object
            
            // console.log( "\n\n" + JSON.stringify(verify_data) + "\n\n");
           // console.log( mainObject[key_name] );

        };
        //!EO - INITIAL ITERATION

    });
    //!EO - PINKY PROMISE

};
//!EO - 'objectVerify'

//!EXPOSE THE APPLICATION VERIFICATION MODULE
exports.objVerify 
= exports.object_verify 
= exports._OBJECT_VERIFY
= (mainObject, verificationArray) => {
    
    return new objVerify( mainObject, verificationArray );
    
};

/*

	//DEFAULT EMAIL OBJECT VALIDATION ARRAY
	[["from_email", mailRegex, "Failed to capture a valid 'from' email"],["to_email", mailRegex, "Failed to capture a valid 'to' email" ]]

*/

/*    
    var mail_object = {
    from_name: "Ian Innocent",
    from_email: "ianmin2@live.com",
    to_name: "Ian Innocent Mbae",
    to_email: "mbaeian@gmail.com"
    };
    
    objVerify(mail_object,[["from_email", /[.+]/ig, "Failed to capture a valid 'from' attribute in the object"]])
    .then(function(data){
    console.log("Object verification passed!")
    })
    .catch(function(err){
    console.log("Object verification failed!\n\n")
    console.log(err)
    });
*/
