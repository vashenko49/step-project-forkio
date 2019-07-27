const merge = require('webpack-merge');
const baseWebPackConfig = require('./webpack.base.conf');

const buildWebPackConfig = merge(baseWebPackConfig,{
    mode:'production',
    plugins:[]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebPackConfig)
});