var cricketer = /** @class */ (function () {
    function cricketer(name, jersyNo) {
        this.name = name;
        this.jersyNo = jersyNo;
    }
    cricketer.prototype.getInfo = function () {
        return "The cricket player name is " + this.name + " and his jersy no is " + this.jersyNo;
    };
    return cricketer;
}());
var virat = new cricketer("Virat", 12);
console.log("Virat Details :" + virat.getInfo());
