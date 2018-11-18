import './config';
import './di';

import path from 'path';
import fs from 'fs';
import {Container, inject} from 'aurelia-dependency-injection';
import rc from 'rc';
import sails from 'sails';
import {A3S} from "a3s";

if (process.env.NODE_ENV === 'production') {
    fs.unlink('./config.js');
}

@inject(A3S)
class App {
    constructor(a3s) {
        this.a3s = a3s;
    }

    init() {
        if (process.env.NODE_ENV === 'development') {
            this.a3s.useSandbox();
        }

        const config = {
            ...rc('sails'),
            appPath: path.resolve(__dirname)
        };

        sails.lift(config);
    }
}

Container.instance.get(App).init();
