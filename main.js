function cacula(){
    var first = document.getElementById('first_num').value
    var second = document.getElementById('second_num').value
    var select = document.getElementById('select').value

    if(first == '' || second == ''){
        alert('Bạn chưa nhập số !')
        alert('Mời bạn nhập số !')
        document.getElementById('result').value = ''
    }
    if(select == 'Chọn phép tính'){
        alert('Bạn chưa chọn phép tính !')
        alert('Mời bạn chọn phép tính !')
    }
    
    if(select == '+'){
        document.getElementById('result').value = Number(first) + Number(second)
    }
    if(select == '-'){
        document.getElementById('result').value = Number(first) - Number(second)
    }
    if(select == 'x'){
        document.getElementById('result').value = Number(first) * Number(second)
    }
    if(select == '/'){
        document.getElementById('result').value = Number(first) / Number(second)
    }
    if(select == '%'){
        if(Number(first) >= 0 && Number(second) > 0){
        document.getElementById('result').value = Number(first) % Number(second)
        }else{
            alert('Lỗi')
        }
    }
    if(select == '^'){
        if(Number(second) >= 0)
        {

            var luythua = 1
            for(var i = 0; i < Number(second); i++){
                luythua *= Number(first)
            }
            document.getElementById('result').value = Number(luythua)
        }else if(Number(second) < 0){
            var luythuaam = 1
            for(var i = 0; i < Number(second); i++){
                luythuaam *= Number(first)
            }
            document.getElementById('result').value =  Number(luythuaam)
        }
    }

    

}
