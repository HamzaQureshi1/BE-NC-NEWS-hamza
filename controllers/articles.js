const {selectArticleByArticleId} = require('../models/articles')

exports.getArticleByArticleId = (req,res,next) => {
  const {article_id} = req.params
  
  selectArticleByArticleId(article_id).then(article => res.status(200).send({article})).catch(next)
}