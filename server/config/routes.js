var path = require ('path'),
   users = require ('../controllers/users');
    bids = require ('../controllers/bids')
sessions = require ('../controllers/sessions');

module.exports = (app) => {
    app.post('/users', users.create);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);

    app.post('/bids', bids.create);
    app.get('/bids', bids.getAll);
    app.get('/bid', bids.getOne)
    
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    });
}