//example url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_EUR&compact=y
function getUserInput(e){   // on page load and when user selects a currency
// handle new currency being selected
  
let [currencyOneCode, currencyTwoCode] =  ['EUR', 'USD'];
let convertUrl;
const baseAmount = document.getElementById('base-amount');
const convertedAmount = document.getElementById('converted-amount');
const currencyTwo = document.getElementById('currency-two')
const currencyOne = document.getElementById('currency-one')
const swapBtn = document.getElementById('swap-img')
const isSwapped = localStorage.getItem('swap')
// console.log(e.target)
if(e.target === currencyOne || e.target === currencyTwo){

        currencyOneCode = currencyOne.value;
        currencyTwoCode = currencyTwo.value;
        console.log('one or two was the target')
        convertUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${currencyOneCode}_${currencyTwoCode}&compact=y`;
        console.log(convertUrl);
        //---------------------------------------------- SWAPPING VALUES-----------------------------------------------------
        
    }else if(e.target === swapBtn){
        console.log('target was swap btn')
        if(isSwapped === 'true'){
            
            convertUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${currencyTwoCode}_${currencyOneCode}&compact=y`;
            console.log(convertUrl + ' isSwap was true');
        }else{
            convertUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${currencyOneCode}_${currencyTwoCode}&compact=y`;
            console.log(`when true => ${convertUrl}`);
        }
    }else{
        convertUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${currencyOneCode}_${currencyTwoCode}&compact=y`;
        console.log(convertUrl);
    }
        //---------------------------------------------- SWAPPING VALUES-----------------------------------------------------
        // console.log(convertUrl);
    
     getRate(convertUrl, currencyOneCode, currencyTwoCode)
        .then(data => {
            console.log(data, typeof data, baseAmount.value, typeof baseAmount.value, convertedAmount.value, typeof convertedAmount.value);
        // store the currently selected base currency rate in local Storage
        localStorage.setItem("currentRate", String(data))
        localStorage.setItem("codeOne", currencyOneCode)
        localStorage.setItem("codeTwo", currencyTwoCode)
        
        console.log('converted amount vlr: ' + convertedAmount.value)
         convertedAmount.value = data * Number(baseAmount.value)
         console.log('converted amount vlr: ' + convertedAmount.value)

        })
        .catch(err => console.log(err))
    }

 async function getRate(url, codeOne, codeTwo) {
     try{
         let swapped = localStorage.getItem('swap')
         console.log(swapped + ' est swapped dans get rate')
        let response = await fetch(url)
        let data = await response.json()  
         // parsing data object to get to the actual rate and return it
         if(swapped === 'false'){
            return data[`${codeOne}_${codeTwo}`]['val'];
         }else{
             return data[`${codeTwo}_${codeOne}`]['val'];
         }

     }catch{
         displayError('Une erreur est survenue')
     }
 
}
function displayError(errorMsg){
    const notice = document.getElementById('notice')
    notice.textContent = errorMsg;
    notice.classList.add('error')
    setTimeout(6000, () => {
        notice.classList.remove('error');
        notice.textContent = '';
    })
}

document.getElementById('currency-one').addEventListener('change', getUserInput);
document.getElementById('currency-two').addEventListener('change', getUserInput);
// document.getElementById('swap-img').addEventListener('click', getUserInput);
window.addEventListener("load", getUserInput);

