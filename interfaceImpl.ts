interface iCricInfo{
    name : string;
    jersyNo? : number;
    getInfo(): string;
}

class cricketer implements iCricInfo {

    constructor (public name:string, public jersyNo:number) {}

    getInfo(){
        return "The cricket player name is "+this.name+" and his jersy no is " +this.jersyNo;
    }

}

let virat = new cricketer("Virat", 12);

console.log("Virat Details :"+ virat.getInfo());