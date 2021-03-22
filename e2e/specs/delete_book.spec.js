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

    describe("When user deletes an existing book", () => {
        before(async () => {
            oldBooks = await axios.get(BASE_URL);
            response = await axios.delete(`${BASE_URL}/${existingBookId}`);
            newBooks = await axios.get(BASE_URL);
        });

        it("Should return OK status response", () => {
            expect(response.status).eql(HTTP_STATUS_CODES.ok);
        });

        it("Books list should decrease by 1 after creating new book", () => {
            expect(newBooks.data.length).eql(oldBooks.data.length -1);
        });

        it("Book deleted should not be retrieve after deleting it", () =>{
            const bookDeleted = newBooks.data.find(book => book.id === existingBookId);
            expect(bookDeleted).eql(undefined);
        });
    })
});
