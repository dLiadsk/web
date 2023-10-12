const messagesContainer = document.getElementById("messages");
const user1Input = document.getElementById("user1-input");
const user2Input = document.getElementById("user2-input");

function sendMessage(user) {
    let messageText;
    if (user === 'user1') {
        messageText = user1Input.value;
    } else {
        messageText = user2Input.value;
    }

    if (messageText.trim() === "") {
        return;
    }

    const message = document.createElement("div");
    message.className = "message";

    if (user === 'user1') {
        message.classList.add("text-right");
    } else {
        message.classList.add("text-left");
    }

    const userName = document.createElement("div");
    userName.className = 'user-name';
    if (user === 'user1') {
        userName.textContent = 'USER1:';
    } else {
        userName.textContent = 'USER2:';
    }
    message.appendChild(userName);

    const messageContent = document.createElement("div");
    messageContent.className = 'message-content';
    messageContent.textContent = messageText;
    message.appendChild(messageContent);

    messagesContainer.appendChild(message);


    // Очистити поле введення відповідного користувача
    if (user === 'user1') {
        user1Input.value = "";
    } else {
        user2Input.value = "";
    }
}