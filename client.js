/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
    //Event handler to handle incoming data and console log it
  // }, () => {
  //   console.log("Successfully connected to game server")
  //   conn.write('Name: TPL');
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  //   conn.write("Move: up");
  // });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('Incomming:', data);
  }); 

  

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write('Name: TPL');
    

   
   
   
    setInterval(() => { 
      
      conn.write("Move: up"); }, 50 )
    
   
  } );


  return conn;
}

module.exports = { connect }