class BankAccount {
    constructor(type,money , backupAccount=null){
        this.type = type;
        this.money=money;
        this.transactionHistory = [];
        this.backupAccount= this.backupAccount;

    }

     withdraw(amount){
        const previousBalance = this.money;
        this.money= this.money- amount;
         //balance right before decduction
         //amount of deduction
         //new balance (including deduction)
         this.transactionHistory.push({
            previousBalance: previousBalance,
            transactionType: 'withdrawl' ,
            transactionAmount: amount,
            endingBalance: this.money
         })
         // when balance is below 0 
         //withdraw from backup
         if(this.money< 0){
            const overdrawnAmount= this.money *-1;
            // withdraw from backup
            this.backupAccount.withdraw(overdrawnAmount)
             // deposit to account 
             this.deposit(overdrawnAmount);
             console.log('overDrawnAmount');
         }

     }
     deposit(depo){
        const previousBalance = this.money;
        this.money = this.money + depo;
        this.transactionHistory.push({
            previousBalance: previousBalance,
            transactionType: 'deposit' ,
            transactionAmount: depo,
            endingBalance: this.money
         })
          
     }
     showBalance(){
         return this.money;
     }


}

const savingsAccount = new BankAccount('savings', 1000);
const checkingAccount = new BankAccount('checking', 1000);
console.log(savingsAccount);
console.log(checkingAccount);
checkingAccount.withdraw(10);
console.log(checkingAccount);
checkingAccount.deposit(10);
console.log(checkingAccount);

