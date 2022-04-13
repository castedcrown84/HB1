const express = require('express')
const path = require('path')

const Port = process.env.Port || 3001;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());