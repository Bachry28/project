var express= require ('express');
var router= express.Router()

router.get('/:name/:id', function(req, res){
    res.send('judul Film'  + ' name: ' + req.params.name + ' id: ' + req.params.id );
});

router.post('/', function(req, res){
    res.send('judul Film' + 'name: ' + req.params.name + 'and id: ' + req.params.id );
});

router.put('/', function(req, res){
    res.send('helo from put')
});

module.exports = router;