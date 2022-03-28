const BankAccount = require('./AccountClass');

describe("Testing Account Bank", () => {
    it("Testing debit method", () => {
        const beginningBalance = 11.99;
        const debitAmount = 4.55;
        const expected = 7.44;
        const account = new BankAccount("Ryan Drumond", beginningBalance);
        account.Debit(debitAmount);

        expect(account.Balance).toBe(expected);
    });

    it("Testing credit method", () => {
        const beginningBalance = 11.99;
        const creditAmount = 4.55;
        const expected = 16.54;
        const account = new BankAccount("Ryan Drumond", beginningBalance);
        account.Credit(creditAmount);

        expect(account.Balance).toBe(expected);
    });
})