const { Level } = require('level');
const db = new Level('it_shop', { valueEncoding: 'json' });

const getLaptops = async () => {
    try {
        let error, list = await db.get('laptop');
        return list;
    } catch (e) {
        console.log(e);
        return []
    }
}

const addLaptop = async (laptop) => {
    try {
        let error, list = await db.get('laptop');
        list.push(laptop);
        await db.put('laptop', list)
    } catch (e) {
        await db.put('laptop', [laptop])
    }
}

const saveLaptopsList = async (list) => {
    await db.put('laptop', list);
}

module.exports = {
    getLaptops,
    addLaptop,
    saveLaptopsList
}