const router = require('express').Router();
const Dish = require('../models/Dish');



router.get('/', async (req, res) => {

try{

const dishdata = await Dish.findAll();
//Serialize the Data and converted it to a plain object
const dishes = dishdata.map((dish) => { dish.get({plain:true})}  )

res.render('all', {dishes})

}catch(err){

res.status(404).json(err);

}
})

router.get('/dish/:id', async (req, res) => {

try{

const dishdata = await Dish.findByPk(req.params.id);

if(!dishdata){

res.status(404).json({message: "id not found"})
}


//serialize data to render it
const dish = dishdata.get({plain:true})

res.render('dish', {dish})


}catch(err){

    res.status(400).json(err)
}


})


module.exports = router