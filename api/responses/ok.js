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

import {Container} from 'aurelia-dependency-injection';
import {A3S} from "a3s";
const connectionManager = Container.instance.get(A3S).connectionManager;

module.exports = function sendOK (data, options) {

    // Get access to `req`, `res`, & `sails`
    const req = this.req;
    const res = this.res;const sails = req._sails;

    sails.log.silly('res.ok() :: Sending 200 ("OK") response');

    // Set status code
    res.status(200);

    const payload = typeof data === 'string' ? {message: data} : data;

    connectionManager.signResponsePayload(req, res, payload);

    return res.json(payload);
};
