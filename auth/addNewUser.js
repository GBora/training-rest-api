const { signupUser } = require("../data/authRepository");
const isValidUser = require("../utils/authUser");

const addNewUser = async (req, res) => {
    if (isValidUser(req.body)) {
        await signupUser(req.body.username, req.body.password);
        res.status(200).end();
    } else {
        res.status(400).end();
    }
}

module.exports = addNewUser;