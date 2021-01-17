exports.fRead  
=   exports.f_read 
=   exports._F_READ 
=   fpath => new Promise( resolve => resolve(fs.readFileSync(`${fpath}`,'utf8')) );