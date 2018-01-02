/**
 * A logging service. 
 * TODO: POST implementation
 *
 * @type {*}
 */
const router = require('express').Router();

const logger = require('.././services/serviceLogger');

// soException is a stringify exception object
router.get('/error/:sErrorMessage/exception/:soException', function (req, res, next) {
    logger.logError(req.params.sErrorMessage, req.params.soException);
    res.send('logged');
});

router.get('/info/:sInfoMessage', function (req, res, next) {
    logger.logInfo(req.params.sInfoMessage);
    res.send('logged');
});

module.exports = router;
