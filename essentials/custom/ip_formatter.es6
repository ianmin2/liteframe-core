var server_addr = [];

var interfaces 
= require("os").networkInterfaces();
for ( var k in interfaces ){
    for( var k2 in interfaces[k]){
        var address = interfaces[k][k2];
        if(address.family === 'IPv4' && !address.internal){
           server_addr.push(address.address);
        }
    }  
};

server_addr = (server_addr[0] === undefined )? "localhost" : server_addr[0];

var Ipvify 
=  ip  => ip.replace("::ffff:", "");

var SocketIP 
= handshake => {
    return { ip:  handshake.headers['x-forwarded-for'] || handshake.address }
};

//RETURN THE CURRENT MACHINE'S IP ADDRESS
exports.myAddr 
=   exports.my_address
=   exports._MY_ADDR 
= exports._MY_ADDRESS
= server_addr;

//PROPERLY FORMAT AN IP ADDRESS
exports.ipvify = exports.to_ip
exports._IPVIFY = exports._TO_IP
= ip => Ipvify(ip);

//PICK THE IP ADDRESS OFF A SOCKET HANDSHAKE
exports.socketIp = exports.socket_ip 
exports._SOCKET_IP
= handshake  => new Ipvify( new SocketIP( handshake ).ip ).ip;