const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'it-shop.db',
});

const Laptop = sequelize.define('Laptop', {
  RAM: DataTypes.STRING,
  Video: DataTypes.STRING,
  Processor: DataTypes.STRING,
  Memory: DataTypes.STRING,
  Client: DataTypes.STRING,
  Price: DataTypes.STRING,
  Battery: DataTypes.STRING
});

const getLaptops = async () => {
    await Laptop.sync();
    const Laptops = await Laptop.findAll();
    return Laptops;
}

const addLaptop = async (laptop) => {
    await Laptop.sync();
    await Laptop.create(laptop);
}

const updateLaptop = async (id, laptop) => {
    await Laptop.sync();
    Laptop.update(
        { 
            RAM: laptop.RAM,
            Video: laptop.Video,
            Processor: laptop.Processor,
            Memory: laptop.Memory,
            Client: laptop.Client,
            Price: laptop.Price,
            Battery: laptop.Battery
        }, 
        { where: { id : id }}
    )
}

module.exports = {
    getLaptops,
    addLaptop
}