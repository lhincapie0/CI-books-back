const axios = require('axios');
const {
    expect
} = require('chai');

const {
    HTTP_STATUS_CODES,
    BOOKS_REQUEST,
    BASE_URL
} = require('../utils/constants')

describe("Given a created book ", () => {

    before(async () => {
        response = await axios.post(BASE_URL, BOOKS_REQUEST);
        existingBookId = response.data.id;
    });

    after(async () => {
        console.log(`Removing test data for book with id ${existingBookId}...`);
        deleteResponse = await axios.delete(`${BASE_URL}/${existingBookId}`);

        if (deleteResponse.status === HTTP_STATUS_CODES.ok) {
            console.log('Successfully removed test data');
        } else {
            console.log('Something went wrong removing test data...');
        }
    })

    describe("When user updates an existing book", () => {
        before(async () => {
            updatedBookRequest = BOOKS_REQUEST;
            updatedBookRequest['name'] = `${updatedBookRequest.name}-UPDATED`;
            updatedBookRequest['author'] = `${updatedBookRequest.author}-UPDATED`;

            response = await axios.put(`${BASE_URL}/${existingBookId}`, updatedBookRequest);
        });

        it("Should return OK status response", () => {
            expect(response.status).eql(HTTP_STATUS_CODES.ok);
        });

        it("Should return book updated with new name", () => {
            expect(response.data.name).eql(updatedBookRequest.name);
        });

        it("Should return book updated with new author", () => {
            expect(response.data.author).eql(updatedBookRequest.author);
        });
    })
});
