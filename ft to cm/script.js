function convert(){
    var ft = document.getElementById('ft');

    var cm = ft.value * 30.48;
    
    var result = "Converted value is " + cm + 'cm';
    document.getElementById('result').innerHTML = result;
    ft.value = "";
}



function convert2(){
    var inch = document.getElementById('inch');

    var cm = inch.value * 2.5;
    
    var result2 = "Converted value is " + cm + 'cm';
    document.getElementById('result2').innerHTML = result2;
    inch.value = "";
}