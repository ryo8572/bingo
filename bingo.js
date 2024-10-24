let drawnNumbers = [];

document.getElementById("drawButton").addEventListener("click", drawNumber);

function drawNumber() {
    if (drawnNumbers.length >= 75) {
        alert("すべての番号が出ました！");
        return;
    }

    let number;
    do {
        number = Math.floor(Math.random() * 75) + 1;
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    displayCurrentNumber(number);
    updateHistory();
}

function displayCurrentNumber(number) {
    const currentNumberElement = document.getElementById("currentNumber");
    currentNumberElement.textContent = number;
}

function updateHistory() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";

    drawnNumbers.forEach(num => {
        const numberDiv = document.createElement("div");
        numberDiv.textContent = num;
        numberDiv.classList.add("history-number");
        historyDiv.appendChild(numberDiv);
    });
}
