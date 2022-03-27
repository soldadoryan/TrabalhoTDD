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
})