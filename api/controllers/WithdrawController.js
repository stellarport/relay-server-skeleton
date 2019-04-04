/**
 * Created by istrauss on 5/9/2017.
 */

import {Container} from 'aurelia-dependency-injection';

class WithdrawController {

    async reference(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const dest = req.query.dest;
            const dest_extra = req.query.dest_extra;

            throw new Error('withdraw reference not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    async instructions(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const {account, reference} = req.query;
            const jwt = req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined; //can be used for KYC

            throw new Error('withdraw instructions not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    /**
     * Return a specific withdrawal (by withdrawal reference)
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    async withdraw(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const reference = req.query.reference;

            throw new Error('withdraw not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    /**
     * Execute a withdrawal
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    async send(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const transaction_id = req.query.transaction_id;

            throw new Error('send withdraw not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }
}

const controller = Container.instance.get(WithdrawController);

module.exports = {
    reference: controller.instructions.bind(controller),
    instructions: controller.instructions.bind(controller),
    withdraw: controller.withdraw.bind(controller),
    send: controller.send.bind(controller),
    WithdrawController
};
