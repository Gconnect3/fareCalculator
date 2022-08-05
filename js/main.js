let mon = () => document.querySelector(".money").value;
let far  = () => Number(document.querySelector(".fare").value);
let calculate = document.querySelector(".btn");
let answer = document.querySelector(".answer");

class Calculator{
    constructor(one, two, three){
        this._money = one || 0;
        this._fare = two || 2.75;
        this._ans = three;
    }
    
    clear(){
        this._ans.textContent = "";
    }

    compute(){
        let money = this._money * 100;
        let fare  = this._fare * 100;
        let diff = 0
        if (isNaN(this._money) || isNaN(this._fare)) return;
        
        for (let indx = money; indx < money + 10000; indx++) {
            if(indx % fare === 0){break;}
            diff = indx - money + 1;
        };

        let addMoney = diff / 100;
        let totalRides = (this._money + addMoney) / this._fare;
        let addMplusRide = addMoney + this._fare;

        this._ans.innerText = `Money on Card: ${this._money.toFixed(2)} \n
        Ride Cost: ${this._fare.toFixed(2)} \n
        To make it whole: ${addMoney.toFixed(2)} \n
        Your number of rides will be: ${totalRides} \n
        \n To have ${totalRides + 1} rides add: ${addMplusRide.toFixed(2)}`
    }

}



calculate.addEventListener("click", button =>{
    let money = Number(document.querySelector(".money").value);
    let fare = Number(document.querySelector(".fare").value);
    let calculator = new Calculator(money, fare, answer);
    calculator.clear();
    calculator.compute();
})