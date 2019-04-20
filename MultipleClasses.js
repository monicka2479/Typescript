var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard(runs, balls) {
        this.runs = runs;
        this.balls = balls;
    }
    ScoreBoard.prototype.addRuns = function (newScore) {
        return new ScoreBoard(this.runs + newScore.runs, this.balls + newScore.balls);
    };
    ScoreBoard.prototype.totalScore = function () {
        return "Overall score of the match is " + this.runs + " runs in " + this.balls + " balls";
    };
    return ScoreBoard;
}());
var FullScoreBoard = /** @class */ (function (_super) {
    __extends(FullScoreBoard, _super);
    function FullScoreBoard(runs, balls, fours, sixes) {
        var _this = _super.call(this, runs, balls) || this;
        _this.runs = runs;
        _this.balls = balls;
        _this.fours = fours;
        _this.sixes = sixes;
        return _this;
    }
    FullScoreBoard.prototype.addRuns = function (newScore) {
        var prevScore = _super.prototype.addRuns.call(this, newScore);
        return new FullScoreBoard(prevScore.runs, prevScore.balls, this.fours + newScore.fours, this.sixes + newScore.sixes);
    };
    FullScoreBoard.prototype.totalScore = function () {
        return "Overall score of the match is " + this.runs + " runs in " + this.balls
            + " balls having " + this.fours + " fours and " + this.sixes + " sixes";
    };
    return FullScoreBoard;
}(ScoreBoard));
var match1 = new FullScoreBoard(320, 300, 9, 3);
var match2 = new FullScoreBoard(250, 300, 5, 2);
var totalScore = match1.addRuns(match2);
console.log(totalScore.totalScore());
