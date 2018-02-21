var express = require('express');
var router = express.Router();
var Hobby = require('../models').Hobby;

/* GET Hobby. */
router.get('/', function(req, res) {
  Hobby.all()
    .then( function(hobby) {
      return res.render('hobby', { hobby: hobby });
  })
});

module.exports = router;

/* POST add hobby */
router.post('/', function(req, res) {
  var title = req.body.title;
  Hobby.create({ title: title })
    .then( function() {
      res.redirect('/hobby');
  });
});

router.delete('/:id', function(req, res) {
  Hobby.findById(req.params.id)
    .then( function(hobby) {
      hobby.destroy()
    })
    .then( function() {
      return res.redirect('/hobby');
  });
});

router.get('/', function(req, res) {
  Movie.all({
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then( function(hobby) {
      return res.render('edit', { hobby: hobby });
  });
});

router.put('/:id', function(req, res) {
  Hobby.update(
    { title: req.body.title },
    { where: { id: req.params.id } }
  )
  .then( function() {
    return res.redirect('/hobby');
  })
});
