class CPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    getNewDigit(bodyCPF) {
        const initialValue = 2;
        let sum = 0, count = initialValue;
        bodyCPF.split('').reverse().map(number => {
            sum += number * count;
            count++;
        })

        if (sum % 11 < 2) return "0";
        else return (11 - sum % 11);
    }

    IsValid() {
        let bodyCPF = this.cpf.substr(0, 9);
        bodyCPF += this.getNewDigit(bodyCPF);
        bodyCPF += this.getNewDigit(bodyCPF);

        return bodyCPF === this.cpf;
    }
}

module.exports = CPF;