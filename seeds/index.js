const Dish = require('../models/Dish');
const dishdata = require('./dish-seed.json');
const sequelize = require('../config/connection')


const seedDatabase = async () => {


await sequelize.sync({force:true});
await Dish.bulkCreate(dishdata, {
    
    individualHooks: true,
    returning:true,



})

process.exit(0)


}

seedDatabase();