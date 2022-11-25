//banking section

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = newDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

   depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //console.log(withdrawInputAmount);

    // update withdraw 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear the value
    withdrawInput.value = '';
})