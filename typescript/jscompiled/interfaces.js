// Using interface for objects
var user = {
    firstName: 'Saranga',
    lastName: 'Buwaneka',
    age: 55,
    walk: function () { return console.log('Walking'); }
};
// Using interfaces for classes
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.walk = function () {
        return;
    };
    return Employee;
}());
