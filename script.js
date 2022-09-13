let textToChange = document.querySelector(".textarea");
let backgroundImg = document.querySelector(".container-image");
let messageError = document.querySelector(".message-error");
let containerMessage = document.querySelector(".container-message");
containerMessage.style.display = "none"
let messageResult = document.querySelector(".message");

function encrypt(){
    text = textToChange.value;
    noAccent = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    encryptText = noAccent.toLowerCase().trim()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
   
    if(encryptText !== ""){
        backgroundImg.style.display = "none";
        document.querySelector(".message").innerHTML = encryptText;
        containerMessage.style.display = "block";
        messageError.style.display = "none";
    }
    if(encryptText == ""){
        messageError.style.display = "block";
        messageError.innerHTML = "Ingrese un texto";
        messageError.style.animation = "shake .4s";
    }
     
}

function desencrypt(){
    text = textToChange.value;
    noAccent = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    encryptText = noAccent.toLowerCase().trim()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    if(encryptText !== ""){
        backgroundImg.style.display = "none";
        document.querySelector(".message").innerHTML = encryptText;
        containerMessage.style.display = "block";
        messageError.style.display = "none";
    }
    if(encryptText == ""){
        messageError.style.display = "block";
        messageError.innerHTML = "Ingrese un texto";
        messageError.style.animation = "shake .4s";
    }  
    document.querySelector(".message").innerHTML = encryptText;
}

function copyText(){
    messageResult.select();
    navigator.clipboard.writeText(messageResult.value);
}
function del(){
    textToChange.value = ""
    document.querySelector(".message").innerHTML = "";
    backgroundImg.style.display = "";
    containerMessage.style.display = "none";
}