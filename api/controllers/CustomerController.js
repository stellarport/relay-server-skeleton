/**
 * Created by istrauss on 5/9/2017.
 */

import {Container} from 'aurelia-dependency-injection';

class CustomerController {
    async put(req, res, next) {
        try {
            return res.ok();
        }
        catch(e) {
            res.sendError(e);
        }
    }

    async destroy(req, res, next) {
        try {
            return res.ok();
        }
        catch(e) {
            res.sendError(e);
        }
    }
}

const controller = Container.instance.get(CustomerController);

module.exports = {
    put: controller.put.bind(controller),
    destroy: controller.destroy.bind(controller),
    CustomerController
};
