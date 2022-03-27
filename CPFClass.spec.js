const CPF = require('./CPFClass');

describe("Testing CPF class", () => {
    it("Testing CPF verification", () => {
        const cpf = new CPF('12448919674');
        expect(cpf.IsValid()).toBe(true);
    })
})