const row = document.querySelector(".row"),
    successModal = document.querySelector(".success-message"),
    input = document.querySelector(".email"),
    form = document.querySelector(".form-email"),
    validMessage = document.querySelector(".form-header span"),
    userEmail = document.querySelector(".user-email"),
    dismissMessage = document.querySelector(".dismiss-message"),
    image = document.querySelector(".image")

const validRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const media885 = window.matchMedia("(max-width: 885px)")
image.innerHTML =`<img src="./assets/images-icons/illustration-sign-up-desktop.svg" alt="post">`

if (media885.matches) {
    image.innerHTML =`<img src="./assets/images-icons/illustration-sign-up-mobile.svg" alt="">`
}
input.addEventListener("input", () => {
    input.classList.remove("error-input")
    validMessage.style.display = "none"
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.match(validRegex)) {
        row.classList.add("hide");
        successModal.classList.add("show");
        successModal.classList.add("animation");
        userEmail.textContent = input.value;
        input.value = ""
    }
    else {
        input.classList.add("error-input")
        validMessage.style.display = "block"
    }
})

dismissMessage.addEventListener("click", () => {
    row.classList.remove("hide");
    row.classList.add("animation");
    successModal.classList.remove("animation");
    successModal.classList.remove("show");
})
