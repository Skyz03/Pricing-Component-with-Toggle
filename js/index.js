const SWITCH_CHECKBOX = document.querySelector("#switch");

//creation of the loop for selecting the price elements
const noOfElements = document.querySelectorAll(".price").length
for (let i = 0; i < noOfElements; i++) {

  let priceElements = document.querySelectorAll(".price")[i];


  if (SWITCH_CHECKBOX.checked) {
    priceElements = priceElements.innerHTML / 10;

  }

  priceElements = priceElements.innerHTML;

}