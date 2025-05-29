document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(response => {
      document.getElementById("response-msg").textContent = response.message;
      this.reset();
    })
    .catch(err => {
      document.getElementById("response-msg").textContent = "Error sending message.";
    });
});
