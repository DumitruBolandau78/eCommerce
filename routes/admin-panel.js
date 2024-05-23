const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    if(!req.session.user.isAdmin){
        return res.redirect('/');
    }
    res.render('admin-panel', {
        title: "Coral Shop Admin Panel"
    });
});

module.exports = router;