export class SalaryCalculatorModelV2{
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;
    educationCess : number = 10;

    calculate(){
        const gross = this.basic + this.hra + this.da,
            net = gross * ((100-(this.tax + this.educationCess))/100)
        this.salary = net;
    }
}