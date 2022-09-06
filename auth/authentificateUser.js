const { getUsers } = require("../data/authRepository");

const authenticateUser = async (req, res) => {
    const { username, password } = req.body;
    const usersList = await getUsers();

    let foundUser = false;

    usersList.forEach(user => {
        if ((user.username === username) && (user.password === password)) {
            foundUser = true;
        } 
    })

    if (foundUser) {
        res.status(200).send('af202098-c6a1-4924-9187-1eddd07e0338').end();
    } else {
        res.status(400).end();
    }
}

module.exports = authenticateUser;