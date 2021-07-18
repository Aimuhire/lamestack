const APIEndpoints = require("../api/v1/apiEndpoints");
const fetch = require('node-fetch')

module.exports = class HTTPClient {
    static get(endpoint) {
        console.log(`${APIEndpoints.API_ROOT_URL}${endpoint}`)
        return fetch(`${APIEndpoints.API_ROOT_URL}${endpoint}`).then(res => res.json())
    }
}
