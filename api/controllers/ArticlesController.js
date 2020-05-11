/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    try {
      let params = req.allParams();  //
      let article = await Articles.create(params).fetch();
      res.send(article);
    } catch (error) {
      return res.badRequest(error);
    }
  },
  delete: async (req, res) => {
    try {
      let deleteArticle = await Articles.destroy({ id: req.params.id }).fetch();
      res.ok(deleteArticle);
    } catch (error) {
      return res.badRequest(error);
    }
  },
  update: async (req, res) => {
    try {
      let params = req.allParams();
      let updateArticle = await Articles.update({ id: params.id }, params).fetch();
      res.send(updateArticle);
    } catch (error) {
      res.badRequest(error);
    }
  }

};
