let toastbox = document.querySelector("#toast-box");
let successmsg = `<i class="fa-solid fa-circle-check"></i> Successfully Submitted`;
let errormsg = `<i class="fa-solid fa-circle-xmark"></i> Please try again later`;
let invalidmsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid Response`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastbox.appendChild(toast);

  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  if (msg.includes("Please")) {
    toast.classList.add("error");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
