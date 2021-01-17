const Log 
= function( log_path, dev )
{
	
	log_path = log_path ||  path.join( `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}`,`/.bixbyte/logs/main.log`  );

	dev 	 = dev || true;

	//@ Ensure that the loging directory exists
	fse.ensureDirSync(path.join( `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}`,`/.bixbyte/logs`));
	
	let ls = fs.createWriteStream( log_path , {flags: 'a'});
	
	//THE SYSTEM EVENT LOGGER 
	// ls.write(`${d}\t${logMessage.replace(/\[32m/ig,"").replace(/\[31m/ig,"").replace(/\[39m/ig,'').replace(/\[90m/ig, "").replace(/\[33m/ig, "").replace(/\[34m/ig, "")} @!##\n\n`);
	// ls.write(`${d}\t${logMessage.replace(/\.success/ig, "").replace(/\.info/ig, "").replace(/\.yell/ig, "").replace(/\.err/ig, "").replace(/\.gray/ig, "")} @!##\n\n`);
	  	  
	this.log = ( logMessage , term ) => ls.write(`${new Date().toISOString()}\t${(typeof(logMessage)=="object")?JSON.stringify(logMessage):logMessage} @!##\n\n`);
	
};

exports.logger 
= 	exports._LOGGER 
= 	( log_path, dev ) => new Log( log_path, dev ).log;