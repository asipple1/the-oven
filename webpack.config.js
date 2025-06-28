const merge = require('webpack-merge');
const path = require('path');


// Load base config
const config_base = require('./webpack-settings.config.js');


// Custom config
const config_custom = {};

// Merge base and custom config
module.exports = merge.strategy({ entry: 'replace' })(config_base, config_custom);

