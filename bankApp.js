let balance = 10000;

function bankApp() {
    let action;
    do {
        action = prompt("Enter an action: \nQ to quit \nW to withdraw \nD to deposit \nB to view balance");
        switch(action.toUpperCase()) {
            case 'Q':
                alert("Thank you for using Tree Branch Bank. Goodbye!");
                break;
            
            case 'W':
                withdraw();
                break;

            case 'D':
                deposit();
                break;

            case 'B':
                viewBalance();
                break;

            default:
                alert("Invalid input. Please enter Q, W, D, or B.");
                break;
        }
    } while(action.toUpperCase() !== 'Q');
}

function withdraw() {
    let amount = prompt("How much do you want to withdraw?");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive amount.");
    } else if (amount > balance) {
        alert("Insufficient funds. Your current balance is $" + balance.toFixed(2));
    } else {
        balance -= amount;
        alert("You have successfully withdrawn $" + amount.toFixed(2) + ". Your new balance is $" + balance.toFixed(2));
    }
}

function deposit() {
    let amount = prompt("How mych do you want to deposit?");
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive amount.");
    } else {
        balance += amount;
        alert("You have successfully deposited $" + amount.toFixed(2) + ". Your new balance is $" + balance.toFixed(2));
    }
}

function viewBalance() {
    alert("Your current balance is $" + balance.toFixed(2));
}

bankApp();
