/**
 * Created by istrauss on 5/9/2017.
 */

import {Container} from 'aurelia-dependency-injection';

class WithdrawController {

    async instructions(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const dest = req.query.dest;

            throw new Error('withdraw instructions not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    /**
     * Should be called by aas webhook
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
     * Should be called by aas webhook
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
    instructions: controller.instructions.bind(controller),
    withdraw: controller.withdraw.bind(controller),
    send: controller.send.bind(controller),
    WithdrawController
};
