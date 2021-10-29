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

BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();

DonutMakerInput.addEventListener("click", function(){
    donutshoppe.makeDonut();
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    donutshoppe.updatePurchaseButtons();
    BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
    BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();
})

HundredDonutInput.addEventListener("click", function(){
    donutshoppe.makeHundredDonuts();
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    donutshoppe.updatePurchaseButtons();
    BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
    BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();})

AutoClickerCountDisplay.value = donutshoppe.getAutoClickerCount();


BuyAutoClickerInput.addEventListener("click", function(){
    function StopAutoClicker() {
        clearInterval(a);
    }
    donutshoppe.buyAutoClicker();
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    AutoClickerCountDisplay.value = donutshoppe.getAutoClickerCount();
    AutoClickerPriceDisplay.value = donutshoppe.getAutoClickerPrice();
    ClicksPerSecondDisplay.value = donutshoppe.getAutoClicksPerSecond();
    donutshoppe.updatePurchaseButtons();
    BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
    BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();
    let r = donutshoppe.getAutoClicksPerSecond();
    let s = 1000/r;
    var a = setInterval(makeAutoClickDonut, s); 
        function makeAutoClickDonut() {
        donutshoppe.makeDonut();
        DonutCountDisplay.value = donutshoppe.getDonutCount();
        donutshoppe.updatePurchaseButtons();
        BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
        BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();
    }
})


AutoClickerPriceDisplay.value = donutshoppe.getAutoClickerPrice();

ClicksPerSecondDisplay.value = donutshoppe.getAutoClicksPerSecond();

MultiplierCountDisplay.value = donutshoppe.getMultiplierCount();

BuyMultiplierInput.addEventListener("click", function(){
    donutshoppe.buyMultiplier();
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    MultiplierCountDisplay.value = donutshoppe.getMultiplierCount();
    MultiplierPriceDisplay.value = donutshoppe.getMultiplierPrice();
    DonutsPerClickDisplay.value = donutshoppe.getDonutsPerClick();
    donutshoppe.updatePurchaseButtons();
    BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
    BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();
})

MultiplierPriceDisplay.value = donutshoppe.getMultiplierPrice();

DonutsPerClickDisplay.value = donutshoppe.getDonutsPerClick();

