/**
 * Created by istrauss on 3/20/2017.
 */

// Need aurelia-polyfills for the Reflect API (aurelia dependency injection needs the REFLECT API)
import 'aurelia-polyfills';

import {Container} from 'aurelia-dependency-injection';

export class DI {
    init() {
        this.setupRootContainer();
        this.addInjectables();
    }

    setupRootContainer() {
        //First thing is first, lets set up DI so that it works throughout the app.
        this.rootContainer = new Container();
        //accessible via Container.instance
        this.rootContainer.makeGlobal();
        //injecting Container will resolve to rootContainer (no need for any autoGenerated children on the server side)
        this.rootContainer.registerHandler(Container, () => this.rootContainer);
    }

    addInjectables() {
        // Add global injectables here
        // Use following format:
        // this.rootContainer.registerHandler(Class, () => instance);
    }
}

(new DI()).init();