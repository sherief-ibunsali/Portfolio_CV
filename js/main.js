const nav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".hamburger");
const section = document.querySelector("section");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav--open");
  //   section.style.marginTop = "200px";
  hamburger.classList.toggle("hamburger--open");
});

nav.addEventListener("click", function () {
  nav.classList.remove("nav--open");
  //   section.style.marginTop = "200px";
  hamburger.classList.remove("hamburger--open");
});
console.log("shereif");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));

const form = document.getElementById("contactForm");

function sentEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mdsheriefibunsali@gmail.com",
    Password: "797A7467477924967C1628419018D331FCCB",
    To: "mdsheriefibunsali@gmail.com",
    From: email,
    Subject: subject,
    Body: `Name: ${name}<br>Email: ${email}<br>Subject: ${subject}<br>Message: ${message}`,
    // Subject: "This is the subject",
    // Body: "And this is the body",
  })
    .then((message) => alert(message))
    .catch((error) => alert("Failed to send email: " + error));

  // Reset the form
  form.reset();

  // Prevent the default form submission
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sentEmail();
});


