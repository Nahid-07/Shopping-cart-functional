function getInputFieldPlus(elementId){
    const InputField = document.getElementById(elementId);
    const InputValue = InputField.value;
    const previousNumber = parseInt(InputValue);
    const newNumber = previousNumber + 1;
    InputField.value = newNumber;
    return newNumber;
}
function getInputFieldMinus(elementId){
    const InputField = document.getElementById(elementId);
    const InputValue = InputField.value;
    const previousNumber = parseInt(InputValue);
    const newNumber = previousNumber - 1;
    InputField.value = newNumber;
    return newNumber;
}
function setTextElement(elementId,updatePrice){
    const phonePriceSet = document.getElementById(elementId);
    phonePriceSet.innerText = updatePrice;
}
function getTotalPriceElement(elementId){
    const totalPriceElement = document.getElementById(elementId);
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseInt(totalPriceString)
    return totalPrice;
}

// phone price plus
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneInput = getInputFieldPlus('phone-input-field');
    const phonePriceUpdate = phoneInput * 1219;
    setTextElement('phone-price',phonePriceUpdate);
    const totalPhonePrice = getTotalPriceElement('phone-price');
    const totalCasePrice = getTotalPriceElement('case-price');
    const totalPhoneCasePrice = totalPhonePrice + totalCasePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = totalPhoneCasePrice;
    const tax = (totalPhoneCasePrice /100) * 10;
    const taxConvert = parseFloat(tax.toFixed(2));
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxConvert;
    const total = totalPhoneCasePrice + taxConvert;
    const totalCost = document.getElementById('total');
    totalCost.innerText = total;
    
    
    
});
// phone price minus
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneInput = getInputFieldMinus('phone-input-field');
    const phonePriceUpdate = phoneInput * 1219;
    setTextElement('phone-price',phonePriceUpdate)
    const totalPhonePrice = getTotalPriceElement('phone-price');
    const totalCasePrice = getTotalPriceElement('case-price');
    const totalPhoneCasePrice = totalPhonePrice + totalCasePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = totalPhoneCasePrice;
    const tax = (totalPhoneCasePrice /100) * 10;
    const taxConvert = parseFloat(tax.toFixed(2));
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxConvert;
    const total = totalPhoneCasePrice + taxConvert;
    const totalCost = document.getElementById('total');
    totalCost.innerText = total;
    
});
// case price plus
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseInput = getInputFieldPlus('case-input-field');
    const casePriceUpdate = caseInput * 59;
    setTextElement('case-price',casePriceUpdate);
    const totalPhonePrice = getTotalPriceElement('phone-price');
    const totalCasePrice = getTotalPriceElement('case-price');
    const totalPhoneCasePrice = totalPhonePrice + totalCasePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = totalPhoneCasePrice;
    const tax = (totalPhoneCasePrice /100) * 10;
    const taxConvert = parseFloat(tax.toFixed(2));
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxConvert;
    const total = totalPhoneCasePrice + taxConvert;
    const totalCost = document.getElementById('total');
    totalCost.innerText = total;


})
//case price minus
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseInput = getInputFieldMinus('case-input-field');
    const casePriceUpdate = caseInput * 59;
    setTextElement('case-price',casePriceUpdate);
    const totalPhonePrice = getTotalPriceElement('phone-price');
    const totalCasePrice = getTotalPriceElement('case-price');
    const totalPhoneCasePrice = totalPhonePrice + totalCasePrice;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = totalPhoneCasePrice;
    const tax = (totalPhoneCasePrice /100) * 10;
    const taxConvert = parseFloat(tax.toFixed(2));
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxConvert;
    const total = totalPhoneCasePrice + taxConvert;
    const totalCost = document.getElementById('total');
    totalCost.innerText = total;
})
