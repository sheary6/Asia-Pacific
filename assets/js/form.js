// form.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_2he0b8l", "template_zfk1lh8", {
        name: this.name.value,
        email: this.email.value,
        service: this.service.value,
        date: this.date.value,
        phone: this.phone.value,
        location: this.location.value
    })
    .then(function(response) {
        alert("Your request has been sent successfully!");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send request. Please try again.");
        console.error("Error:", error);
    });
});