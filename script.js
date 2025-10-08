document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
});


<script>
    const images = [
    "00.jpg",
    "001.jpg",
    "003.jpg",
    "004.jpg"
    ];

    let current = 0;
    const hero = document.querySelector(".hero-section");

    function changeBackground() {
        hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
}

    // Initial load
    changeBackground();
    setInterval(changeBackground, 6000); // Change every 6 seconds
</script>



// Smooth scroll for in-page anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("show");
            } else {
                card.classList.remove("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run on page load
});


.service - card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}
  
  .service - card.show {
    opacity: 1;
    transform: translateY(0);
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", () => {
            const more = button.previousElementSibling;
            more.style.display = more.style.display === "none" ? "block" : "none";
            button.textContent = button.textContent === "Read More" ? "Read Less" : "Read More";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", () => {
            const more = button.previousElementSibling;
            more.style.display = more.style.display === "none" ? "block" : "none";
            button.textContent = button.textContent === "Read More" ? "Read Less" : "Read More";
        });
    });
});







const servicesData = [
    {
        icon: "fas fa-cogs",
        title: "Design & Prototyping",
        description: "We turn ideas into precision-engineered prototypes using modern CAD and 3D modeling.",
        images: ["images/design-before.jpg", "images/design-now.jpg", "images/design-future.jpg"]
    },
    {
        icon: "fas fa-industry",
        title: "Manufacturing Solutions",
        description: "Scalable manufacturing with CNC, 3D printing, and robotic automation.",
        images: ["images/manufacturing-before.jpg", "images/manufacturing-now.jpg", "images/manufacturing-future.jpg"]
    },
    {
        icon: "fas fa-tools",
        title: "Maintenance & Repair",
        description: "Restoring and maintaining machines for optimal performance and longevity.",
        images: ["images/repair-before.jpg", "images/repair-now.jpg", "images/repair-future.jpg"]
    }
];

const servicesContainer = document.getElementById("servicesContainer");

servicesData.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
    `;
    servicesContainer.appendChild(card);
});
