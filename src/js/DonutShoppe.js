class DonutShoppe {
    constructor(){
        this.DonutCount = 0;
        this.AutoClickerCount = 0;
        this.AutoClickerPrice = 100;
        this.AutoClicksPerSecond = 0;
        this.MultiplierCount = 0;
        this.DonutsPerClick = 1;
        this.MultiplierPrice = 100;
    }

    makeDonut(){
        this.DonutCount += this.DonutsPerClick;
    }

    makeHundredDonuts(){
        this.DonutCount += 100;
    }

    getDonutCount(){
        return Math.round(this.DonutCount);
    }

    buyAutoClicker(){
        this.AutoClickerCount += 1;
        this.DonutCount -= this.AutoClickerPrice;
        this.AutoClicksPerSecond += 1;
        this.AutoClickerPrice *= 1.1; 
    }

       buyMultiplier(){
        this.MultiplierCount += 1;
    }

    getAutoClickerCount(){
        return this.AutoClickerCount;
    }

    getMultiplierCount(){
        return this.MultiplierCount;
    }

    getAutoClickerPrice(){
        return Math.round(this.AutoClickerPrice);
    }

    getMultiplierPrice(){
        return Math.round(this.MultiplierPrice);
    }

    getAutoClicksPerSecond(){
        return this.AutoClicksPerSecond;
    }

    getDonutsPerClick(){
        return this.DonutsPerClick;
    }
}
