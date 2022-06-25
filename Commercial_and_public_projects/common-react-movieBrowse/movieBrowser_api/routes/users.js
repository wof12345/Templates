import Router from 'express';
var router = Router();

const usersRouter = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

export default usersRouter;