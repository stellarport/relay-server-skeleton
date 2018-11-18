/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 * return res.forbidden(err, 'some/specific/forbidden/view');
 *
 * e.g.:
 * ```
 * return res.forbidden('Access denied.');
 * ```
 */

module.exports = function forbidden(data, options) {
    // Get access to `req`, `res`, & `sails`
    const req = this.req;
    const res = this.res;
    const sails = req._sails;

    // Set status code
    res.status(403);

    // Log error to console
    if (data !== undefined) {
        sails.log.verbose('Sending 403 ("Forbidden") response: \n', data);
    }
    else sails.log.verbose('Sending 403 ("Forbidden") response');

    return res.json(typeof data === 'string' ? {message: data} : data);
};

