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

module.exports = getTokens