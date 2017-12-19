const seededTodos = [
    {
        description: "get beer",
        urgent: true
    },
    {
        description: "dry cleaning",
        urgent: false
    },
    {
        description: "build something",
        urgent: true
    }
]

const getAllTodos = () => {
    return seededTodos
}

const addTodo = (newTodo) => {
    seededTodos.push(newTodo)
}

module.exports = {
    getAllTodos: getAllTodos,
    addTodo: addTodo
}