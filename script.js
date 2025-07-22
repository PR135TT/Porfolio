const projectsSlides = [
    { img: "images/usuevieKaribo.png", link: "https://project1.com" },
    { img: "images/wallpaper (26).png", link: "https://project2.com" },
    { img: "images/kda-.jpg", link: "https://project3.com" }
];

let projectsIndex = 0;
let started = false; // Track if slideshow has started

function startProjectsSlideshow() {
    // Hide the title
    document.getElementById("project-title").style.display = "none";
    // Show the image + link
    document.getElementById("projects-link").style.display = "block";
    updateProjectSlide();
    started = true;
}

function updateProjectSlide() {
    const project = projectsSlides[projectsIndex];
    document.getElementById("projects-img").src = project.img;
    document.getElementById("projects-link").href = project.link;
}

document.getElementById("next-btn").onclick = function() {
    if (!started) startProjectsSlideshow();
    projectsIndex = (projectsIndex + 1) % projectsSlides.length;
    updateProjectSlide();
};

document.getElementById("prev-btn").onclick = function() {
    if (!started) startProjectsSlideshow();
    projectsIndex = (projectsIndex - 1 + projectsSlides.length) % projectsSlides.length;
    updateProjectSlide();
};
