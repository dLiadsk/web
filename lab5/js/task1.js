   // Функція для обчислення периметру, площі та довжини діагоналі
    function calculateRectangle() {
        // Отримуємо значення довжини та ширини з текстових полів
        var lengthValue = document.getElementById("length").value.trim();
        var widthValue = document.getElementById("width").value.trim();

        // Перевіряємо, чи поля не порожні
        if (lengthValue === "" || widthValue === "") {
            return;
        }

        // Перевіряємо, чи введені значення є числами
        if (!isNumeric(lengthValue) || !isNumeric(widthValue)) {
            alert("Будь ласка, введіть числові значення для довжини та ширини.");
            return;
        }

        var length = parseFloat(lengthValue);
        var width = parseFloat(widthValue);

        // Перевіряємо на валідацію введені значення
        if (length <= 0 || width <= 0) {
            alert("Будь ласка, введіть коректні значення для довжини та ширини.");
            return;
        }

        // Обчислюємо периметр, площу та довжину діагоналі
        var perimeter = 2 * (length + width);
        var area = length * width;
        var diagonalLength = Math.sqrt(length ** 2 + width ** 2);

        // Виводимо результати на сторінку
        document.getElementById("perimeter").textContent = perimeter;
        document.getElementById("area").textContent = area;
        document.getElementById("diagonalLength").textContent = diagonalLength;
    }

    // Функція для перевірки, чи введене значення є числом
    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    // Викликаємо функцію обчислення при зміні значень в текстових полях
    document.getElementById("length").addEventListener("input", calculateRectangle);
    document.getElementById("width").addEventListener("input", calculateRectangle);
  