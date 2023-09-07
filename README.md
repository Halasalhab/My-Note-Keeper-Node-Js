# Build a Node.js & MongoDB Note Keeping Application

## Objective

Create a REST API for a note-keeping application using Node.js, Express.js, and MongoDB. The application should allow users to perform CRUD operations on notes.

## Requirements

1. Each note should have:
    - A title
    - Content
    - A creation date
2. Implement the following endpoints:
    - **`GET /notes`**: Retrieve all notes.
    - **`POST /notes`**: Add a new note.
    - **`DELETE /notes/:id`**: Delete a specific note using its ID.
    - **`PUT /notes/:id`**: Update a specific note using its ID.
3. Connect your application to a MongoDB database and use Mongoose for object modeling.
4. Handle potential errors gracefully. If an error occurs, the API should return a suitable status code and a descriptive error message.

## Bonus

1. Implement a search feature: **`GET /notes/search?query=YOUR_QUERY`** that allows users to search notes by their title or content.
2. Paginate the **`GET /notes`** endpoint to return a limited number of notes at once, with the ability to fetch the next "page" of notes.
