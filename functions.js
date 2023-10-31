document.addEventListener("DOMContentLoaded", function () {
    const projectsItems = document.querySelectorAll(".div-item");
    const tituloExposicion = document.getElementById("titulo-exposicion");
    const parrafoExposicion = document.getElementById("parrafo-exposicion");
    const stackList = document.getElementById("stack-list");

    projectsItems.forEach((item) => {
        item.addEventListener("click", () => {
            const titulo = item.querySelector("h4").textContent;
            const parrafo = item.querySelector("p").textContent;
            const stackImages = item.querySelectorAll(".stackImage");

            tituloExposicion.textContent = titulo;
            parrafoExposicion.textContent = parrafo;
            stackList.innerHTML = '';

            stackImages.forEach((img) => {
                const imgElement = document.createElement("img");
                imgElement.src = img.getAttribute("src"); 
                imgElement.classList.add("img-style");
                stackList.appendChild(imgElement);
            });

            projects.classList.add("exposicion-con-fondo");
        });
    });

    const experienceItems = document.querySelectorAll(".div-experience");
    experienceItems.forEach((item) => {
        item.addEventListener("click", () => {
            const titulo = item.querySelector("h4").textContent;
            const parrafo = item.querySelector("p").textContent;

            tituloExposicion.textContent = titulo;
            parrafoExposicion.textContent = parrafo;
            //projects.classList.add("exposicion-con-fondo");
        });
    });
    const studiesItems = document.querySelectorAll(".div-studies");
    studiesItems.forEach((item) => {
        item.addEventListener("click", () => {
            const titulo = item.querySelector("h4").textContent;
            const parrafo = item.querySelector("p").textContent;

            tituloExposicion.textContent = titulo;
            parrafoExposicion.textContent = parrafo;
            //projects.classList.add("exposicion-con-fondo");
        });
    });
});
function toggleMenu() {
    var navMenu = document.getElementById("navbar_menu");
    var hamburgerIcon = document.getElementById("hamburger-icon");
    var closeIcon = document.getElementById("close-icon");

    navMenu.classList.toggle("open");
    
    if (navMenu.classList.contains("open")) {
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}