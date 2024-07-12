document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function() {
        const userInput = chatInput.value.trim();
        if (userInput) {
            addMessageToChatBox('User', userInput, 'user');
            const response = getChatbotResponse(userInput);
            addMessageToChatBox('Chatbot', response, 'bot');
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendButton.click();
        }
    });

    function addMessageToChatBox(sender, message, messageType) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${messageType}`;
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Hiển thị nút chọn giữa chat với robot hoặc chat trực tiếp khi trang được tải
    function showInitialOptions() {
        const initialOptions = document.createElement('div');
        initialOptions.className = 'chat-message bot';
        initialOptions.innerHTML = `
            <strong>Chatbot:</strong> Bạn muốn làm gì?
            <div class="mt-2">
                <button id="chat-with-robot" class="btn btn-primary mr-2">Chat với Robot</button>
                <button id="chat-directly" class="btn btn-secondary">Chat Trực Tiếp</button>
            </div>
        `;
        chatBox.appendChild(initialOptions);
        chatBox.scrollTop = chatBox.scrollHeight;

        document.getElementById('chat-with-robot').addEventListener('click', function() {
            addMessageToChatBox('Chatbot', 'Bạn đã chọn chat với robot. Hãy bắt đầu trò chuyện!', 'bot');
        });

        document.getElementById('chat-directly').addEventListener('click', function() {
            window.location.href = 'https://m.me/cuidanang';
        });
    }

    showInitialOptions();
});
