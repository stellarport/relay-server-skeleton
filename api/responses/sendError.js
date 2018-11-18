/**
 * Created by ISHAI-NOTEBOOK on 8/30/2016.
 */

import {ForbiddenError, BadRequestError, NotFoundError} from '../errors';

module.exports = function sendError(data, options) {
    const res = this.res;

    if (data instanceof ForbiddenError) {
        res.forbidden(data);
    }
    else if (data instanceof BadRequestError) {
        res.badRequest(data);
    }
    else if (data instanceof NotFoundError) {
        res.notFound(data);
    }
    else {
        res.serverError(data);
    }
};
