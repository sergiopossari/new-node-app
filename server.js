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

 app.listen(3000, function () {
   console.log('server running on port 3000');   
 })

 app.get('/', (req, res) => {
    res.send('Hello world!')
 })

 