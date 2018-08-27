const swapBtn = document.getElementById("swap");
const curOne = document.querySelector('#currency-one');
const curTwo = document.querySelector('#currency-two');
const baseAmount = document.getElementById('base-amount');
const convertedAmount = document.getElementById('converted-amount');

function swap() {
    // only if different currencies selected
  let currentRate = localStorage.getItem("currentRate");
  console.log("old rate = " + currentRate);
  
    if (curOne.value != curTwo.value) {
        //-------------------------------------swapping options------------------------------------------
        console.log('swapping!');

        let bothValues = [];
        bothValues.push(curOne.value, curTwo.value);
        // Actual swapping of the option values
        curOne.value = bothValues[1];
        curTwo.value = bothValues[0];
        //-------------------------------------swapping converted values------------------------------------------
    }
    currentRate = 1 / parseFloat(currentRate);
    console.log("new current rate" + currentRate);
    localStorage.setItem("currentRate", String(currentRate));
    handleAmount.update();
}

swapBtn.addEventListener('click', swap);