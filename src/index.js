const e = require('express');
const express = require('express')
const app = express();

const userRepository = require('./repositories/users')
const userServices = require('./services/userServices')(userRepository)


/**
 * Initial set up
 */
app.use(express.json())
 
app.use((req, res, next) => {
    res.set('Content-Type', 'application/json');
    next()
})



/** 
 * Routes 
 */
app.get('/users', (req, res) => {
    res.status(200).send(userServices.list())
})

app.get('/users/:name', (req, res) => {
    const user = userServices.select(req.params.name)

    if(user) {
        res.status(200).send(user)
    } else {
        res.status(404).end()
    }
    
})

app.post('/users', (req, res) => {
    const user = userServices.create(req.body.name, req.body.age)

    if(user) {
        res.status(201).send(user)
    } else {
        res.status(400).end()
    }
    
})

app.delete('/users/:name', (req, res) => {
    if(userServices.delete(req.params.name)) {
        res.status(204).end()
    } else {
        res.status(404).end()
    }    
})



/**
 * Start the app
 */
app.listen(3000, () => {
    console.info(`App started!`)
})