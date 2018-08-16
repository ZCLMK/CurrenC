
const swapElt = document.getElementById("swap");

    // set localStorage swap flag to false by default
    function toggleSwap(){
    
    const swapFlag = localStorage.getItem('swap');

//---------------------------------------------- TOGGLE SWAP IN LOCALSTORAGE-----------------------------------------------------

        if(swapFlag === 'false' || !swapFlag){
            localStorage.setItem('swap', 'true');
            console.log('swap is now to true')
        }else if(swapFlag === 'true'){
            localStorage.setItem('swap', 'false');
            console.log('swap is now to false');
        }
     
//--------------------------------------------------SWAP SELECTED ELEMENTS-------------------------------------------------------------

// select both select elements
const selectOne = document.getElementById("currency-one");
const selectTwo = document.getElementById("currency-two");


    function monitorMe(e){
        // on sélectionne les options séléctionnées de part et d'autre 
    let selectedLeft = selectOne.selectedOptions[0];
    let selectedRight = selectTwo.selectedOptions[0];
    //  on sélectionne les valeurs des dites options
    let leftValue = selectedLeft.value;
    let rightValue = selectedRight.value; 
    
    console.log("left value: " + leftValue + " right value " +  rightValue);
        
        if(rightValue != leftValue){

            let first = document.querySelector(`#currency-two option[value=${leftValue}]`)
            let second = document.querySelector(`#currency-one option[value=${rightValue}]`)
            // var el = document.querySelector("div.panneau-utilisateur.principal input[name='identifiant']");
            first.setAttribute('selected', true)
            second.setAttribute('selected', true)
            console.log(first, second)
        }
    }

monitorMe();

    }

    swapElt.addEventListener('click', toggleSwap);

