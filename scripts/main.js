var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(
            `Oops, the loss is ${loss} and the loss percentage is ${lossPercentage}%`, "loss"
        );
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(
            `Woahhhhh!, the profit is ${profit} and the profit percentage is ${profitPercentage}%`, "profit"
        );
    } else {
        showOutput(`No profit no loss, boss!`);
    }
}

function showOutput(message, style) {
    if (style == "profit") {
        outputBox.style.border = "2px dotted green";
        outputBox.style.color = "green";
    } else if (style == "loss") {
        outputBox.style.border = "2px dotted red";
        outputBox.style.color = "red";
    } else {
        outputBox.style.border = "2px dotted red";
        outputBox.style.color = "green";
    }
    outputBox.innerHTML = message;
}