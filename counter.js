// Получаем элементы по ID
const counterElement = document.getElementById('counter');
const buttonUp = document.getElementById('counterUp');
const buttonDown = document.getElementById('counterDown');

// Начальное значение счетчика
let counterValue = 0;

// Функция для обновления отображаемого значения счетчика
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Обработчик для кнопки увеличения
buttonUp.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

buttonDown.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});
