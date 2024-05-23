const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    let isAuth = false;
    if(req.session.isAuth){
        isAuth = true;
    }

    res.render('home', {
        title: "Coral Shop",
        isAuth: isAuth
    });
});

module.exports = router;