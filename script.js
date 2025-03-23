document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("All fields are required!");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
    } else {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    let reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review");

    reviewContainer.innerHTML = `
        <img src="default-user.jpg" alt="${name}">
        <h2>${name}</h2>
        <p>${"⭐".repeat(rating)}</p>
        <p>"${message}"</p>
    `;

    document.getElementById("reviews").appendChild(reviewContainer);

    document.getElementById("reviewForm").reset(); // Clear form fields
});
/* Gallery Styles */
.gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        text-align: center;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    }
}