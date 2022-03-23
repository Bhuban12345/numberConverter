function swap(){
     let x = document.getElementById('input').value;
     let y = document.getElementById('output').value;
     let temp = x;
     document.getElementById('input').value = y;
     document.getElementById('output').value = temp;
}
function getNumberForm(){
   
    var select1 = document.getElementById('itemFrom');
    var option1 = select1.options[select1.selectedIndex];   
    var select2 = document.getElementById('itemTo');
    var option2 = select2.options[select2.selectedIndex];
    console.log(option1.value +" "+ option2.value)
    
    if(option1.value ==="Decimal" & option2.value ==="Decimal"){
        document.getElementById('output').value = document.getElementById('input').value;
    }
    else if(option1.value==="Hexadecimal" & option2.value ==="Hexadecimal"){
        document.getElementById('output').value = document.getElementById('input').value;
    }
    else if(option1.value==="Octal" & option2.value ==="Octal"){
        document.getElementById('output').value = document.getElementById('input').value;
    }
    else if(option1.value==="Binary" & option2.value ==="Binary"){
        document.getElementById('output').value = document.getElementById('input').value;
    }
    else if(option1.value==="Binary" & option2.value ==="Hexadecimal"){
        var x = document.getElementById('input').value;
        var y = parseInt(x,2).toString(16).toUpperCase();   
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Binary" & option2.value ==="Decimal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x,2);
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Binary" & option2.value ==="Octal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x,2).toString(8);
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Decimal" & option2.value ==="Hexadecimal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x).toString(16).toUpperCase();
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Decimal" & option2.value ==="Octal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x).toString(8).toUpperCase();
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Decimal" & option2.value ==="Binary"){
        let x = document.getElementById('input').value;
        let y = parseInt(x).toString(2).toUpperCase();
        document.getElementById("output").value = y;
    }
    else if(option1.value==="Hexadecimal" & option2.value ==="Binary"){
        let x = document.getElementById('input').value;
        let y = ( (parseInt(x, 16)).toString(2)).substr(-8);
        document.getElementById('output').value = y;
    }
    else if(option1.value==="Hexadecimal" & option2.value ==="Octal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x).toString(8);
        document.getElementById('output').value = y;
    }
    else if(option1.value==="Hexadecimal" & option2.value ==="Decimal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x,16);
        document.getElementById('output').value = y;
    }
    else if(option1.value==="Octal" & option2.value ==="Decimal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x,8);
        document.getElementById('output').value = y;
    }
    else if(option1.value==="Octal" & option2.value ==="Hexadecimal"){
        let x = document.getElementById('input').value;
        let y = parseInt(x).toString(16).toUpperCase();
        document.getElementById('output').value = y;
    }
    else if(option1.value==="Octal" & option2.value ==="Binary"){
        let x = document.getElementById('input').value;
        let y = (parseInt(x,8).toString(2)).substr(-8);
        document.getElementById('output').value = y;
    }
}

