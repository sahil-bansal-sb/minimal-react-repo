require('@babel/register');
const webpackMerge = require('webpack-merge');

const common = require('./config/webpack/webpack.common.babel');

const envs = {
    local: 'dev',
    development: 'dev',
    production: 'prod'
};

/* eslint-disable global-require,import/no-dynamic-require */
console.log("React app stage", process.env.REACT_APP_STAGE)
const env = envs[process.env.REACT_APP_STAGE || 'local'];
const envConfig = require(`./config/webpack/webpack.${env}.babel`);
module.exports = webpackMerge(common, envConfig);