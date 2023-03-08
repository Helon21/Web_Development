function validantingFields(){
    var value = document.getElementById("value").value;
    var client = document.getElementById("client").value;
    var regardingWhom = document.getElementById("regarding").value;
    var city = document.getElementById("city").value;
    var data = document.getElementById("data").value;

    if(value.value <= 0){
        value.style.border = "1px solid red";
        value.style.outline = "1px solid red";
        value.focus();
        return false;
    }
    else if(client.value == null || client.value == ''){
        client.style.border = "1px solid red";
        client.style.outline = "1px solid red";
        client.focus();
        return false;
    }
    else if(regardingWhom.value == null || regardingWhom.value == ''){
        regardingWhom.style.border = "1px solid red";
        regardingWhom.style.outline = "1px solid red";
        regardingWhom.focus();
        return false;
    }
    else if(city.value == null || regardingWhom.value == ''){
        city.style.border = "1px solid red";
        city.style.outline = "1px solid red";
        city.focus();
        return false;
    }
    else if(data.value == null){
        data.style.border = "1px solid red";
        data.style.outline = "1px solid red";
        data.focus();
        return false
    }
    else{
        return true;
    }
}