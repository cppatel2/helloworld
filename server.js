/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: CHINTAN PIYUSHKUMAR PATEL Student ID: 143419216 Date: 19-01-2023
*
*  Online (Cyclic) URL: https://cute-ruby-gopher-kilt.cyclic.app/ and cyclic deployment url : https://github.com/cppatel2/helloworld/deployments/activity_log?environment=cyclic%3Aprod
*
********************************************************************************/ 


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Chintan Piyushkumar Patel - 143419216");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
