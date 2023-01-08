const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const { engine } = require('express-handlebars')
const path = require('path')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')



// - Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized:true,
    cookie: { maxAge: 1000*60*60 },
    resave: false
}));
app.use(cookieParser());

// - Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../client/views'))


// - Static
app.use(express.static(path.join(__dirname,'../client/public')))

app.use('/auth',require('./routers/jwtAuth'))
app.use('/',require('./routers/viewRouter'))


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))