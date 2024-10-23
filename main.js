let counter = 1;

const counterValue = document.getElementById('counterValue');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const colorInput = document.getElementById('colorInput');

function updateCounter() {
    counterValue.textContent = counter;
}

increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }
    updateCounter();
});

colorInput.addEventListener('input', (event) => {
    counterValue.style.color = event.target.value;
});

document.getElementById('sendButton').addEventListener('click', () => {
    const inputValue = document.getElementById('inputNumber').value;
    if (inputValue !== '') {
        counter = parseInt(inputValue);
        updateCounter();
    }
});
