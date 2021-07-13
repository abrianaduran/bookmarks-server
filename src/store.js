const uuid = require('uuid/v4')

const bookmarks = [
    {
        id: uuid(),
        title: 'Google',
        url: 'https://www.google.com',
        description: 'bookmark description',
        rating: 4
    },
    {
        id: uuid(),
        title: 'Amazon',
        url: 'https://www.amazon.com',
        description: 'bookmark description',
        rating: 2
    },
    {
        id: uuid(),
        title: 'Twitter',
        url: 'https://www.twitter.com',
        description: 'bookmark description',
        rating: 3
    },
]

module.exports = { bookmarks }