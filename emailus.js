document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_pmp1ut2", "template_jv9z9fm", this)
    .then(function () {
      document.getElementById("supportSuccess").innerHTML =
        "✅ Thank you. Your IT support request has been submitted.";

      document.getElementById("supportForm").reset();
    })
    .catch(function (error) {
      document.getElementById("supportSuccess").innerHTML =
        "❌ Failed to send request. Please try again.";

      console.log(error);
    });
});
