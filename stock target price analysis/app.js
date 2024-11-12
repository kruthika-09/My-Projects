"use strict";
const lotSize = document.querySelector(".lotsize");
const amount = document.querySelector(".amount");
const stoploss = document.querySelector(".stoploss");
const riskReward = document.querySelector(".dropdown");
const calculate = document.querySelector(".calculate");
const input = document.querySelector(".input");
const close = document.querySelector(".close");
//event
calculate.addEventListener("click", function () {
  if (amount.value - stoploss.value < 0)
    alert("StopLoss should be less than the amount");
  else if (input.value <= 0) alert("enter positive number");
  else {
    //show container
    document.querySelector(".outputContainer").classList.remove("hidden");
    //show spinner
    document.querySelector(".spinner-border").classList.remove("hidden");
    setTimeout(() => {
      // Hide spinner
      document.querySelector(".spinner-border").classList.add("hidden");
      //show close button
      document.querySelector(".close").classList.remove("hidden");
      // Show content
      document.querySelector(".output-content").classList.remove("hidden");
      //calculations
      const riskPerLot = amount.value - stoploss.value;
      const targetProfitPerLot = riskPerLot * riskReward.value.split(":")[1];
      const targetPrice = parseInt(amount.value) + targetProfitPerLot;
      const totalprofit = targetProfitPerLot * lotSize.value;
      const moneyAfterProfit =
        parseInt(totalprofit.toFixed(2)) +
        parseInt(amount.value) * parseInt(lotSize.value);
      const lossIfSLHit = parseInt(riskPerLot) * parseInt(lotSize.value);
      const capital = lotSize.value * amount.value;
      //output printing
      document.querySelector(
        ".capitalAmount"
      ).textContent = `Capital Amount : ${lotSize.value * amount.value}`;
      document.querySelector(
        ".targetPrice"
      ).textContent = `Target Price : ${targetPrice}`;
      // if profit
      document.querySelector(
        ".totalProfit"
      ).textContent = `Profit : ${totalprofit}`;
      document.querySelector(
        ".moneyAfterProfit"
      ).textContent = `Total Money after Profit : ${moneyAfterProfit}`;
      //if loss
      document.querySelector(".maxLoss").textContent = `Loss : ${lossIfSLHit}`;
      document.querySelector(
        ".moneyAfterLoss"
      ).textContent = `Total Money Ater Loss : ${capital - lossIfSLHit}`;
    }, 2000);
  }
});
close.addEventListener("click", () =>
  document.querySelector(".outputContainer").classList.add("hidden")
);
