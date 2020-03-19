const router = require('express').Router();
const eventsRoutes = require('./events');

router.use('/events', eventsRoutes);

module.exports = router;
