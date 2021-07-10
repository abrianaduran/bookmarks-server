const express = require('express') 
const logger = require('./logger')
const { v4: uuid } = require('uuid')
const { bookmarks } = require ('./store')

const bookmarksRouter = express.Router()
const bodyParser = express.json() 

bookmarksRouter
    .route('/bookmarks')
    .get((req,res) => {
        res
        .json(bookmarks);
    }) 
    .post(bodyParser, (req, res) => {
        for(const field of ['title', 'url', 'rating']) {
            if (!req.body[field]) {
                logger.error(`${field} is required`)
            }
        }
        const { title, url, description, content } = req.body;

        if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
            logger.error(`Invalid rating '${rating}' supplied`)
            return res.status(400).send(`'rating' must be a number between 0 and 5`)
        }
        if (!isWebUri(url)) {
            logger.error(`Invalid url '${url}' supplied`)
            return res.status(400).send(`'url' must be a valid URL`)
        }

        const bookmark = { id: uuid(), title, url, description, rating }

        bookmarks.push(bookmark)

        logger.info(`Bookmark with id ${bookmark.id} created`)
            res
                .status(201)
                .location(`http://localhost:8000/bookmarks/${bookmark.id}`)
                .json(bookmark)

        const id = uuid();

        const bookmark = {
            id,
            title, 
            url,
            description,
            rating
        };

        bookmarks.push(bookmark);

        logger.info(`List with id ${id} created`)

        res
            .status(201)
            .location(`http://localhost:8000/bookmarks/${id}`)
            .json({id});
    })

    bookmarksRouter
        .route('/bookmarks/:id')
        .get((req, res) => {
            const { id } = req.params;

            const bookmarkIndex = bookmarks.find(b => b.id == bookmarkId);

            if (!bookmarkIndex) {
                logger.error(`Bookmark with id ${bookmarkId} not found.`);
                return res
                    .status(404)
                    .send('Bookmark Not Found');
            }
            res.json(bookmarkIndex);
        })


        .delete((req, res) => {
            const { id } = req.params;
            const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id == id);
            
            if (listIndex === -1) {
                logger.error(`List with id ${id} not found.`);
                return res
                    .status(404)
                    .send('Not Found');
            }

            bookmarks.splice(bookmarkIndex, 1);

            logger.info(`List with id ${id} deleted.`);
            res
                .status(204)
                .end();
        })

        module.exports = bookmarkRouter

        // https://github.com/Thinkful-Ed/bookmarks-server/tree/trello-assignment-example-solution