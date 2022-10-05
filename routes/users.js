const router = require('express').Router();
const { signUp, logIn } = require('../controllers/users');

router.post('/signup', signUp);
router.post('/logIn', logIn);

module.exports = router;