function updateProductNumber(product, price, isIncreasing) {
    // get case plus/minus and increase/decrease case number--------->
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // condition------------>
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update product price total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    // get how many product number input
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    // total price calculate
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update total price on html file
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}



// get product plus and increase case number--------->
document.getElementById('phone-plus').addEventListener('click', function () {
    // call update product number function----------->
    updateProductNumber('phone', 1219, true);
});

// get product minus and decrease case number--------->
document.getElementById('phone-minus').addEventListener('click', function () {
    // call update product number function----------->
    updateProductNumber('phone', 1219, false);
})

// get case plus and increase case number--------->
document.getElementById('case-plus').addEventListener('click', function () {

    // call update case number function----------->
    updateProductNumber('case', 59, true);
});

// get case minus and decrease case number----------->
document.getElementById('case-minus').addEventListener('click', function () {

    // call update case number function----------->
    updateProductNumber('case', 59, false);
});