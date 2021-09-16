let SWITCH_CHECKBOX = document.querySelector("#switch");

//creation of the loop for selecting the price elements
const noOfElements = document.querySelectorAll(".price").length

function priceChange() {

  for (let i = 0; i < noOfElements; i++) {

    let priceElements = document.querySelectorAll(".price")[i];
    let element = priceElements.textContent;
    console.log(element);
    let numberElements = (parseFloat(element)).toFixed(2);
    // console.log(numberElements);

    if (SWITCH_CHECKBOX.checked === true) {

      priceElements.innerHTML = numberElements / 10;

    }

    priceElements = priceElements.innerHTML;

  }
}