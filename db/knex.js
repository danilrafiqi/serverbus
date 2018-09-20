var environment =  'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);

module.exports = knex;