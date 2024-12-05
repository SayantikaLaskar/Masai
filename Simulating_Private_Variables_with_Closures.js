function createBankAccount() {
  let balance = 0;
  const transactionHistory = [];

  return {
    deposit: (amount) => {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw: (amount) => {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance: () => {
      return balance;
    },
    getTransactionHistory: () => {
      return transactionHistory;
    }
  };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400); // Insufficient balance
console.log(account.getBalance()); // Output: 100
console.log(account.getTransactionHistory()); // Output: ["Deposited: 500", "Withdrawn: 200"]
