function inputNumber(num){
    var result=document.getElementById("result");
    result.value +=num;
    
}
function clearBtn(){
    var result=document.getElementById("result");
    result.value ="0";
}
function equalBtn(){
    var result=document.getElementById('result');
    if (result==="0"){
        result.value="0";
    }
    else{
        result.value=eval(result.value);
    }

}