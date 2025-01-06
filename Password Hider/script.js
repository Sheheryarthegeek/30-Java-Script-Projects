pass = document.querySelector("#password");
eye = document.querySelector("#eye");

function showPassword() {
  const type = pass.getAttribute("type") === "password" ? "text" : "password";
  pass.setAttribute("type", type);

  if (type === "password") {
    eye.src = "/eye-icons/eye-close.png";
  } else {
    eye.src = "/eye-icons/eye-open.png";
  }
}
