const { getPCs } = require("../data/pcRepository");

const getPersonalComputersList = async(req, res) => {
    const list = await getPCs();
    res.send(list);
};
  
module.exports = getPersonalComputersList;