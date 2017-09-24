# NgTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0.

> **Make sure** that you have installed all `node_modules`

## Start Client

- Execute `npm start` for a dev server.
- Navigate to `http://localhost:4200`.

## Start Backend

- Execute `npm run api` to start the HTTP-API.
- The API is hosted on `http://localhost:4280`.

|        |Url|Description|
|--------|---------|-----------|
|`POST`  |/login   |Logging in a existing user `[1]`|
|`GET`   |/books|Gets all books|
|`GET`   |/books/:query|Search books by title|
|`GET`   |/book/:isbn|Gets a single book by its ISBN|
|`POST`  |/book/|Creates a new book|
|`PUT`   |/book/|Updates a book|
|`DELETE`|/book/:isbn|Deletes the specified book|

> **[1]** You can already log in with the user `trainee@training.com` having the password `1234`.
