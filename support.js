document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("bUECPtqtHIvgBZInE");

  const form = document.getElementById("supportForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector("button");

    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs
      .sendForm("service_e419jim", "template_jv9z9fm", form)
      .then(function () {
        alert("Your support request has been submitted successfully.");

        form.reset();

        btn.innerText = "Submit IT Support Request";
        btn.disabled = false;
      })
      .catch(function (error) {
        console.error(error);

        alert("Failed to send request.");

        btn.innerText = "Submit IT Support Request";
        btn.disabled = false;
      });
  });
});
