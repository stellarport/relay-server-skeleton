/**
 * Created by istrauss on 5/9/2017.
 */

const {series, crossEnv, copy, rimraf} = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps serve',
        serve: crossEnv('NODE_ENV=development node -r babel-register app'),
        build: series(
            rimraf('dist'),
            rimraf('*.log'),
            'babel . -d dist --copy-files --ignore node_modules'
        ),
        dockerize: series(
            'nps transpile',
            'docker build -t relay-server .',
            rimraf('dist'),
        )
    }
};