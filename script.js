// Active navbar link effect

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {

        links.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });
});
// PRICE CLICK CALCULATOR

// PRICING CALCULATOR

let total = 0;

function addService(service, price){

    document.getElementById("selectedService").innerText = service;

    total += price;

    document.getElementById("totalPrice").innerText = total;
}

function resetTotal(){

    total = 0;

    document.getElementById("selectedService").innerText = "None";

    document.getElementById("totalPrice").innerText = total;
}

/* CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const subject =
        document.getElementById("subject").value.trim();

        const message =
        document.getElementById("message").value.trim();

        const formMessage =
        document.getElementById("formMessage");

        if(name === "" ||
           email === "" ||
           subject === "" ||
           message === ""){

            formMessage.style.color = "red";

            formMessage.innerText =
            "Please fill in all fields.";

            return;
        }

        if(!email.includes("@")){

            formMessage.style.color = "red";

            formMessage.innerText =
            "Please enter a valid email.";

            return;
        }

        formMessage.style.color = "#f5b700";

        formMessage.innerText =
        "Message sent successfully!";

        contactForm.reset();

    });

}