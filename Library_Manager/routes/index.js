var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    if (request.cookies.auth) {
        response.render('index', { title: 'Express' });
    } else {
        response.redirect('/login');
    }
});

module.exports = router;
