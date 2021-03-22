const axios = require('axios');
const {
    expect
} = require('chai');

const {
    HTTP_STATUS_CODES,
    BOOKS_REQUEST,
    BASE_URL
} = require('../utils/constants')

describe("User creates book ", () => {

    before(async () => {
        oldBooks = await axios.get(BASE_URL);
        response = await axios.post(BASE_URL, BOOKS_REQUEST);
        newBooks = await axios.get(BASE_URL);
    });

    after(async () => {
        console.log(`Removing test data for book with id ${createdBookId}...`);
        deleteResponse = await axios.delete(`${BASE_URL}/${createdBookId}`);

        if (deleteResponse.status === HTTP_STATUS_CODES.ok) {
            console.log('Successfully removed test data');
        } else {
            console.log('Something went wrong removing test data...');
        }
    })

    it("Should return OK status response", () => {
        expect(response.status).eql(HTTP_STATUS_CODES.ok);
    });

    it("Should return expected fields from book created with values sent", () => {
        // Should not compare request made with response, because response is returning also the id
        bookCreated = response.data;
        expect(bookCreated).to.have.property('id');

        createdBookId = response.data.id;

        delete bookCreated['id'];
        expect(bookCreated).eql(BOOKS_REQUEST);
    });

    it("Should return application/json as content type", () => {
        expect(response.headers['content-type']).to.contain('application/json');
    });

    it("Books list should increase by 1 after creating new book", () => {
        expect(newBooks.data.length).eql(oldBooks.data.length + 1);
    })

    it("Book created should be retrieve after creating it", () =>{
        const bookDeleted = newBooks.data.find(book => book.id === createdBookId);
        expect(bookDeleted).to.not.eql(undefined);
    });
});
