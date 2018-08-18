//example url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_EUR&compact=y
function getUserInput(e) {
    // on page load and when user selects a currency
    // handle new currency being selected

    let [currencyOneCode, currencyTwoCode] = ['EUR', 'USD'];
    let convertUrl;
    const baseAmount = document.getElementById('base-amount');
    const convertedAmount = document.getElementById('converted-amount');
    const currencyTwo = document.getElementById('currency-two');
    const currencyOne = document.getElementById('currency-one');
    const swapBtn = document.getElementById('swap-img');

    // console.log(e.target)
    if (e.target === currencyOne || e.target === currencyTwo) {

        currencyOneCode = currencyOne.value;
        currencyTwoCode = currencyTwo.value;
        
    }
    convertUrl = `https://free.currencyconverterapi.com/api/v6/convert?q=${currencyOneCode}_${currencyTwoCode}&compact=y`;
    console.log(convertUrl);

    getRate(convertUrl, currencyOneCode, currencyTwoCode).then(data => {

        // store the currently selected base currency rate in local Storage
        console.log(data);
        let currentRate = data[`${currencyOneCode}_${currencyTwoCode}`]['val'];
        localStorage.setItem("currentRate", String(currentRate));
        handleAmount.update();
    }).catch(err => console.log(err));
}

async function getRate(url, codeOne, codeTwo) {

    let response = await fetch(url);
    let data = response.json();
    try {
        return data;
    } catch (e) {
        displayError('something went wrong');
    }
}

//-------------------------------------error handling------------------------------------------

function displayError(errorMsg) {
    const notice = document.getElementById('notice');
    notice.textContent = errorMsg;
    notice.classList.add('error');
    setTimeout(6000, () => {
        notice.classList.remove('error');
        notice.textContent = '';
    });
}

document.getElementById('currency-one').addEventListener('change', getUserInput);
document.getElementById('currency-two').addEventListener('change', getUserInput);
let inputs = [document.querySelector("#base-amount"), document.querySelector("#converted-amount")];
inputs.forEach(elt => {
    elt.addEventListener('input', handleAmount.update);
});
window.addEventListener("load", handleAmount.update);
window.addEventListener("load", getUserInput);