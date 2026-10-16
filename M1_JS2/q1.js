class BankAcountant{
    accountNumber=1234;
    accountHolder="anuja";
    balance=45000;

    constructor(accountNumber,accountHolder,balance){
        this.accountNumber=accountNumber;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    deposit(amount){
        if(amount<=0){
            console.log("Invalid");
        }
        console.log(this.accountNumber+""+this.accountHolder+""+this.balance);
        
    }
}
const account=new BankAcountant(1,"anuja",23000);
account.deposit(0);