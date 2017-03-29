declare var $: {
    (selector:string):any;
};

class bankCount {
    m_per: number;
    k_annuitet: number;
    percent: number;
    monthes: number;
    credit_amount: number;
    m_pay: number;
    options: Object;
    over_pay: number;


    constructor(options) {
        this.options = options || {};
        this.percent = options.percent;
        this.monthes = options.monthes;
        this.credit_amount = options.credit_amount;
        this.m_per = Math.pow((1+this.percent/100), 1/this.percent) - 1;
        this.k_annuitet = (this.m_per * Math.pow((1 + this.m_per), this.monthes)) / (Math.pow((1 + this.m_per), this.monthes) - 1);
        this.m_pay = this.k_annuitet * this.credit_amount;
        this.over_pay = this.m_pay * this.monthes - this.credit_amount;
    }

    showResults() {
        $('.m_per > span').text((this.m_per*100).toFixed(2) + ' %');
        $('.m_pay > span').text(this.m_pay.toFixed() + ' рублей');
        $('.over_pay > span').text(this.over_pay.toFixed() + ' рублей');
    }
}

// var count = new bankCount(12, 60, 1000);
// count.ownFunc();


//
// interface Car {
//     make: string;
//     model: string;
//     year: number;
// }
//
// interface Person {
//     firstName : string;
//     lastName: string;
//     fullName: string;
// }
//
// function greeter(person: Person):string {
//     return 'Hello, ' + person.fullName;
// }

// var user = new Student('Nikita', 'M.', 'Smith');

// $('body').innerHTML = greeter(user);

