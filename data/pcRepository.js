const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'it-shop.db',
});

const PC = sequelize.define('PC', {
  RAM: DataTypes.STRING,
  Video: DataTypes.STRING,
  Processor: DataTypes.STRING,
  Memory: DataTypes.STRING,
  Client: DataTypes.STRING,
  Price: DataTypes.STRING,
});

const getPCs = async () => {
    await PC.sync();
    const PCs = await PC.findAll();
    return PCs;
}

const addPC = async (pc) => {
    await PC.sync();
    await PC.create(pc);
}

const updatePC = async (id, pc) => {
    await PC.sync();
    PC.update(
        { 
            RAM: pc.RAM,
            Video: pc.Video,
            Processor: pc.Processor,
            Memory: pc.Memory,
            Client: pc.Client,
            Price: pc.Price,
        }, 
        { where: { id : id }}
    )
}

module.exports = {
    getPCs,
    addPC,
    updatePC
}