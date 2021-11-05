const DonutCountDisplay = document.getElementById("DonutCountBox");
const DonutMakerInput = document.getElementById("DonutMaker");
const HundredDonutInput = document.getElementById("HundredDonutMaker");
const AutoClickerCountDisplay = document.getElementById("AutoClickerCountBox");
const BuyAutoClickerInput = document.getElementById("BuyAutoClickerButton");
const SellAutoClickerInput = document.getElementById("SellAutoClickerButton");
const AutoClickerPriceDisplay = document.getElementById("AutoClickerPriceBox");
const ClicksPerSecondDisplay = document.getElementById("ClicksPerSecondBox");
const MultiplierCountDisplay = document.getElementById("MultiplierCountBox");
const BuyMultiplierInput = document.getElementById("BuyMultiplierButton");
const MultiplierPriceDisplay = document.getElementById("MultiplierPriceBox");
const DonutsPerClickDisplay = document.getElementById("DonutsPerClickBox");
const ResetInput = document.getElementById("ResetButton");


let donutshoppe = new DonutShoppe();
// let particle = new Particle();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function companyDropFunction() {
    document.getElementById("companyDropdown").classList.toggle("show");
      }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function inspirationDropFunction() {
    document.getElementById("inspirationDropdown").classList.toggle("show");
    // document.getElementById("developerDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function developerDropFunction() {
    document.getElementById("developerDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function updateDisplay(){
    DonutCountDisplay.value = donutshoppe.getDonutCount();
    donutshoppe.updatePurchaseButtons();
    AutoClickerCountDisplay.value = donutshoppe.getAutoClickerCount();
    BuyAutoClickerInput.disabled = donutshoppe.getAutoClickerButtonStatus();
    AutoClickerPriceDisplay.value = donutshoppe.getAutoClickerPrice();
    ClicksPerSecondDisplay.value = donutshoppe.getAutoClicksPerSecond();
    MultiplierCountDisplay.value = donutshoppe.getMultiplierCount();
    BuyMultiplierInput.disabled = donutshoppe.getMultiplierButtonStatus();
    MultiplierPriceDisplay.value = donutshoppe.getMultiplierPrice();
    DonutsPerClickDisplay.value = donutshoppe.getDonutsPerClick();
}

updateDisplay();

DonutMakerInput.addEventListener("click", function(){
    donutshoppe.makeDonut();
    // spawnSpinningDonut();
    updateDisplay();
})

HundredDonutInput.addEventListener("click", function(){
    donutshoppe.makeHundredDonuts();
    updateDisplay();
})

BuyAutoClickerInput.addEventListener("click", function() {
    donutshoppe.buyAutoClicker();
    let r = donutshoppe.getAutoClicksPerSecond();
    let s = 1000/r;
    var a = setInterval(makeAutoClickDonut, s); 
    function makeAutoClickDonut() {
        donutshoppe.makeDonut();
        updateDisplay();
        let r = donutshoppe.getAutoClicksPerSecond(); 
        let s = 1000/r;  
        if (r === 0){
            StopAutoClicker();
            donutshoppe.resetDonutCount();
            updateDisplay();
            }
    } 
    function StopAutoClicker() {
        clearInterval(a);
    }  
})

// SellAutoClickerInput.addEventListener("click", function() {
//     donutshoppe.sellAutoClicker();
//     let r = donutshoppe.getAutoClicksPerSecond();
//     let s = 1000/r;
// })

BuyMultiplierInput.addEventListener("click", function(){
    donutshoppe.buyMultiplier();
    updateDisplay();
})

ResetInput.addEventListener("click", function(){
    donutshoppe.Reset();
    updateDisplay();
})
