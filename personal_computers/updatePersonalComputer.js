const { getPCs, savePCsList } = require("../data/pcRepository");

const updatePersonalComputer = async (req, res) => {
    try {
        // const bearerToken = req.headers['authorization'];
        // const validUser = await isValidUser(bearerToken.split(' ')[1]);

        const id = req.params.id;
        const list = await getPCs();
        const index = list.findIndex(pc => pc.id === id);
        console.log(index);
    
        // if (!validUser) {
        //     console.error('not valid');
        //     res.status(404).end();
        // }

        if (!index) {
            res.status(404).end();
        } else {
            list[index] = req.body;
            await savePCsList(list);
            res.status(200).end();
        }
    } catch(e) {
        res.status(400).end();
    }
}

module.exports = updatePersonalComputer
