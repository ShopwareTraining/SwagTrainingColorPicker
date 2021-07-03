const { join, resolve } = require('path');
const nodePath = join(__dirname, '..', 'node_modules');

module.exports = () => {
    return {
        resolve: {
            alias: {
                'simple-color-picker': resolve(join(nodePath, 'simple-color-picker')),
                'insert-css': resolve(join(nodePath, 'insert-css')),
            }
        }
    };
}
