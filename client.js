/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542

    //Event handler to handle incoming data and console log it
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Incomming:', data);
  }); 

  return conn;
}

module.exports = { connect }