const _ = require ('lodash');

const numbers =[12,13,4,22,31];

_.each(numbers, function(number, i) {
    console.log(number);
});