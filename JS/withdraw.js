document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  withdrawField.value = "";
  if (isNaN(newWithdrawAmount)) {
    alert("Please input a valid amount");
    return;
  }
  // console.log(newWithdrawAmount)

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const perviousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  const balanceTotalElement = document.getElementById("balance-total");
  const perviousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(perviousBalanceTotalString);
  withdrawField.value = "";
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Insufficient Balance");
    return;
  }
  const currentWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
