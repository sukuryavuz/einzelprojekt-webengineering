import './styles/style.scss';
import 'bootstrap';

const submitBtn = document.getElementById("button-submit");
const email = document.getElementById("email");
const password = document.getElementById("password");
submitBtn.onclick = validateForm;

function validateForm() {
    if (email.value === "admin@fh-campuswien.ac.at" && password.value === "admin") {
        alert("You are logged in");
        window.location.href = 'homepage.html';
    } else {
        alert("Your credentials are false. Please try again!");
    }
}