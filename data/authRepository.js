const { Level } = require('level');
const db = new Level('it_shop', { valueEncoding: 'json' });

const getTokens = async () => {
    try {
        let error, list = await db.get('tokens');
        return list;
    } catch (e) {
        return []
    }
}

const signupUser = async (username, password) => {
    const newUser = {
        username: username,
        password: password
    };

    try {
        let error, list = await db.get('users');
        list.push(newUser);
        await db.put('users', list)
    } catch (e) {
        await db.put('users', [newUser])
    }
}

const getUsers = async () => {
    try {
        let error, list = await db.get('users');
        return list;
    } catch (e) {
        return []
    }
}

module.exports = {
    getTokens,
    getUsers,
    signupUser
}