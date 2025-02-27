import * as sampleFunction from "../main/api/firstService/api"
import apiPaths from "../main/api/apiPath/paths.json"
const assert = require('assert');

describe("Test First API Request using mocha", async () => {
    it("First API Test", async () => {
        const res = await sampleFunction.sampleRequest(apiPaths["first-service"].createItem, {});
        assert.equal(res['Status'], 200);  
    })
})