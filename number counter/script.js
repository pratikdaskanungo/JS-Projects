let numb = 0
function add(){
    numb = numb + 1;
    document.getElementById('numb').innerText = numb;
}
function sub(){
    if(numb>0){
        
            numb = numb - 1;
            document.getElementById('numb').innerText = numb;
        
    }
}