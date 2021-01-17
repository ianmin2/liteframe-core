//!BASIC VALIDATION METHODS

//** VALIDATE EMAIL ADDRESSES
exports.isEmail  = exports.is_email = ( prospective_email ) => mailRegex.test( prospective_email );
    
//*VALIDATE TELEPHONE NUMBERS
exports.isTelephone = exports.is_telephone = ( prospective_telephone ) => telRegex.test(prospective_telephone);

exports.toTelephone = exports.to_telephone = ( prospective_telephone, phone_prefix = "254" ) => {

    let phone = prospective_telephone.replace(/\s|\(|\)|\-/ig,'');
    let rgx = new RegExp(`^${phone_prefix}`,'i');

    return (phone.length <= 10 )
        ? (phone.charAt(0) == 0)
            ? `${phone_prefix}${phone.replace(/^0/i, '')}`
            : `${phone_prefix}${phone}`
        : (phone.charAt(0) == `+`)
            ? `${phone.replace(/\+/ig, '')}`
            : ( rgx.test(phone) == true )
        ? phone
        : `${phone_prefix}${phone.replace(/^0/,'')}`;
  
}

    
//** VALIDATE USERNAMES
exports.isUsername= exports.is_username = ( prospective_username ) => userRegex.test( prospective_username );
    
//** VALIDATE PASSWORDS
exports.isPassword = exports.is_password = ( prospective_password ) => passRegex.test( prospective_password );