/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 /*

 const http = require('http');

 const hostname = '127.0.0.1';
 const port = 3000;

 const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n');
 });

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
 */

 const express = require('express');
 const app = express();

 var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
 var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
  
 app.listen(server_port, server_ip_address, function () {
   console.log( "Listening on " + server_ip_address + ", port " + server_port )
 });

 app.get('/', (req, res) => {
    res.send('Hello world!')
 })

 