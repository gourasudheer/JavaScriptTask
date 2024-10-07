class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
      console.log(accountNumber);
      console.log(balance);    
    }
    deposit(amount) {
      this.balance += amount;
      console.log(amount);
    }
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(amount);
      } 
      else 
      {
        console.log(amount);
        console.log('Insufficient balance');
      }
    }
    checkBalance() {
      console.log(this.balance);
    }
  }
  
  const account = new BankAccount('123456', 1500);
  account.withdraw(1);
  account.checkBalance();
