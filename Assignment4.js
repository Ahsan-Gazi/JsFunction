// problem 1

function anaToVori(ana){

    if(typeof ana!='number'){
    return 'Please, input numeric value'
     }
            

    var vori=ana/16;
    return vori;
}


let myAna=anaToVori(320);
console.log(myAna);


// problem 2

function pandaCost(singaraQuantity,somuchaQuantity,jilapiQuantity){
    if(typeof(singaraQuantity)!='number' 
    || typeof(somuchaQuantity)!='number' || typeof(jilapiQuantity)!='number'){
        return 'All Quantity must be numeric value'
    }


const perSingaraCost=7;
const perSomuchaCost=10;
const perJilapiCost=15;

const singaraCostTotal=perSingaraCost*singaraQuantity;
const somuchaCostTotal=perSomuchaCost*somuchaQuantity;
const jilapiCostTotal=perJilapiCost*jilapiQuantity;

const totalCost=singaraCostTotal+somuchaCostTotal+jilapiCostTotal;
return totalCost;
}

const costCalc=pandaCost(2,2,2);
console.log(costCalc);


// problem 3

function picnicBudget(persons){
    var cost;
    if(typeof persons!='number'){
        return 'Persons can not be other than number'
    }
    
    if(persons<=100){
        cost=persons*5000;
    }
    else if(persons<=200 ){
        let firstCost=100*5000;
        let remainigCost=(persons-100)*4000;
        cost=firstCost+remainigCost;
    }
    else if(persons>200){
        let firstCost=100*5000;
        let secondCost=100*4000;
        let thirtCost=(persons-200)*3000;
        cost=firstCost+secondCost+thirtCost;
    }
    return cost;
}
console.log(picnicBudget(201));



// problem 4

const myFriends=['Jamil ','Jamil Hossain ','Nabil','Akiba','Karim','Nabil','Nazmul','Sharif']
function oddFriend(myFriends){

    for(var i=0;i<myFriends.length;i++){

if(typeof myFriends[i]=='number'){
return 'Friend can not be number';
}


if(myFriends[i].length%2==1){
    const element=myFriends[i];
    return element;
         }

    }


}
console.log(oddFriend(myFriends))


