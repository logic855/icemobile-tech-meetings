var Virgilio = require('virgilio');
var virgilio = new Virgilio();

virgilio.defineAction$(function add(num1, num2) {
    return num1 + num2;
});

virgilio.defineAction$(function* sum(/* num1, num2, num3, ... */) {
    var virgilio = this;
    var args = Array.prototype.slice.call(arguments);
    var result = 0;
    while (args.length) {
        var num = args.pop();
        result = yield virgilio.add(result, num);
    }
    return result;
});

module.exports = virgilio;


//TESTING
virgilio.sum(1,2,3,4)
    .then(function(result) {
        console.log('RESULT IS IN!');
        console.log(result);
    });
