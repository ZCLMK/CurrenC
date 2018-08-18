// Allow the user to input an amout in either input field, update accordingly.

const handleAmount = (function(e) {
    const baseAmount = document.getElementById('base-amount');
    const convertedAmount = document.getElementById('converted-amount');
    let ratio = Number(localStorage.getItem("currentRate"));

    let update = function(e = null ){
        ratio = Number(localStorage.getItem("currentRate"));
        if(e){
            if (e.target === convertedAmount) {
                baseAmount.value = (Number(convertedAmount.value) / ratio).toFixed(2);
            } else {
                convertedAmount.value = (Number(baseAmount.value) * ratio).toFixed(2);
            }
        }else{
            console.log("pas d'event!!");
            
            convertedAmount.value = (Number(baseAmount.value) * ratio).toFixed(2);
        }
    }

    // let updateFromSwap = function(){
    //     convertedAmount.value = (Number(baseAmount.value) * ratio).toFixed(2);
    // }
   return {update: update};
})()


// à appeler dans convert (onload)
// window.onload = handleAmount;

//a appeler dans swap 
// document.getElementById('swap').addEventListener('click', handleAmount);
