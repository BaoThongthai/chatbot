document.addEventListener("DOMContentLoaded", function () {
  
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định
    const userInput = chatInput.value.trim();
    if (userInput) {
      addMessageToChatBox("User", userInput, "user");
      const response = getChatbotResponse(userInput);
      addMessageToChatBox("Chatbot", response, "bot");
      chatInput.value = "";
    }
  });

  const buyButton = document.getElementById("buy-button");

  buyButton.addEventListener("click", function (event) {
    event.preventDefault();
    showOrderForm(); // Đây là hàm hiển thị form đặt hàng, bạn cần định nghĩa hàm này trong file JavaScript của bạn
  });
  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendButton.click();
    }
  });


  function addMessageToChatBox(sender, message, messageType) {
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${messageType}`;
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showInitialOptions() {
    if (!document.getElementById("initial-options")) {
      const initialOptions = document.createElement("div");
      initialOptions.id = "initial-options";
      initialOptions.className = "chat-message bot";
      initialOptions.innerHTML = `
                <strong>Chatbot:</strong> Bạn muốn làm gì?
                <div class="mt-2 ">
                    <button id="chat-with-robot" class="btn btn-primary mr-2">Chat với Robot</button>
                    <button id="chat-directly"  style="float: right;" class="btn btn-secondary mr-2">Chat Trực Tiếp</button>
                
                </div>
            `;
      chatBox.appendChild(initialOptions);
      chatBox.scrollTop = chatBox.scrollHeight;

      document
        .getElementById("chat-with-robot")
        .addEventListener("click", function () {
          addMessageToChatBox(
            "Chatbot",
            "Bạn đã chọn chat với robot. Hãy bắt đầu trò chuyện!",
            "bot"
          );
        });

      document
        .getElementById("chat-directly")
        .addEventListener("click", function () {
          window.open("https://m.me/cuidanang", "_blank");
        });

      document.getElementById("buy-now").addEventListener("click", function () {
        showOrderForm();
      });
    }
  }

  showInitialOptions();
});
