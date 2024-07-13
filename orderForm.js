function showOrderForm() {
    const chatBox = document.getElementById('chat-box');
    
    if (!document.getElementById('order-form')) {
        const orderForm = document.createElement('div');
        orderForm.id = 'order-form';
        orderForm.className = 'chat-message bot';
        orderForm.innerHTML = `
            <strong>Chatbot:</strong> Điền thông tin mua hàng
            <div class="mt-2">
                <div class="form-group">
                    <label for="customer-name">Tên khách hàng:</label>
                    <input type="text" id="customer-name" class="form-control" placeholder="Nhập tên khách hàng">
                </div>
                <div class="form-group">
                    <label for="phone-number">Số điện thoại:</label>
                    <input type="text" id="phone-number" class="form-control" placeholder="Nhập số điện thoại">
                </div>
                <div class="form-group">
                    <label for="address">Địa chỉ:</label>
                    <input type="text" id="address" class="form-control" placeholder="Nhập địa chỉ">
                </div>
                <div class="form-group">
                    <label for="quantity">Số lượng:</label>
                    <input type="number" id="quantity" class="form-control" placeholder="Nhập số lượng">
                </div>
                <div class="form-group">
                    <label for="unit-price">Đơn giá:</label>
                    <input type="text" id="unit-price" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="total-price">Thành tiền:</label>
                    <input type="text" id="total-price" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="shipping-fee">Khoảng cách:</label>
                    <small style="color:red;">Ước tính khoảng cách từ Cầu rồng đến chỗ bạn</small>
                    <input type="number" id="shipping-fee" class="form-control" placeholder="Nhập số km">
                </div>
                <div class="form-group">
                    <label for="shipping-cost">Phí ship:</label>
                    <input type="text" id="shipping-cost" class="form-control" readonly>
                </div>
                <div class="form-group">
                    <label for="total-amount">Tổng:</label>
                    <input type="text" id="total-amount" class="form-control" readonly>
                </div>
                <button id="calculate" class="btn btn-primary mt-2">Tính Toán</button>
            </div>
        `;
        chatBox.appendChild(orderForm);
        chatBox.scrollTop = chatBox.scrollHeight;

        document.getElementById('calculate').addEventListener('click', function() {
            calculateOrder();
        });
    }
}

function calculateOrder() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const shippingDistance = parseInt(document.getElementById('shipping-fee').value);

    let unitPrice = 0;
    if (quantity <= 150) {
        unitPrice = 11000;
    } else if (quantity <= 200) {
        unitPrice = 10000;
    } else {
        unitPrice = 9700;
    }

    const totalPrice = quantity * unitPrice;
    const shippingFee = shippingDistance <= 5 ? 100000 : 200000;
    const totalAmount = totalPrice + shippingFee;

    document.getElementById('unit-price').value = unitPrice.toLocaleString('vi-VN') + ' VND';
    document.getElementById('total-price').value = totalPrice.toLocaleString('vi-VN') + ' VND';
    document.getElementById('shipping-cost').value = shippingFee.toLocaleString('vi-VN') + ' VND';
    document.getElementById('total-amount').value = totalAmount.toLocaleString('vi-VN') + ' VND';

    // Gửi tin nhắn tổng hợp sau khi tính toán xong
    sendSummaryMessage();
}

function sendSummaryMessage() {
    const customerName = document.getElementById('customer-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    const unitPrice = document.getElementById('unit-price').value;
    const totalPrice = document.getElementById('total-price').value;
    const shippingDistance = document.getElementById('shipping-fee').value;
    const shippingCost = document.getElementById('shipping-cost').value;
    const totalAmount = document.getElementById('total-amount').value;

    // Lấy ngày hiện tại
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const summaryMessage = `
        <strong>Chatbot:</strong> Vui lòng xác nhận thông tin đơn hàng:
        <br><strong>Tên khách hàng:</strong> ${customerName}
        <br><strong>Số điện thoại:</strong> ${phoneNumber}
        <br><strong>Địa chỉ:</strong> ${address}
        <br><strong>Số lượng:</strong> ${quantity}
        <br><strong>Đơn giá:</strong> ${unitPrice}
        <br><strong>Thành tiền:</strong> ${totalPrice}
        <br><strong>Khoảng cách:</strong> ${shippingDistance} km
        <br><strong>Phí ship:</strong> ${shippingCost}
        <br><strong>Tổng:</strong> ${totalAmount}
        <br><strong>Ngày đặt hàng:</strong> ${formattedDate}
        <br><button id="confirm-order" class="btn btn-success mt-2">Xác Nhận</button>
        <button id="cancel-order" class="btn btn-danger mt-2">Hủy</button>
    `;

    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message bot';
    messageElement.innerHTML = summaryMessage;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById('confirm-order').addEventListener('click', function() {
        confirmOrder(formattedDate);
    });

    document.getElementById('cancel-order').addEventListener('click', function() {
        cancelOrder();
    });
}

function confirmOrder(orderDate) {
    const customerName = document.getElementById('customer-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    const unitPrice = document.getElementById('unit-price').value;
    const totalPrice = document.getElementById('total-price').value;
    const shippingDistance = document.getElementById('shipping-fee').value;
    const shippingCost = document.getElementById('shipping-cost').value;
    const totalAmount = document.getElementById('total-amount').value;

    const orderData = {
        thongtin: {
            customerName,
            phoneNumber,
            address,
            quantity,
            unitPrice,
            totalPrice,
            shippingDistance,
            shippingCost,
            totalAmount,
            orderDate
        }
    };

    fetch('https://667d1684297972455f6368a4.mockapi.io/cuidanang', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message bot';
        messageElement.innerHTML = `<strong>Chatbot:</strong> Đơn hàng của bạn đã được xác nhận. Cảm ơn bạn đã mua hàng!`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message bot';
        messageElement.innerHTML = `<strong>Chatbot:</strong> Đã có lỗi xảy ra, vui lòng thử lại sau.`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}

function cancelOrder() {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message bot';
    messageElement.innerHTML = '<strong>Chatbot:</strong> Đơn hàng của bạn đã bị hủy.';
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
