const request = require('supertest')
const server = require('./api/server.js')

describe('server.js', () => {
    it('returns an ok status', () => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
})