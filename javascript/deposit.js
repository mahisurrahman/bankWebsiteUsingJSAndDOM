document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositeField = document.getElementById('diposit-field');
    const newDepositAmountString = depositeField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    const depositTotalElement = document.getElementById('diposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDepositAmount;

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount; 
    balanceTotalElement.innerText = currentBalanceTotal;

    depositeField.value='';
})