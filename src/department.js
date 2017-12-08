var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract class called department which is extended by 2 more classes below
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Welcome to: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name + ":All tasks related to accounting & auditing will be carried out here."); // constructors in derived classes must call super()
        return _this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Please revert with your response to the recurring meeting invite at 11am, every Friday.");
    };
    return AccountingDepartment;
}(Department));
var examinationDepartment = /** @class */ (function (_super) {
    __extends(examinationDepartment, _super);
    function examinationDepartment(name) {
        var _this = _super.call(this, name) || this;
        console.log();
        console.log(_this.name + ": Exam format set up and paper corrections done here.");
        return _this;
    }
    examinationDepartment.prototype.printMeeting = function () {
        console.log("Internal and external mark sheets must be submitted at bi-weekly meeting, every Monday.");
    };
    examinationDepartment.prototype.revaluation = function () {
        console.log("Revaluation requests should be submitted only on specified terms.");
    };
    return examinationDepartment;
}(Department));
var adepartment = new AccountingDepartment("Accounting Dept."); // Creating reference to abstract type
adepartment.printName();
adepartment.printMeeting();
var edepartment = new examinationDepartment("Examination Dept."); //CReating reference and object of subclass
edepartment.printMeeting();
edepartment.revaluation();
