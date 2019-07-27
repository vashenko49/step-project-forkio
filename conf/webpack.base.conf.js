const path = require('path');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        paths:PATHS
    },
    entry: {

    },
    output: {
        
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ]
};