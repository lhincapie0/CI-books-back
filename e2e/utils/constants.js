const HTTP_STATUS_CODES = {
    ok: 200,
    bad_request: 404
}

const BASE_URL = 'https://books-backend-lhincapie0.herokuapp.com/books'

const BOOKS_FIELDS = ["id", "name", "author"]

const BOOKS_REQUEST = {
    name: 'Test book name',
    author: 'Test book author'
}

module.exports = {
    HTTP_STATUS_CODES,
    BOOKS_FIELDS,
    BOOKS_REQUEST,
    BASE_URL
}
