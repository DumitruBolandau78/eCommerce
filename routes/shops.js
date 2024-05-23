const {Router} = require('express');
const router = Router();

router.get('/bershka', (req, res) => {
    res.render('collection-category', {
        title: 'Berskha Collection',
        isBershka: true,
        isAuth: true
    });
});

router.get('/pull-and-bear', (req, res) => {
    res.render('collection-category', {
        title: 'Pull&Bear Collection',
        isPullAndBear: true,
        isAuth: true
    });
});

router.get('/zara', (req, res) => {
    res.render('collection-category', {
        title: 'ZARA Collection',
        isZara: true,
        isAuth: true
    });
});

router.get('/h-and-m', (req, res) => {
    res.render('collection-category', {
        title: 'H&M Collection',
        isHAndM: true,
        isAuth: true
    });
});

router.get('/new-yorker', (req, res) => {
    res.render('collection-category', {
        title: 'NewYorker Collection',
        isNewYorker: true,
        isAuth: true
    });
});
module.exports = router;