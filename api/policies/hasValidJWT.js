import {inject, Container} from 'aurelia-dependency-injection';
import {A3S} from 'a3s';

@inject(A3S)
export class HasValidJWT {
    constructor(a3s) {
        this.a3s = a3s;
    }

    async hasValidJWT(req, res, next) {
        const verificationResult = await this.verify(req);

        if (!verificationResult || !verificationResult.verified) {
            return res.status(401).send({error: verificationResult.message});
        }

        next();
    };

    async verify(req) {
        let verificationResult;
        try {
            verificationResult = await this.a3s.connectionManager.verifyRequestByJWT(req);
        }
        catch(e) {}

        if (!verificationResult || !verificationResult.verified) {
            return {
                verified: false,
                message: verificationResult.message || 'We had a problem authenticating your request.'
            };
        }

        return {
            verified: true
        }
    };
}


const hasValidJWTObj = Container.instance.get(HasValidJWT);

module.exports = hasValidJWTObj.hasValidJWT.bind(hasValidJWTObj);