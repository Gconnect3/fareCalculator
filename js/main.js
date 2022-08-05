 document.querySelector(".money");
 document.querySelector(".fare");
let calculate = document.querySelector(".btn");
let answer = document.querySelector(".answer");

class Calculator{
    constructor(one, two, three){
        this._money = +(one.toFixed(2)) || 0;
        this._fare = +(two.toFixed(2)) || 2.75;
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

        this._ans.innerHTML = `Money on Card: <span>${this._money.toFixed(2)}</span>$ <br>`
         + `Ride Cost: <span>${this._fare.toFixed(2)}</span>$ <br>`
         + `To make it whole add: <span>${addMoney.toFixed(2)}</span>$ <br>`
         + `You will have: <span>${totalRides.toFixed()}</span> rides!<br>`
         + `To have ${(totalRides + 1).toFixed()} rides add: <span>${addMplusRide.toFixed(2)}</span>$`
    }

}



calculate.addEventListener("click", button =>{
    button.stopPropagation()
    let money = Number(document.querySelector(".money").value);
    let fare = Number(document.querySelector(".fare").value);
    let calculator = new Calculator(money, fare, answer);
    calculator.compute();
    document.querySelector(".money").value = ""
})