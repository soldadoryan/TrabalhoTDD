class BankAccount {
    constructor(customerName, balance) {
        this.m_customerName = customerName;
        this.m_balance = balance;
    }

    get CustomerName() {
        return this.m_customerName;
    }

    get Balance() {
        return this.m_balance;
    }

    Debit(amount) {
        if (amount > this.m_balance)
            throw new RangeError("Amount must be greater than balance!")

        if (amount < 0)
            throw new RangeError("Amount must be greater than zero!");

        this.m_balance -= amount;
    }

    Credit(amount) {
        if (amount < 0)
            throw new RangeError("Amount must be greater than zero!");

        this.m_balance += amount;
    }
}

module.exports = BankAccount;