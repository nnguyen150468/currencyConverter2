let user; let goal; let amount; let result; 

let userRadios = document.getElementsByName("user");

let goalOptions = document.getElementById("currencies").options;


/* getUser using loop
function getUser() {
for (let i=0, length=userRadios.length ; i < length; i++){
    if(userRadios[i].checked){
        user=userRadios[i].value;
        break;
    }
}
}
*/

function getUser(){
    user = document.querySelector('input[name=user]:checked').value;
}

function getGoal(){
    goal=goalOptions[goalOptions.selectedIndex].value;
}

function getAmount(){
    amount = document.getElementById("amount").value;
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

//exchange rates
const VND = {
    VND: 1,
    USD: 0.000043,
    KRW: 0.052,
    EUR: 0.000039,
    IDR: 0.61
  };
  
const USD = {
    VND: 23208,
    USD: 1,
    KRW: 1192,
    EUR: 0.90,
    IDR: 14230,
 };
  
const KRW = {
    VND: 19.47,
    USD: 0.00084,
    KRW: 1,
    EUR: 0.00075,
    IDR: 11.94
  };

const EUR = {
    VND: 25869.92,
    USD: 1.11,
    KRW: 1327.55,
    EUR: 1,
    IDR: 15865.47
};

const IDR = {
    VND: 1.63,
    USD: 0.00007,
    KRW: 0.084,
    EUR: 0.000063,
    IDR: 1
};

//functions to convert currencies, style the currencies, validate the input
function vndToGoal() {
      let rate = VND[goal];
      result = amount * rate;
  }

function usdToGoal() {
    let rate = USD[goal];
    result = amount * rate;
}

function krwToGoal() {
    let rate = KRW[goal];
    result = amount * rate;
}

function eurToGoal() {
    let rate = EUR[goal];
    result = amount * rate;
}

function idrToGoal() {
    let rate = IDR[goal];
    result = amount * rate;
}
// */
// run the cases
function calculate(){
    switch (user) {
        case 'VND':
            vndToGoal();
            break;
        case 'USD':
            usdToGoal();
            break;
        case 'KRW':
            krwToGoal();
            break;
        case 'EUR':
            eurToGoal();
            break;
        case 'IDR':
            idrToGoal();
            break;
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