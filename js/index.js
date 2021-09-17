let SWITCH_CHECKBOX = document.querySelector("#switch");

//creation of the loop for selecting the price elements
const noOfElements = document.querySelectorAll(".price").length

function priceChange() {

  for (let i = 0; i < noOfElements; i++) {

    let priceElements = document.querySelectorAll(".price");

    // let element = priceElements.textContent;
    // console.log(element);
    // let numberElements = (parseFloat(element)).toFixed(2);
    // console.log(numberElements);

    if (SWITCH_CHECKBOX.checked === true) {

      priceElements[0].innerHTML = "$19.99";
      priceElements[1].innerHTML = "$24.99";
      priceElements[2].innerHTML = "$39.99";
    } else {
      priceElements[0].innerHTML = "$199.99";
      priceElements[1].innerHTML = "$249.99";
      priceElements[2].innerHTML = "$399.99";
    }
  }
}