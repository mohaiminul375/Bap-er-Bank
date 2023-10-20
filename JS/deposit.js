// Step 1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //Step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(depositAmount)

//Step 3: get the current  deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    // depositTotalElement.innerText = depositAmount; (the line was working)
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    
    //Step 4: add numbers to the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount ;
    
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    
    //Step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //Step 6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount ;
//Set the balance total
         balanceTotalElement.innerText = currentBalanceTotal

    //Step 7: clear the deposit filed
    depositField.value = '';
})