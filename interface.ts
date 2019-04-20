interface iCricInfo{
    name : string;
    jersyNo? : number;
}

function player (info:iCricInfo) {
    if(info.jersyNo) {
        return "The cricket player name is " +info.name+ " and his jersy no is "+info.jersyNo
    }  else {
        return "The cricket player name is " +info.name
    }
    
}

let viratDetails = player ({name: "Virat"});
console.log("Details of Virat :"+ viratDetails);