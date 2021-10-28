class DonutShoppe {
    constructor(){
        this.DonutCount = 0;
        this.AutoClickerCount = 0;
        this.AutoClickerPrice = 100;
        this.AutoClicksPerSecond = 0;
        this.MultiplierCount = 0;
        this.DonutsPerClick = 1;
        this.MultiplierPrice = 100
    }

    makeDonut(){
        this.DonutCount++;
    }




    getDonutCount(){
        return this.DonutCount;
    }
}