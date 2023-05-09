class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    private getTestBalance():number {
        return this._balance;
    }
    test():number {
        return this.getTestBalance();
         
     }
  //getter
    
    get balance(): number {
        return this._balance;
        
    }
  //setter
    
    set deposit(amount:number){
        this._balance = this._balance + amount;
    }
    getBalance():number {
        // console.log(`My current balance is ${this._balance}`);
        return this._balance;
    }

    // getDeposit(amount: number) {

    //     this._balance= this._balance+amount
    //     console.log('')
    // }
}

class StudentAccount extends BankAccount{
    test(){
      this.test()
  }
// }

const myAccount = new BankAccount(444, 'Rahat', 78000);
// myAccount.getBalance();

console.log(myAccount.balance);