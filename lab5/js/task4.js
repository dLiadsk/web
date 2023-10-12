const dateform = document.getElementById("date");



function birthday(date){

    let date_birthday = new Date(date);
    const a = Math.floor((14 - date_birthday.getMonth()) / 12);
    const y = date_birthday.getFullYear() - a;
    const m = date_birthday.getMonth() + 1 + 12 * a - 2;
    let result = (date_birthday.getDate() + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    if (result === 0) result = "Неділя";
    if (result === 1) result = "Понеділок";
    if (result === 2) result = "Вівторок";
    if (result === 3) result = "Середа";
    if (result === 4) result = "Четвер";
    if (result === 5) result = "П'ятниця";
    if (result === 6) result = "Субота";


    document.getElementById("result").textContent = result;
    document.getElementById("date-birthday").textContent = date_birthday;
}

dateform.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(dateform);
    const date = new Date(formData.get("date-input"));
    birthday(date);
});