const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'hbs')

const todosController = require('./controllers/todosController')
app.use('/todos', todosController)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})