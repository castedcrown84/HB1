const express = require('express')
const path = require('path')
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const Port = process.env.Port || 3001;
const app = express();

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars' )

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require('./controllers/dish-routes'));






sequelize.sync({force:true}).then(() => {

app.listen(Port, ()=> {

`Listening to server!`

})


})