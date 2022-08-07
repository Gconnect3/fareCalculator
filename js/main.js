document.querySelector(".money");
document.querySelector(".fare");
let calculate = document.querySelector(".btn");
let answer = document.querySelector(".answer");

class Calculator{
    constructor(moneyOnCard, fareRate, displayAnswer){
        this._money = +(moneyOnCard.toFixed(2)) || 0;
        this._fare = +(fareRate.toFixed(2)) || 2.75;
        this._ans = displayAnswer;
    }

    get moneyOnCard(){
        return this._money
    }
    get fareRate(){
        return this._fare
    }
    get displayAnswer(){
        return this._ans
    }

    compute(){
        if (isNaN(this._money) || isNaN(this._fare) || this._money < 0 || this._fare < 0) return;
        let money = this._money * 100;
        let fare  = this._fare * 100;
        let diff = 0
        
        for (let indx = money; indx < money + 10000; indx++) {
            if(indx % fare === 0){diff = indx - money; break;}
        };

        let addMoney = diff / 100;
        let totalRides = (this._money + addMoney) / this._fare;
        let addMplusRide = addMoney + this._fare;

        this._ans.innerHTML = `Money on Card: <span>${this._money.toFixed(2)}</span>$ <br>`
         + `Ride Cost: <span>${this._fare.toFixed(2)}</span>$ <br>`
         + `To make it whole add: <span>${addMoney.toFixed(2)}</span>$ <br>`
         + `You will have: <span>${totalRides.toFixed()}</span> rides!<br>`
         + `To have <span>${(totalRides + 1).toFixed()}</span> rides add: <span>${addMplusRide.toFixed(2)}</span>$`
    }

}



calculate.addEventListener("click", button =>{
    button.stopPropagation()

    // get the values from the input
    let money = Number(document.querySelector(".money").value);
    let fare = Number(document.querySelector(".fare").value);

    //create an instance of Calculator class with our input values
    let calculator = new Calculator(money, fare, answer);

    //use the method to compute the data
    calculator.compute();

    //clear money input value
    document.querySelector(".money").value = ""
})