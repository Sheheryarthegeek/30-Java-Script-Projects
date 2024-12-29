const qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let qrCode = document.querySelector(".qrcode");
let qrImage = document.querySelector(".qrimg");
let inpField = document.querySelector(".container input");

function generateQRCode() {
  if (inpField.value.length > 0) {
    qrImage.src = qrLink + inpField.value;
    inpField.value = "";
    qrCode.classList.add("show-img");
  } else {
    // let mainContainer = document.querySelector(".container");
    inpField.classList.add("error");
    setTimeout(() => {
      inpField.classList.remove("error");
    }, 1000);
  }
}
