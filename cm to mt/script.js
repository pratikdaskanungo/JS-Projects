function convert(){
    let input = document.getElementById('Centi');

    let meter = (input.value) / 100;

     let result = "Converted Value:" + meter + "m";

     document.getElementById('result').innerText = result;

    input.value ="";
}


function convert2(){
    let input = document.getElementById('metre');

    let cm = (input.value) * 100;

     let result2 = "Converted Value:" + cm + "cm";

     document.getElementById('result2').innerText = result2;

    input.value ="";
}