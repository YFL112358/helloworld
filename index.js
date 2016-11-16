
var express = require ('express')
var app = express()

let v1ApiRouter = express.Router()

v1ApiRouter.get('/api-1', function(req, res) {

 res.send({ret:100, type: 'v1'})

})

v1ApiRouter.get('/api-2', function(req, res) {

 res.send({ret:200, type: 'v1'})

})

let resApiRouter = express.Router()

resApiRouter.get('/api-1', function(req, res) {

 res.send({ret:100, type: 'res'})

})

resApiRouter.get('/api-2', function(req, res) {

 res.send({ret:200, type: 'res'})

})

app.use('/v1', v1ApiRouter);
app.use('/res', resApiRouter)

app.set('view engine','pug');
app.set('views', './views');

app.get('/res', function (req, res) {
 var title = req.query.title;
 res.render('index', { title: title, message: 'Hello there!' })
})

app.use('/res', express.static('public'))

app.listen(3000,function(){

console.log('port 3000')
})



