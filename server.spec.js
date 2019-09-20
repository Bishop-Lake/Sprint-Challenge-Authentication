const request = require('supertest')
const server = require('./api/server.js')

//this is just to test that testing is working on the sanity check endpoint. this enpoint i am not considering to be a real
//end point at all and more of a develpment self check and therefore will only have one test.
describe('server.js', () => {
    it('returns an ok status', () => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
    })
})