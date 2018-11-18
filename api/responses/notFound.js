/**
 * 404 (Not Found) Handler
 *
 * Usage:
 * return res.notFound();
 * return res.notFound(err);
 * return res.notFound(err, 'some/specific/notfound/view');
 *
 * e.g.:
 * ```
 * return res.notFound();
 * ```
 *
 * NOTE:
 * If a request doesn't match any explicit routes (i.e. `config/routes.js`)
 * or route blueprints (i.e. "shadow routes", Sails will call `res.notFound()`
 * automatically.
 */

module.exports = function notFound(data, options) {
    data = data || {message: 'The requested resource was not found.'};

    // Get access to `req`, `res`, & `sails`
    const req = this.req;
    const res = this.res;
    const sails = req._sails;

    //make sure index.html is served up to any non-api request.
    if (!req.url.indexOf('/api/') === -1) {
        return res.view('../assets/index.html');
    }

    // Set status code
    res.status(404);

    // Log error to console
    if (data !== undefined) {
        sails.log.verbose('Sending 404 ("Not Found") response: \n', data);
    }
    else sails.log.verbose('Sending 404 ("Not Found") response');

    // Only include errors in response if application environment
    // is not set to 'production'.  In production, we shouldn't
    // send back any identifying information about errors.
    if (process.env.NODE_ENV === 'production' && sails.config.keepResponseErrors !== true) {
        data = undefined;
    }

    return res.json(typeof data === 'string' ? {message: data} : data);
};

