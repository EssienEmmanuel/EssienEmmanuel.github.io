const readMore = document.querySelector(".read-more");
const readMoreBtn = document.querySelector(".read-more");
const aboutMe = document.querySelector(".about-me-p");

const fName = document.querySelector(".fname");
const mail = document.querySelector(".email");
const message = document.querySelector(".message");

const msgButton = document.querySelector("#msg-button");

const errorHead1 = document.querySelector(".error-heading1");
const errorHead2 = document.querySelector(".error-heading2");

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

function regard() {
  const greeting = document.querySelector(".greeting");
  const date = new Date();
  const hour = date.getHours();

  if (hour <= 11) {
    result = "Good Morning";
  } else if (hour === 12) {
    result = "Happy Noon";
  } else if (hour >= 13 && hour < 16) {
    result = "Good Afternoon";
  } else if (hour >= 5 && hour < 20) {
    result = "Good Evening";
  } else {
    result = "Have a Good Night";
  }

  greeting.innerHTML = `${result}`;
}

regard();

// --------------------------------------Event Listeners

hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate closing when hamburger clicked
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// Listen for clicks anywhere in the document
document.addEventListener("click", (e) => {
  if (
    menu.style.display === "block" &&
    !menu.contains(e.target) &&
    e.target !== hamburger &&
    !hamburger.contains(e.target)
  ) {
    menu.style.display = "none";
  }
});

menu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
});

const body = document.body;
console.log("body");

// body.addEventListener("click", () => {
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   }
// });

readMoreBtn.addEventListener("click", () => {
  aboutMe.classList.toggle("expanded");
  readMoreBtn.textContent = aboutMe.classList.contains("expanded")
    ? "Read Less"
    : "Read More";
});

msgButton.addEventListener("click", function (e) {
  e.preventDefault();
  const fNameValue = document.querySelector(".fname").value;
  const mailValue = document.querySelector(".email").value;
  const messageValue = document.querySelector(".message").value;

  const mail = document.querySelector(".email");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const msgStatus = document.querySelector(".msg-status");
  const fNameError = document.querySelector(".fname-error");
  const emailError = document.querySelector(".email-error");
  const validEmail = document.querySelector(".valid-email-error");
  const msgError = document.querySelector(".msg-error");

  let isValid = true;

  if (fNameValue === "" && mailValue === "" && messageValue === "") {
    fName.classList.add("error");
    mail.classList.add("error");
    message.classList.add("error");
  } else if (fNameValue === "") {
    fName.classList.add("error");
    fNameError.style.display = "block";

    isValid = false;
  } else if (mailValue === "") {
    mail.classList.add("error");
    emailError.style.display = "block";
    isValid = false;
  } else if (messageValue === "") {
    message.classList.add("error");
    msgError.style.display = "block";

    isValid = false;
  }

  if (!mailValue.match(emailPattern)) {
    mail.style.border = "1px solid red";
    isValid = false;
  } else {
    mail.style.border = "1px solid green";
    validEmail.style.display = "none";
  }

  if (isValid) {
    msgStatus.style.display = "block";
    msgStatus.style.color = "green";
    msgStatus.textContent = "Message Sent!";

    // fNameValue = "";
    // mailValue = "";
    // messageValue = "";
  }

  fName.addEventListener("click", () => {
    fName.classList.remove("error");

    fNameError.style.display = "none";
    emailError.style.display = "none";
    msgError.style.display = "none";

    msgStatus.style.display = "none";
  });

  mail.addEventListener("click", () => {
    mail.classList.remove("error");

    msgError.style.display = "none";

    msgStatus.style.display = "none";
  });

  message.addEventListener("click", () => {
    message.classList.remove("error");

    fNameError.style.display = "none";
    emailError.style.display = "none";
    msgError.style.display = "none";

    msgStatus.style.display = "none";
  });
});
