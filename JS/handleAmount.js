// Allow the user to input an amout in either input field, update accordingly.

function handleAmount(e){
    const baseAmount = document.getElementById('base-amount');
    const convertedAmount = document.getElementById('converted-amount');

    let ratio = Number(localStorage.getItem("currentRate"))
    console.log(e.target.value, ratio)
    if(e.target === baseAmount){
        convertedAmount.value = baseAmount.value * ratio 
    }
}

document.getElementById('base-amount').addEventListener('input', handleAmount)



