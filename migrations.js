// const { savePCsList } = require("./data/pc_repository");
const { Level } = require('level');
const db = new Level('it_shop', { valueEncoding: 'json' });

// db.put('tokens', ['af202098-c6a1-4924-9187-1eddd07e0338', 'abd1685b-c4d5-406d-993e-7c4f9b35daf7', 'c5f8780d-dcaa-45e4-a565-439ae79a6ef7'])

// db.put('users', [{username: 'gbora@softvision.com', password: 'password'}])