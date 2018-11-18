/**
 * 500 (Server Error) Response
 *
 * Usage:
 * return res.serverError();
 * return res.serverError(err);
 * return res.serverError(err, 'some/specific/error/view');
 *
 * NOTE:
 * If something throws in a policy or controller, or an internal
 * error is encountered, Sails will call `res.serverError()`
 * automatically.
 */
import serializeError from 'serialize-error';

module.exports = function serverError(data, options) {
    // Get access to `req`, `res`, & `sails`
    const req = this.req;
    const res = this.res;
    const sails = req._sails;

    // Set status code
    res.status(500);

    // Log error to console
    if (data !== undefined) {
        sails.log.error('Sending 500 ("Server Error") response: \n', data);
    }
    else sails.log.error('Sending empty 500 ("Server Error") response');

    // Only include errors in response if application environment
    // is not set to 'development'.  In production or test, we shouldn't
    // send back any identifying information about errors.
    if (process.env.NODE_ENV !== 'development') {
        data = 'An unexpected error has occured. Please contact support.';
    }

    return res.json(typeof data === 'string' ? {message: data} : data instanceof Error ? serializeError(data) : data);
};
