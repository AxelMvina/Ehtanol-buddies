// script.js
document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close');
    const friendList = document.getElementById('friendList');

    const chatModal = document.getElementById('chatModal');
    const closeChatButton = document.querySelector('.close-chat');
    const chatFriendName = document.getElementById('chatFriendName');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');

    const friends = ['Ami 1', 'Ami 2', 'Ami 3', 'Ami 4'];

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
        friends.forEach(friend => {
            const listItem = document.createElement('li');
            listItem.textContent = friend;
            friendList.appendChild(listItem);
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        friendList.innerHTML = '';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            friendList.innerHTML = '';
        }
    });

    friendList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'LI') {
            const friendName = target.textContent;
            chatFriendName.textContent = friendName;
            chatModal.style.display = 'block';
        }
    });

    closeChatButton.addEventListener('click', function() {
        chatModal.style.display = 'none';
    });

    sendMessageButton.addEventListener('click', function() {
        const message = messageInput.value;
        if (message.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = '';
        }
    });
});
