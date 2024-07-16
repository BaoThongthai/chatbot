document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định

  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");
  const buyButton = document.getElementById("buy-button");

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

  buyButton.addEventListener("click", function () {
      showOrderForm(); // Đây là hàm hiển thị form đặt hàng
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

  // function showOrderForm() {
  //     // Tạo form mới
  //     const orderForm = document.createElement("div");
  //     orderForm.className = "chat-message bot";
  //     orderForm.innerHTML = `
  //         <strong>Chatbot:</strong> Điền thông tin mua hàng của bạn.
  //         <form>
  //             <div class="form-group">
  //                 <label for="name">Tên:</label>
  //                 <input type="text" id="name" class="form-control">
  //             </div>
  //             <div class="form-group">
  //                 <label for="email">Email:</label>
  //                 <input type="email" id="email" class="form-control">
  //             </div>
  //             <button type="submit" class="btn btn-success">Mua ngay</button>
  //         </form>
  //     `;
  //     chatBox.appendChild(orderForm);
  //     chatBox.scrollTop = chatBox.scrollHeight;
  // }

  function showInitialOptions() {
      if (!document.getElementById("initial-options")) {
          const initialOptions = document.createElement("div");
          initialOptions.id = "initial-options";
          initialOptions.className = "chat-message bot";
          initialOptions.innerHTML = `
              <strong>Chatbot:</strong> Bạn muốn làm gì?
              <div class="mt-2">
                  <button id="chat-with-robot" class="btn btn-primary mr-2">Chat với Robot</button>
                  <button id="chat-directly" class="btn btn-secondary mr-2">Chat Trực Tiếp</button>
              </div>
          `;
          chatBox.appendChild(initialOptions);
          chatBox.scrollTop = chatBox.scrollHeight;

          document.getElementById("chat-with-robot").addEventListener("click", function () {
              addMessageToChatBox(
                  "Chatbot",
                  "Bạn đã chọn chat với robot. Hãy bắt đầu trò chuyện!",
                  "bot"
              );
          });

          document.getElementById("chat-directly").addEventListener("click", function () {
              window.open("https://m.me/cuidanang", "_blank");
          });
      }
  }

  showInitialOptions();
});
