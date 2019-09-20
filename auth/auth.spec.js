const auth = require('./auth-router')
const db = require('../database/dbConfig')
const request = require('supertest')

describe('sucesssful register', () => {
    beforeEach(async () => {
        await db('users').truncate()
    })
    describe('Status 201 when it creates a user', () => {
        it('responds with status 201 when a user is created', () => {
            const newUser = {
                username: 'Sandy',
                password: 'password1'
            }
            request(auth)
                .post('/register')
                    .send(newUser)
                    .set('Accept', "application/json")
                    .then(res => {
                        expect(res.status).toBe(201)
                    })
        })
        
    })
})

describe('Status 401 when a username or password is missing', () => {
    it('responds with 401 when username is missing', () => {
        const newUser = {
            "password":"test"
        }
        request(auth)
          .post('/register')
              .send(newUser)
              .set('Accept', "application/json")
              .then(res => {
                  expect(res.status).toBe(401)
              })
    })  
})

      