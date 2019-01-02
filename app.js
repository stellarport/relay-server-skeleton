import './config';
import './di';

import path from 'path';
import {Container, inject} from 'aurelia-dependency-injection';
import rc from 'rc';
import sails from 'sails';
import {A3S} from "a3s";

@inject(A3S)
class App {
    constructor(a3s) {
        this.a3s = a3s;
    }

    init() {
        const config = {
            ...rc('sails'),
            appPath: path.resolve(__dirname)
        };

        sails.lift(config);
    }
}

Container.instance.get(App).init();
