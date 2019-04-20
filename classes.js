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
var initialScore = new ScoreBoard(150, 150);
var newScore = new ScoreBoard(200, 150);
var finalScore = initialScore.addRuns(newScore);
console.log(finalScore.totalScore());
