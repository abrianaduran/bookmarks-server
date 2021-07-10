const { v4: uuid } = require('uuid')

const bookmarks = [{
        id: uuid(),
        title: "Title of a Book",
        url: "https://www.google.com",
        description: "Description of a book",
        rating: 1
    }]

module.exports = { bookmarks }