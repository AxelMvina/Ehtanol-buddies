// document.addEventListener("DOMContentLoaded", function () {
//     const openChatButton = document.getElementById("open-chat");
//     const chatModal = document.getElementById("chat-modal");
//     const closeChatButton = document.getElementById("close-chat");
//     const sendMessageButton = document.getElementById("send-message");
//     const userMessageInput = document.getElementById("user-message");
//     const chatMessages = document.getElementById("chat-messages");

//     openChatButton.addEventListener("click", function () {
//         chatModal.style.display = "block";
//     });

//     closeChatButton.addEventListener("click", function () {
//         chatModal.style.display = "none";
//     });

//     sendMessageButton.addEventListener("click", function () {
//         const messageText = userMessageInput.value;
//         if (messageText) {
//             const message = document.createElement("div");
//             message.className = "user-message";
//             message.textContent = messageText;
//             chatMessages.appendChild(message);
//             userMessageInput.value = "";
//         }
//     });
// });