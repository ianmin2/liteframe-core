exports.fWrite 
=   exports.f_write 
=   exports._F_WRITE 
=   (fpath,fdata) => new Promise( resolve => resolve(fs.writeFileSync(`${fpath}`,`${fdata}`)) );