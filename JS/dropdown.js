// import  currencies.json file

function loadJSON(callback) {

  const request = new XMLHttpRequest();
  request.open('GET', 'resources/currencies.json', true);
  request.onreadystatechange = function () {
    if(request.readyState == 4 && request.status == "200"){
      callback(request.responseText)
    }
  }
  request.send(null);
}

// fill up and generate dropdown lists

function useJSON(data){
  const asObject = JSON.parse(data)
  const currencyTwo = document.getElementById('currency-two')
  const currencyOne = document.getElementById('currency-one')
  let dollarCounter= 0;

  for(let item in asObject){
    //   console.log(`item : ${asObject[item]}`)

      let currency = asObject[item]
      if(currency.currencyId=== 'USD') dollarCounter += 1; // avoid having more than one us dollar per list 
        if(dollarCounter < 2){
            let dropdown = document.createElement('option')
            dropdown.setAttribute('value', currency.currencyId)
            dropdown.textContent = currency.currencyName
        //   clone dropdown so it won't be remove when applying appendChild. 'true' includes children of element.
            let dropdownTwo = dropdown.cloneNode(true) 
        
            //set US dollar as default selected currency in first dropdown list, Euro in second dropdown
            if(currency.id === "FR"){
            dropdown.setAttribute('selected', true);
            }else if(currency.id === "US"){
            dropdownTwo.setAttribute('selected', true);
            }
        currencyOne.appendChild(dropdown);
        currencyTwo.appendChild(dropdownTwo);
        }
    
     }
}

loadJSON(useJSON)




