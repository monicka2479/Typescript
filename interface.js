function player(info) {
    if (info.jersyNo) {
        return "The cricket player name is " + info.name + " and his jersy no is " + info.jersyNo;
    }
    else {
        return "The cricket player name is " + info.name;
    }
}
var viratDetails = player({ name: "Virat" });
console.log("Details of Virat :" + viratDetails);
