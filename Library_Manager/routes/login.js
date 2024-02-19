var express = require('express');
var router = express.Router();

router.get('/', function (request, response) {
    response.render('login', { title: 'Login' });
});

router.post('/login', function (request, response) {
    // create cookies
    var id = request.body.login;
    var pw = request.body.password;

    // print
    console.log(login, password);
    console.log(request.body);

    client.query('SELECT * FROM products WHERE id = ?', [login], function (error, result, fields){
        if( error ) {
            response.render('login', {
                title: 'Login'
            })
        }
    })
    // check logined
    if ( login == 'rint' && password == '1234') {
        // success logined
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        // failed to login
        response.redirect('/login');
    }
});

module.exports = router;
