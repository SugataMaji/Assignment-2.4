var Mainlist = (function () {
    function Mainlist() {
        this.fetchdetails = [];
    }
    return Mainlist;
}());
var IMydetailsData = { Name: "Sugata", Age: 23, Phone: 9749778159 };
var IYourdetailsData = { Name: "Rahul", Age: 24 };
var Mine = new Mainlist();
var Yours = new Mainlist();
Mine.fetchdetails.push(IMydetailsData);
Yours.fetchdetails.push(IYourdetailsData);
console.log(Mine.fetchdetails);
console.log(Yours.fetchdetails);
console.log("User2: " + Mine.fetchdetails + " is a valid user .");
console.log("User2: " + Yours.fetchdetails + " is a valid user .");
