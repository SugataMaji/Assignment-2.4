interface IMydetails {
    Name: string;
    Age: number;
    Phone: number;
}

interface IYourdetails {
    Name : string;
    Age : number;
}

class Mainlist<T> {
    fetchdetails: T[];
    constructor() {
        this.fetchdetails = [];
    }
}

let IMydetailsData : IMydetails = { Name: "Sugata", Age: 23, Phone: 9749778159};
let IYourdetailsData : IYourdetails = { Name : "Rahul", Age : 24};

let Mine: Mainlist<IMydetails> = new Mainlist<IMydetails>();
let Yours: Mainlist<IYourdetails> = new Mainlist<IYourdetails>();
Mine.fetchdetails.push(IMydetailsData);
Yours.fetchdetails.push(IYourdetailsData);
console.log(Mine.fetchdetails);
console.log(Yours.fetchdetails);

    console.log(`User2: ${Mine.fetchdetails} is a valid user .`);
    console.log(`User2: ${Yours.fetchdetails} is a valid user .`);