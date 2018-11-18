/**
 * 200 (OK) Response
 *
 * Usage:
 * return res.ok();
 * return res.ok(data);
 * return res.ok(data, 'auth/login');
 *
 * @param  {Object} data
 * @param  {String|Object} options
 *          - pass string to render specified view
 */

import {RequestSigner} from "a3s";

const requestSigner = new RequestSigner(process.env.REQUEST_SIGNING_SECRET);

module.exports = function sendOK (data, options) {

    // Get access to `req`, `res`, & `sails`
    const req = this.req;
    const res = this.res;const sails = req._sails;

    sails.log.silly('res.ok() :: Sending 200 ("OK") response');

    // Set status code
    res.status(200);

    const payload = typeof data === 'string' ? {message: data} : data;

    requestSigner.sign(payload, res);

    return res.json(payload);
};
