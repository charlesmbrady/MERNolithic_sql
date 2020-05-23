const router = require('express').Router();
const primaryItemsRoutes = require('./primaryItems');
const testsRoutes = require('./tests');

router.use(primaryItemsRoutes);
router.use(testsRoutes);

module.exports = router;
