let outputScreen=document.getElementById("outputScreen");

function display (number) {

    outputScreen.value += number;

}

function Calculate() {
    try {
    outputScreen.value = eval(outputScreen.value)
    }
    catch(error) {
        alert("Geçersiz giriş yaptınız !")
    }
}

function Clear() {
    outputScreen.value="";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1)
}