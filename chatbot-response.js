function getChatbotResponse(userInput) {
    let response = '';

    if (userInput.toLowerCase().includes('chào')) {
        response = 'Tôi có thể giúp gì cho bạn?';
    } else if (userInput.toLowerCase().includes('tôi muốn mua củi')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Nhập [củi bó] hoặc [củi miếng] hoặc [củi thanh tròn] để biết thông tin và giá'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
 else if (userInput.toLowerCase().includes('tôi muốn mua')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('thông tin')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('muốn mua')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('bán củi')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi pizza')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('sỉ')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
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
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('loại củi')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('bán')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('loại')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('bán thế nào')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi khác không')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('loại củi khác')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi dương liễu')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('bán như thế nào')) {
        response = 'Bên mình chỉ bán củi dương liễu. Nhập [giá] để tham khảo giá';
    }
    else if (userInput.toLowerCase().includes('loại củi')) {
        response = 'Bên mình bán củi dương liễu<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'
            +'<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'
            +'<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi bó')) {
        response = 'Củi bó giá 11K<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi bó bán')) {
        response = 'Củi bó giá 11K<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        'Giá các loại củi trên như nhau ạ !'+
        '<br>Nhập [giá] để tham khảo giá'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('tôi muốn mua củi bó')) {
        response = 'Củi bó giá 11.000VND<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('tôi muốn mua củi miếng')) {
        response = 'Củi miếng 11.000VND<br>' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi miếng bán')) {
        response = 'Củi miếng 11.000VND<br>' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('tôi muốn mua củi thanh tròn ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('mua củi thanh tròn ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi thanh tròn bán ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }

    else if (userInput.toLowerCase().includes('mua củi bó')) {
        response = 'Củi bó giá 11.000VND<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('mua củi miếng')) {
        response = 'Củi miếng 11.000VND<br>' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('mua thanh tròn ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }



    else if (userInput.toLowerCase().includes('muốn mua củi bó')) {
        response = 'Củi bó giá 11.000VND<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('muốn mua củi miếng')) {
        response = 'Củi miếng 11.000VND<br>' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('muốn mua củi thanh tròn ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }



    else if (userInput.toLowerCase().includes('mua củi bó')) {
        response = 'Củi bó giá 11.000VND<br>' +
            '<img src="img/cuibo.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi bó(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi miếng')) {
        response = 'Củi miếng 11.000VND<br>' +
            '<img src="img/cuicaylon.jpg" alt="Củi dương liễu" style="width:50%;">' +'<br>củi miếng(hơn 2kg)<br>'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('củi thanh tròn ')) {
        response = 'Củi cây tròn 11.000VND<br>' +
            '<img src="img/cuicaytron.jpg" alt="Củi dương liễu" style="width:50%;">' + '<br>'+ 'củi thanh tròn(hơn 2kg)'+
        '<br>Nhập [giá] để tham khảo giá các loại khác'+'<br>Nhập [Ship] để biết tiền ship';
    }
    else if (userInput.toLowerCase().includes('tôi lấy loại này')) {
        response = 'Xin lỗi , nhờ bạn nhập tên : Củi Bó, Củi miếng hoặc củi cây hoặc chat trực tiếp với mình' ;
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
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('tới')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('địa chỉ')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('nhà')) {
        response = '<br> Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    } else if (userInput.toLowerCase().includes('mua trực tiếp')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('mua')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

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
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('số điện thoại')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('liên lạc')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('SĐT')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('phone')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('address')) {
        response = '<br>Số 02 đường 2 tháng 9 ( sau lưng chùa Tĩnh Hội) . Tới liên hệ 0918366507 giá mình trước 1 giờ. Cám ơn bạn';

    }
    else if (userInput.toLowerCase().includes('tươi')) {
        response = '<br>Củi phơi ngoài bãi với thời tiết hiện tại thì khô ạ !';

    }  else {
        response = '<br>Xin lỗi, tôi không hiểu bạn muốn nói gì. Bạn có thể hỏi lại không?';
    }

    return response;
}
