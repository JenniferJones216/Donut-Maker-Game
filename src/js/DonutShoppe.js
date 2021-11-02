class DonutShoppe {
    constructor(){
        this.DonutCount = 0;
        this.AutoClickerCount = 0;
        this.AutoClickerPrice = 100;
        this.AutoClicksPerSecond = 0;
        this.MultiplierCount = 0;
        this.DonutsPerClick = 1;
        this.MultiplierPrice = 100;
        this.MultiplierButtonDisabled = true;
        this.AutoClickerButtonDisabled = true;
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

    sellAutoClicker(){
        this.AutoClickerCount -= 1;
        this.DonutCount += this.AutoClickerPrice;
        this.AutoClicksPerSecond -= 1;
        this.AutoClickerPrice *= .9; 
    }

    buyMultiplier(){
        this.MultiplierCount += 1;
        this.DonutCount -= this.MultiplierPrice;
        this.DonutsPerClick = Math.pow(1.2, this.MultiplierCount);
        this.MultiplierPrice *= 1.1; 
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

    updatePurchaseButtons(){
        if (this.AutoClickerPrice<=this.DonutCount)
        {
            this.AutoClickerButtonDisabled = false;
        }
        else
        {
            this.AutoClickerButtonDisabled = true;
        }
        if (this.MultiplierPrice<=this.DonutCount)
        {
            this.MultiplierButtonDisabled = false;
        }
        else
        {
            this.MultiplierButtonDisabled = true;
        }
    }

    getAutoClickerButtonStatus(){
        return this.AutoClickerButtonDisabled;
    }

    getMultiplierButtonStatus(){
        return this.MultiplierButtonDisabled;
    }

    Reset(){
        this.DonutCount = 0;
        this.AutoClickerCount = 0;
        this.AutoClickerPrice = 100;
        this.AutoClicksPerSecond = 0;
        this.MultiplierCount = 0;
        this.DonutsPerClick = 1;
        this.MultiplierPrice = 100;
        this.MultiplierButtonDisabled = true;
        this.AutoClickerButtonDisabled = true;
    }

    resetDonutCount(){
        this.DonutCount = 0;
    }
}
