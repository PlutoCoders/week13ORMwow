const router = require(`express`).Router()
const apiRoutes = require('./api');
// Telling our router, whenever someone types in our localhose/api
// redirect them to this variable api routes
// On the redirection, it will ignore whatever is next
// Telling user to "use these routes!"
router.use('/api', apiRoutes);

module.exports = router;