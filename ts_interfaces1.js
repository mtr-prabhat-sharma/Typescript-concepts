"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
exports.Student = Student;
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;
var student = {
    rollNo: 12,
    name: 'Jhon',
    grade: 'XII',
    contactNo: 123456,
    address: {
        hNo: 1223,
        place: 'Greater Noida',
        city: 'Noida',
        PIN: 3333
    }
};
console.log(student);
