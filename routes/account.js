const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('account', {
        title: "Coral Shop Account"
    });
});

module.exports = router;