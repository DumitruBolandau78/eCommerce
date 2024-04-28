const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('admin-panel', {
        title: "Coral Shop Admin Panel"
    });
});

module.exports = router;