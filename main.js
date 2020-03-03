let user; let goal; let amount; let result; 

let userRadios = document.getElementsByName("user");

let goalOptions = document.getElementById("currencies").options;

function getUser(){
    user = document.querySelector('input[name=user]:checked').value;
}

function getGoal(){
    goal=goalOptions[goalOptions.selectedIndex].value;
}

function getAmount(){
    amount = document.getElementById("amount").value;
    if(amount<0){
        document.getElementById("result").innerHTML="Bill must be a positive number";
        getAmount();
    }
}

function showResult(){
    getUser(); 
    getGoal(); 
    //callApi();
    //updateResults();
    getAmount();
    calculate();
    document.getElementById("result").innerHTML=result;
}

function calculate(){
    rate=currencyList[user][goal];
    result=amount*rate;
}

const currencyList = {
    VND: {
        VND: 1,
        USD: 0.000043,
        KRW: 0.052,
        EUR: 0.000039,
        IDR: 0.61
    },
    USD: {
        VND: 23208,
        USD: 1,
        KRW: 1192,
        EUR: 0.90,
        IDR: 14230,
    },
    KRW : {
        VND: 19.47,
        USD: 0.00084,
        KRW: 1,
        EUR: 0.00075,
        IDR: 11.94
    },
      EUR : {
        VND: 25869.92,
        USD: 1.11,
        KRW: 1327.55,
        EUR: 1,
        IDR: 15865.47
    },
    IDR : {
        VND: 1.63,
        USD: 0.00007,
        KRW: 0.084,
        EUR: 0.000063,
        IDR: 1
    }
}









//LATER PART
// let rate;

// //API functions
// function vndToGoal() {
//     result = amount * rate;
// }

// function usdToGoal() {
//   result = amount * rate;
// }

// function krwToGoal() {
//   result = amount * rate;
// }

// function eurToGoal() {
//   result = amount * rate;
// }

// function idrToGoal() {
//   result = amount * rate;
// }

// //API functions end

// async function callApi() {
//     let url = 'https://free.currencyconverterapi.com/api/v6/convert?q='+user+"_"+goal+'&compact=y&apiKey=31afa7038ba9e6066b94';
//     let result = await fetch(url);
//     let json = await result.json();
//     rate = json[user+"_"+goal];
//     updateResults(json);
// }

// function updateResults(response) {
//   console.log(response);
// }