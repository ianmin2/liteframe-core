const { newArray } = require("./frame.js");
const framify = require("./frame.js");

c_log(`\nOK`.succ);

c_log(`\n${framify.duplicate(`${framify.icons.success}`.succ, 3)}`, `WELCOME TO SMARTCARDS MANAGER`.yell);
c_log('\n\nINFO!!\n')

console.log( framify.duplicate('hello ', 10) )



// app.route("/")
// .all( (req,res) => {

// 	res.send("<br><br><center><h2>The User Manual is still unavailable<br>:-(</h2></center>")

// });
// server.listen( app.port, (e) => {

// 	if(e){
// 		console.log("\n@frame\n".info + "\nFailed to start the user guide\nREASON:\n".err + e.message );
// 	}else{
// 		console.log( "\n@frame".info + "\nUser guide running on".success );
// 		console.log( "http://" + myAddr + ":" + app.port )
// 		console.log( "http://127.0.0.1:" + app.port )
// 	}

// });