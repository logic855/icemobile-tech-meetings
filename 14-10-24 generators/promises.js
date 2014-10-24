var Virgilio = require('virgilio');
var virgilio = new Virgilio();

virgilio.defineAction$(function add(num1, num2) {
    return num1 + num2;
});

virgilio.defineAction$(function sum(/* num1, num2, num3, ... */) {
    var virgilio = this;
    var args = Array.prototype.slice.call(arguments);
    if (args.length === 1) {
        return args[0];
    }
    var num1 = args.pop();
    return virgilio.execute$.apply(null, args).then(function addResult(num2) {
        return virgilio.add(num1, num2);
    });
});

module.exports = virgilio;


//TESTING
virgilio.sum(1,2,3,4)
    .then(function(result) {
        console.log('RESULT IS IN!');
        console.log(result);
    });
