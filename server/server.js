const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000
const { engine } = require('express-handlebars')
const path = require('path')



// - Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// - Handlebars
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../client/views'))


// - Static
app.use(express.static(path.join(__dirname,'../client/public')))

app.use('/',require('./routers/viewRouter'))


app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))