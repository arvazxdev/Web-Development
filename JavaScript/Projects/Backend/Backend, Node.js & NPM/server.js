var slugify = require('slugify');

console.log(slugify('some string')); // some-string

// If you prefer something other than '-' as seprator
console.log(slugify('some string', '%20'));