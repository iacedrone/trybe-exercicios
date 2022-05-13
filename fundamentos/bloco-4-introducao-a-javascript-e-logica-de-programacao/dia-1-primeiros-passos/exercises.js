const salary = 3000;
let inss = 0
let ir = 0
let parcela = 0

if (salary <= 1556.94){
    inss = salary / 100 * 8
} else if (salary >= 1556.95 && salary <= 2594.92) {
    inss = salary / 100 * 9
} else if (salary >= 2594.93 && salary <= 5189.82) {
    inss = salary / 100 * 11
} else {
    inss = 570.88
}

let newSalary = salary - inss

if (newSalary <= 1903.98) {
    ir = 0
    parcela = 0
} else if (newSalary >= 1903.99 && newSalary <= 2826.65) {
    ir = newSalary / 100 * 7.5
    parcela = 142.80
} else if (newSalary >= 2826.66 && newSalary <= 3751.05) {
    ir = newSalary / 100 * 15
    parcela = 354.80
} else if (newSalary >= 3751.06 && newSalary <= 4664.68) {
    ir = newSalary / 100 * 22
    parcela = 636.13
} else {
    ir = newSalary / 100 * 27.5
    parcela = 869.36
}

let salaryLiquid = newSalary - (newSalary - (newSalary - (newSalary / 100 * 7.5 - parcela)))
console.log(salaryLiquid)
