interface iCricInfo{
    name : string;
    jersyNo? : number;
}

function player (info:iCricInfo) {
    if(info.jersyNo) {
        console.log("The cricket player name is " +
        info.name+ " and his jersy no is "+info.jersyNo);
    }  else {
        return "The cricket player name is " +info.name
    }
    
}

player ({name: "Virat", jersyNo: 12 });