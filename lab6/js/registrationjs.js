const div = document.getElementById("users");
const users = document.createElement("tbody")
div.appendChild(users)
let n = 1

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну подію відправки форми

    let isValid = true;

    // Очищаємо попередні повідомлення про помилки
    let errorMessages = document.querySelectorAll('.invalid-feedback');
    errorMessages.forEach(function (error) {
        error.style.display = 'none';
    });

    // Валідація полів
    let firstName = document.querySelector('#firstName');
    if (firstName.value.trim() === '') {
        let errorMessage = firstName.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let lastName = document.querySelector('#lastName');
    if (lastName.value.trim() === '') {
        let errorMessage = lastName.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let father = document.querySelector('#father');
    if (father.value.trim() === '') {
        let errorMessage = father.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let genderRadios = document.querySelectorAll('input[name="gender"]');
    let isGenderSelected = false;
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            isGenderSelected = true;
            break;
        }
    }

    if (!isGenderSelected) {
        let genderErrorMessage = document.querySelector('.invalid-feedback[for="last-radio"]');
        genderErrorMessage.style.display = 'block';
        isValid = false;
    }

    let email = document.querySelector('#email');
    let emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailPattern.test(email.value)) {
        let errorMessage = email.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let phone = document.querySelector('#phone');
    let phonePattern = /^\+38\(0[0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    if (!phonePattern.test(phone.value)) {
        let errorMessage = phone.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let password = document.querySelector('#password');
    if (password.value.trim() === '') {
        let errorMessage = password.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let birthday = document.querySelector('#birthday');
    if (birthday.value.trim() === '') {
        let errorMessage = birthday.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let selectedGroup = document.querySelector('.form-select');
    if (selectedGroup.value === '1') {
        let errorMessage = selectedGroup.nextElementSibling;
        errorMessage.style.display = 'block';
        isValid = false;
    }

    let file = document.querySelector('#file');
    // if (file.files.length === 0) {
    //   let errorMessage = file.nextElementSibling;
    //   errorMessage.style.display = 'block';
    //   isValid = false;
    // }

    if (isValid) {
        let user = document.createElement("tr")
        user.id = n
        let number = document.createElement("td")
        number.textContent = n++
        user.appendChild(number)
        let name = document.createElement("td")
        name.textContent = firstName.value.trim()
        user.appendChild(name)
        let last_name = document.createElement("td")
        last_name.textContent = lastName.value.trim()
        user.appendChild(last_name)
        let fatherV = document.createElement("td")
        fatherV.textContent = father.value.trim()
        user.appendChild(fatherV)
        let group = document.createElement("td")
        group.textContent = selectedGroup.value
        user.appendChild(group)
        users.appendChild(user)

        let check = document.createElement("td")
        let value = document.createElement("input")
        value.type = "checkbox"

        check.appendChild(value)
        user.appendChild(check)




        firstName.value = ''
        lastName.value = ''
        father.value = ''

        genderRadios.forEach(function (n) {
            if (n.checked) {
                n.checked = false
            }
        })
        email.value = ''
        phone.value = ''
        password.value = ''
        birthday.value = ''
        selectedGroup.value = '1'
        file.value = ""



        // // Всі поля валідні, ви можете відправити дані на сервер або виконати інші дії
        // alert('Форма валідна. Дані готові до відправлення.');
    }
});

let genderRadios = document.querySelectorAll('input[name="gender"]');
genderRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
        let errorMessage = document.querySelector('.invalid-feedback[for="last-radio"]');
        errorMessage.style.display = 'none';
    });
});

// Відключення повідомлень про помилки при введенні
let formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        let errorMessage = input.nextElementSibling;
        errorMessage.style.display = 'none';
    });
});
function del() {
    let checkboxs = users.querySelectorAll("input[type='checkbox']")
    checkboxs.forEach(function (checkbox) {
        if (checkbox.checked){
            checkbox.closest("tr").remove()
        }
    })
}
function repeat() {
    let checkboxs = users.querySelectorAll("input[type='checkbox']")
    checkboxs.forEach(function (checkbox) {
        if (checkbox.checked){
            user = checkbox.closest("tr")
            checkbox1 = user.querySelector("input[type='checkbox']")
            checkbox1.checked = false
            users.appendChild(user.cloneNode(true))
        }
    })
}

