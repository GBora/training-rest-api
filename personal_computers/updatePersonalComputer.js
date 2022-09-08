const { updatePC } = require("../data/pcRepository");
const isValidUser = require("../utils/authUser");

const updatePersonalComputer = async (req, res) => {
    try {
        const bearerToken = req.headers['authorization'];
        const validUser = await isValidUser(bearerToken.split(' ')[1]);

        const id = req.params.id;

        if (!validUser) {
            console.error('not valid');
            res.status(404).end();
        }

        await updatePC(id, req.body);
        res.status(200).end()
    } catch(e) {
        res.status(400).end();
    }
}

module.exports = updatePersonalComputer
