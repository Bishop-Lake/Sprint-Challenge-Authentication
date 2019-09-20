const auth = require('../auth/auth-router')
const jokes = require('./jokes-router')
const db = require('../database/dbConfig')
const request = require('supertest')

describe('responds to the token with a json object', () => {
    it('sends json', () => {
        const correctUserToLog = {
            "username": "Bishop",
            "password": "password"
        }
        request(auth)
            .post('/login')
            .send(correctUserToLog)
            .set('Accept', "application/json")
            .then(res => {
                token = res.body.token
                request(jokes)
                    .get('/jokes')
                    .set({'token': token})
                    .then(res => {
                        expect(res.type).toEqual('application/json')
                    })
            })
    })
})

describe('responds with 200 with a token', () => {
    it('status 200', () => {
        const correctUserToLog = {
            "username": "Bishop",
            "password": "password"
        }
        request(auth)
            .post('/login')
            .send(correctUserToLog)
            .set('Accept', "application/json")
            .then(res => {
                token = res.body.token
                request(jokes)
                    .get('/jokes')
                    .set({'token': token})
                    .then(res => {
                        expect(res.status).toBe(200)
                    })
            })
    })
})