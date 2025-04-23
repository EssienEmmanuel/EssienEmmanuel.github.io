const readMore = document.querySelector(".read-more");

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

// // let isReadMore = false;

// readMore.addEventListener("click", () => {
//   const hideText = document.querySelector(".hide-text");

//   if (!isReadMore) {
//     readMore.innerHTML = "Read Less";
//     hideText.style.display = "block";
//     isReadMore = true;
//   } else {
//     readMore.innerHTML = "Read More";
//     hideText.style.display = "none";
//     isReadMore = false;
//   }
// });

const readMoreBtn = document.querySelector(".read-more");
const aboutMe = document.querySelector(".about-me-p");

readMoreBtn.addEventListener("click", () => {
  aboutMe.classList.toggle("expanded");
  readMoreBtn.textContent = aboutMe.classList.contains("expanded")
    ? "Read Less"
    : "Read More";
});
