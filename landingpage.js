
// smooth scroll function
const navigation = document.querySelector(".main-navbar");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
)


// about section

// Select parent and dots
const parentContent = document.getElementById("about-container");
const dots = document.getElementById("dots").querySelectorAll(".dot");

// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        // Select all content sections
        const contents = parentContent.querySelectorAll(".about, .mv, .partnership");

        // Hide all content sections
        contents.forEach((content) => {
            content.classList.add("hide");
        });

        // Show the clicked content section
        contents[index].classList.remove("hide");
        console.log(contents[index])
    });
});



