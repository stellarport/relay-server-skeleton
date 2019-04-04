/**
 * Created by istrauss on 5/9/2017.
 */

import {Container} from 'aurelia-dependency-injection';

class DepositController {

    async reference(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();

            throw new Error('deposit reference not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    async instructions(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const {reference, account} = req.query;
            const jwt = req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined; // can be used for KYC

            throw new Error('deposit instructions not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    async depositDestination(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            let id = req.query.id;

            throw new Error('generate deposit destination not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }

    async deposit(req, res, next) {
        try {
            const code = req.query.asset_code.toUpperCase();
            const reference = req.query.reference;

            throw new Error('deposit not implemented.');
        }
        catch(e) {
            res.sendError(e);
        }
    }
}

const controller = Container.instance.get(DepositController);

module.exports = {
    reference: controller.reference.bind(controller),
    instructions: controller.instructions.bind(controller),
    deposit: controller.deposit.bind(controller),
    DepositController
};
