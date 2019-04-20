interface iPlayerDetails{
    name : string;
    jersyNo? : number;
}

interface iBatsman extends iPlayerDetails{
    battingStyle : string;
}

interface iBowler extends iPlayerDetails{
    bowlingStyle : string;
}

interface iAllrounder extends iBatsman, iBowler{
    
}

let allRounder1 = <iAllrounder>{};
allRounder1.name = "Hardhik Pandya";
allRounder1.jersyNo = 33;
allRounder1.battingStyle = "Right hand";
allRounder1.bowlingStyle = "Speed";

console.log (allRounder1);

