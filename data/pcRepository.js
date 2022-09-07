const { Level } = require('level');
const db = new Level('it_shop', { valueEncoding: 'json' });

const getPCs = async () => {
    try {
        let error, list = await db.get('pc');
        return list;
    } catch (e) {
        console.log(e);
        return []
    }
}

const addPC = async (pc) => {
    try {
        let error, list = await db.get('pc');
        list.push(pc);
        await db.put('pc', list)
    } catch (e) {
        await db.put('pc', [pc])
    }
}

const savePCsList = async (list) => {
    await db.put('pc', list);
}

module.exports = {
    getPCs,
    addPC,
    savePCsList
}