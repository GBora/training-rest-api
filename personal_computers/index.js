const express = require('express');
const getPersonalComputersList = require('./getPersonalComputersList');
const addPersonalComputer = require('./addPersonalComputer');
const updatePersonalComputer = require('./updatePersonalComputer');

var pcModule = express.Router();

// Create
pcModule.post('/', addPersonalComputer);
// Read
pcModule.get('/', getPersonalComputersList);
// Update
pcModule.put('/:id', updatePersonalComputer);
// Delete


module.exports = pcModule;