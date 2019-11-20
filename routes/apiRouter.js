const apiRouter = require('express').Router()
const topicsRouter = require('./topicsRouter')
const usersRouter = require('./usersRouter')
const articlesRouter = require('./articlesRouter')
const handle405Errors = require('../error-handler/error-handler')
apiRouter.use('/topics',topicsRouter)
apiRouter.use('/users', usersRouter)
apiRouter.use('/articles', articlesRouter)
module.exports = apiRouter