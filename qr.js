const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generate QRcode Wait a moment..........";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>{
        wrapper.classList.add("active");
        generateBtn.innerText ="Generate QRcode";
    });
   
});
qrInput.addEventListener("keyup", () => {    // to remove qr if we erase the url or text in input
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});