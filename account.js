const moment = require("moment");

class Account {
    //state
    #amount;
    #account_id
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount; // 오타 수정: this.#ammount -> this.#amount
        this.#account_id = account_id;
    }
    
    tellMeBalance () {
        console.log(`Your balance:, ${this.#amount}$`);
        return this.#amount;
    }

    withdrawMoney ( amount ) {
        if (this.#amount > amount) {
            this.#amount -= amount; 
            console.log (`In your Balance ${amount} withdrawen  and your balance ${this.#amount}$` );
        }
        else { 
            console.log (`Your balance is insufficient: ${this.#amount} `);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount; 
        console.log(`Your balance has been deposited, and your balance is ${this.#amount}$`);
    }

    giveMeDetails () {
        console.log(`Hi dear ${this.name}, your balance  ${this.#amount}$`);
        console.log(`Your account_id: ${this.#account_id}`);
    }

    static tellMeAboutClass () {
        console.log(`This class is for creating accounts.`);
    }

    static tellMeAboutTime () {
        console.log(`Time: ${moment().format('YYYY MM DD HH:mm:ss')}`);
    }
}

module.exports = Account;
