const express = require('express')
const router = express.Router()

const database = require('../database')

router.get('/', (request, response) => {
    const todos = database.getAllTodos()

    response.render('todos/index', {
        todos: todos
    })
})

router.get('/new', (request, response) => {
    response.render('todos/new')
})

router.get('/:id', (request, response) => {
    const todos = database.getAllTodos()
    
    const todoId = request.params.id
    const todoWithIdFromParams = todos[todoId]

    response.render('todos/show', {
        todo: todoWithIdFromParams
    })
})

router.post('/', (request, response) => {
    database.addTodo(request.body)
    response.redirect('/todos')
})

module.exports = router