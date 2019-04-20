class Score {
   constructor(public runs:number, public balls:number) {}
   addRuns(newScore: Score) {
       return new Score (this.runs + newScore.runs, this.balls + newScore.balls);
   }

   totalScore (){
    return "Overall score of the match is " +this.runs + " runs in "+this.balls + " balls";
   }
}

let initialScore = new Score (150,150);
let newScore = new Score(200, 150);
let finalScore = initialScore.addRuns(newScore);
console.log (finalScore.totalScore());
