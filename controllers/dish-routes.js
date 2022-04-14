const router = require('express').Router();
const Dish = require('../models/Dish');



router.get('/', async (req, res) => {

try{

const dishdata = await Dish.findAll();

const dishes = dishdata.map((dish) => { dish.get({plain:true})}  )

res.render('all', dishes)

}catch(err){

res.status(404).json(err);

}
})