const router = require('express').Router();
const Dish = require('../models/Dish')



router.get('/', async (req, res) => {

const dishdata = await Dish.findAll().catch((err) => {

    res.json(err)
})

const dishes = dishdata.map((dish) => dish.get({plain:true}))

res.render('all', { dishes })

})

router.get('/dish/:id', async (req, res) => {

try{

const dishdata = await Dish.findByPk(req.params.id)

if(!dishdata){

    res.json({message: "ID not found"})

}

const dish = dishdata.get({plain:true})

res.render('dish', dish)


}catch(err){

     res.json(err)
}
})

module.exports = router;