const knex = require('../connection/knex')
const axios = require('axios')

module.exports = class userController {
    constructor() { }
    
    async createUser(req, res) {
        try {
            let data = req.body
            let finalData = await axios.post('http:localhost:3000/user', data)
            return res.status(201).send({ status: true, message: finalData })
        }
        catch (error) {
            console.log(error)
            return res.status(500).send({ status: false, message: error.message })
        }
    }

    async user(req, res) {
        try {
            let data = req.body
            await knex('user').insert(data)
            return res.status(200).send({ status: true, message: data })
        }
        catch (error) {
            console.log(error)
            return res.status(500).send({ status: false, message: error.message })
        }
    }

    async getData(req, res) {
        try {
            let data = await knex('user').select("*")
            return res.status(200).json({ data: data })
        }
        catch (error) {
            console.log(error)
            return res.status(500).send({ status: false, message: error.message })
        }
    }

    async data(req, res) {
        try {
            let response = await axios.get('http://localhost:3000/getData')
            res.status(200).send({ status: true, data: response.data })
        }
        catch (error) {
            console.log(error)
            return res.status(500).send({ status: false, message: error.message })
        }
    }
}