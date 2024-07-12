function getChatbotResponse(userInput) {
    let response = '';

    if (userInput.toLowerCase().includes('chào')) {
        response = 'Tôi có thể giúp gì cho bạn?';
    } else if (userInput.toLowerCase().includes('tôi muốn mua củi')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi ' +
            '2. Nhấp [Giá] để biết giá ' + '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi ' +
            '2. Nhấp [Giá] để biết giá ' + '3. Nhập [Ship] để biết tiền ship';
    } else if (userInput.toLowerCase().includes('tôi muốn mua')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi<br>' +
            '2. Nhấp [Giá] để biết giá<br>' +
            '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('thông tin')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi<br>' +
            '2. Nhấp [Giá] để biết giá<br>' +
            '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('bán thế nào')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi<br>' +
            '2. Nhấp [Giá] để biết giá<br>' +
            '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi pizza')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi<br>' +
            '2. Nhấp [Giá] để biết giá<br>' +
            '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('sỉ')) {
        response = '<br>1. Nhấp [Phân loại] để biết thông tin củi<br>' +
            '2. Nhấp [Giá] để biết giá<br>' +
            '3. Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('vận chuyển')) {
        response = '100K cho bán kính dưới 5km<br>' +
            '200K cho bán kính dưới 10km<br>' + 'trên 10km thương lượng';
    }
    else if (userInput.toLowerCase().includes('ship')) {
        response = '100K cho bán kính dưới 5km<br>' +
            '200K cho bán kính dưới 10km<br>' + 'trên 10km thương lượng';
    }
    else if (userInput.toLowerCase().includes('phân loại')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'+
        'Giá các loại củi trên như nhau ạ !'
        '<br>Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('loại củi')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'
        'Giá các loại củi trên như nhau ạ !'
        '<br>Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('bán')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
        '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'+
    'Giá các loại củi trên như nhau ạ !'
    '<br>Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('loại')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
        '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'+
    'Giá các loại củi trên như nhau ạ !'
    '<br>Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('bán như thế nào')) {
        response = 'Bên mình chỉ bán củi dương liễu. Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('loại củi')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
        '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'+
    'Giá các loại củi trên như nhau ạ !'
    '<br>Nhập [giá] để tham khảo giá';
    }

    else if (userInput.toLowerCase().includes('giá')) {
        response = '<br> Giá 11.000VND/1 cây cho số lượng dưới 150 cây<br>' + 'Giá 10.000VND/1 cây cho số lượng trên 150 cây<br>' + 'Trên 200 cây giá 9700VND/cây ';
    } else if (userInput.toLowerCase().includes('kích thước')) {
        response = '<br>Đường kính: 5cm<br>' + 'Chiều dài : từ 35-40cm<br>' + ' Khối lượng : nặng hơn 2kg';

    } 
    else if (userInput.toLowerCase().includes('cân nặng')) {
        response = '<br>Đường kính: 5cm<br>' + 'Chiều dài : từ 35-40cm<br>' + ' Khối lượng : nặng hơn 2kg';

    }
    else if (userInput.toLowerCase().includes('khối lượng')) {
        response = '<br>Đường kính: 5cm<br>' + 'Chiều dài : từ 35-40cm<br>' + ' Khối lượng : nặng hơn 2kg';

    }
    else if (userInput.toLowerCase().includes('dài')) {
        response = '<br>Đường kính: 5cm<br>' + 'Chiều dài : từ 35-40cm<br>' + ' Khối lượng : nặng hơn 2kg';

    }
    else if (userInput.toLowerCase().includes('nặng')) {
        response = '<br>Đường kính: 5cm<br>' + 'Chiều dài : từ 35-40cm<br>' + ' Khối lượng : nặng hơn 2kg';

    } else if (userInput.toLowerCase().includes('giá bán')) {
        response = '<br> Giá 11.000VND/1 cây cho số lượng dưới 150 cây<br>' + 'Giá 10.000VND/1 cây cho số lượng trên 150 cây<br>' + 'Trên 200 cây giá 9700VND/cây ';
    }
 else if (userInput.toLowerCase().includes('giá như')) {
    response = '<br> Giá 11.000VND/1 cây cho số lượng dưới 150 cây<br>' + 'Giá 10.000VND/1 cây cho số lượng trên 150 cây<br>' + 'Trên 200 cây giá 9700VND/cây ';
}
    else if (userInput.toLowerCase().includes('trực tiếp')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('tới')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('địa chỉ')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('nhà')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    } else if (userInput.toLowerCase().includes('mua trực tiếp')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('mua')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('cần mua')) {
        response = 'Bên mình chỉ bán củi dương liễu<br>' +
        '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:30%;">' +
        '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:30%;">' + '<br>'+
    'Giá các loại củi trên như nhau ạ !'
    '<br>Nhập [giá] để tham khảo giá';

    }
    
    else if (userInput.toLowerCase().includes('ở đâu')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('số điện thoại')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('liên lạc')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('SĐT')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('phone')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('address')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0934805005 giá mình trước 1 giờ. Cám ơn bạn';

    } else {
        response = '<br>Xin lỗi, tôi không hiểu bạn muốn nói gì. Bạn có thể hỏi lại không?';
    }

    return response;
}
