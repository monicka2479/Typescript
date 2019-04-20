class ScoreBoard {
    constructor(public runs:number, public balls:number) {}
    addRuns(newScore: ScoreBoard) {
        return new ScoreBoard (this.runs + newScore.runs, this.balls + newScore.balls);
    }
 
    totalScore (){
     return "Overall score of the match is " +this.runs + " runs in "+this.balls + " balls";
    }
 }

 class FullScoreBoard extends ScoreBoard {
    constructor(public runs:number, public balls:number, 
        public fours:number, public sixes:number) {
        super(runs,balls);
    }
    addRuns(newScore: FullScoreBoard) {
        var prevScore = super.addRuns(newScore);
        return new FullScoreBoard (prevScore.runs, prevScore.balls, 
            this.fours + newScore.fours, this.sixes + newScore.sixes);
    }
 
    totalScore (){
     return "Overall score of the match is " +this.runs + " runs in "+this.balls 
     + " balls having " +this.fours + " fours and " +this.sixes+ " sixes";
    }
 }

 let match1 = new FullScoreBoard(320, 300, 9, 3);
 let match2 = new FullScoreBoard(250, 300, 5, 2);
 let totalScore = match1.addRuns(match2);
 console.log(totalScore.totalScore());

