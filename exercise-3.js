// Задача 3.
// Дефинирајте класа на банкарска сметка(BankAccount) со следните атрибути и методи:

// Атрибути: accountNumber, accountHolder, balance
// Методи: deposit(amount), withdraw(amount), getBalance()
// Спроведете валидација во методот на повлекување(withdraw) за да се осигурате дека износот за 
// повлекување не го надминува тековното салдо(balance).

// Креирајте два примероци од класата BankAccount и извршете некои трансакции (депозити и повлекувања).

class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) { // default balance is 0
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.error("Deposit amount must be positive!");
        }
    }
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
            } else {
                console.error("Withdrawal amount exceeds current balance.");
            }
        } else {
            console.error("Withdrawal amount must be positive.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// first instance of BankAccount
const acc1 = new BankAccount('999998', 'John', 500);
console.log(`Account Holder: ${acc1.accountHolder}, Balance: $${acc1.getBalance()}`);

// doing transactions // testing on first account
acc1.deposit(200);
acc1.withdraw(100);
acc1.withdraw(700);
console.log(`Final Balance for ${acc1.accountHolder}: $${acc1.getBalance()}`);