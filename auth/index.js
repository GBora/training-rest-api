const express = require('express');
const addNewUser = require('./addNewUser');
const authenticateUser = require('./authentificateUser');
var authModule = express.Router();


authModule.post('/new', addNewUser);
authModule.post('/signin', authenticateUser);



module.exports = authModule;