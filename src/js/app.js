const DonutCountDisplay = document.getElementById("DonutCountBox");
const DonutMakerInput = document.getElementById("DonutMaker");
const HundredDonutInput = document.getElementById("HundredDonutMaker");
const AutoClickerCountDisplay = document.getElementById("AutoClickerCountBox");
const BuyAutoClickerInput = document.getElementById("BuyAutoClickerButton");
const AutoClickerPriceDisplay = document.getElementById("AutoClickerPriceBox");
const ClicksPerSecondDisplay = document.getElementById("ClicksPerSecondBox");
const MultiplierCountDisplay = document.getElementById("MultiplierCountBox");
const BuyMultiplierInput = document.getElementById("BuyMultiplierButton");
const MultiplierPriceDisplay = document.getElementById("MultiplierPriceBox");
const DonutsPerClickDisplay = document.getElementById("DonutsPerClickBox");


let donutshoppe = new DonutShoppe();

// console.log(donutshoppe.getDonutCount());

DonutCountDisplay.value = donutshoppe.getDonutCount();

DonutMakerInput.addEventListener("click", function(){
    donutshoppe.makeDonut();
    DonutCountDisplay.value = donutshoppe.getDonutCount();})

HundredDonutInput.addEventListener("click", function(){
    donutshoppe.makeHundredDonuts();
    DonutCountDisplay.value = donutshoppe.getDonutCount();})

AutoClickerCountDisplay.value = donutshoppe.getAutoClickerCount();

BuyAutoClickerInput.addEventListener("click", function(){
    donutshoppe.buyAutoClicker();
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    AutoClickerCountDisplay.value = donutshoppe.getAutoClickerCount();
    AutoClickerPriceDisplay.value = donutshoppe.getAutoClickerPrice();
    ClicksPerSecondDisplay.value = donutshoppe.getAutoClicksPerSecond();
    let r = donutshoppe.getAutoClicksPerSecond();
    let s = 1000/r;
    setInterval(makeAutoClickDonut, s); 
    
    function makeAutoClickDonut() {
        donutshoppe.makeDonut();
        DonutCountDisplay.value = donutshoppe.getDonutCount();
    }
})


AutoClickerPriceDisplay.value = donutshoppe.getAutoClickerPrice();

ClicksPerSecondDisplay.value = donutshoppe.getAutoClicksPerSecond();

MultiplierCountDisplay.value = donutshoppe.getMultiplierCount();



MultiplierPriceDisplay.value = donutshoppe.getMultiplierPrice();



DonutsPerClickDisplay.value = donutshoppe.getDonutsPerClick();

