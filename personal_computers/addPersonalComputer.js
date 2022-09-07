const { addPC } = require("../data/pcRepository");
const isValidUser = require("../utils/authUser");
const isValidPC = require("../utils/validatePC");

const addPersonalComputer = async (req, res) => {
    const bearerToken = req.headers['authorization'];
    const validUser = await isValidUser(bearerToken.split(' ')[1]);

    if (!validUser) {
        console.error('not valid');
        res.status(404).end();
    }

    if (isValidPC(req.body)) {
        await addPC(req.body);
        res.status(200).end();
    } else {
        res.status(400).end();
    }
}

module.exports = addPersonalComputer;