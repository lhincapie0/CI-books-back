# CI-books-back

This repository contains e2e tests for books API deploy on: https://books-backend-lhincapie0.herokuapp.com

To run tests locally use:

```bash
  npm i
  npm test
```

Following test cases are covered in tests located at e2e/specs/**:

* Tests on list_books.spec.js:
  * Tests when user wants to list books with endpoint: GET https://books-backend-lhincapie0.herokuapp.com
  * Asserts fields expected are retrieved in the payload
  
* Tests on create_book.spec.js
    * Creates a new book and asserts book is created with the fields sent.
    * Lists books before create new one and after it, lists books again, asserting new book is retrieved in the payload.
    * After assertions, deletes data created to avoid unnecessary data.

* Tests on update_book.spec.js
  * Creates a new book before starting tests.
  * Updates an existing book and asserts new values have been changed in the existing book.
  * After assertions, deletes data created to avoid unnecessary data.

* Tests on delete_book.spec.js
  * Creates a new book before starting tests.
  * Lists books before delete the existing one and after it, lists books again, asserting removed book is not retrieved in the payload.
