const axios = require('axios');
const {
    expect
} = require('chai');

const {
    HTTP_STATUS_CODES,
    BOOKS_FIELDS,
    BASE_URL
} = require('../utils/constants')

describe("User lists books ", () => {

    before(async () => {
        response = await axios.get(BASE_URL);
    });

    it("Should return OK status response", () => {
        expect(response.status).eql(HTTP_STATUS_CODES.ok);
    });

    it("Should return expected fields from each book", () => {
        console.log("Checking expected fields from books response...")

        expect(response.data.length).to.be.greaterThan(0);
        const firstBook = response.data[0];
        BOOKS_FIELDS.forEach(field =>
            expect(firstBook).to.have.property(field)
        )
    })
});
