var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    } // shorthand assignment of properties
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getInfo = function () {
        return this.firstName + " " + this.lastName + " is " + this.age + " yrs old";
    };
    return Person;
}());
var jerome = new Person('Jerome', 'Felix', 26);
console.log(jerome.getFullName());
console.log(jerome.getInfo());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, middleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getFullName = function () {
        var nameSegments = _super.prototype.getFullName.call(this).split(' ');
        nameSegments.splice(1, 0, this.middleName);
        var fullName = nameSegments.join(' ');
        return fullName;
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'John', 'Man', 'Doe', 19);
console.table(manager);
console.log(manager.getFullName());
manager.employeeId = 3;
console.log(manager.employeeId);
