

const projectsListado = [
    {
        id: 1,
        title: "One second Faith",
        description: "Proyecto creado para un grupo de música, web sencilla donde podemos encontrar lógica básica con todos los conciertos y lo último de su música",
        stack: ["https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
         "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
         "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png"],
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530450/ONE_SECOND_FAITH_1_aek6hm.png",
        url:"https://osf-react.vercel.app/"

    },
    {
        id: 2,
        title: "Api de Peliculas",
        description: "Proyecto que hace llamadas a una api de películas, listado completo de las películas y detalle de cada una de ellas",
        stack: ["https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
        "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
        "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png"],
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530450/CARTELERA_CINE_jju6iq.png",
        url:"https://peliculas-app-omega.vercel.app/home"

    },
    {
        id: 3,
        title: "Cryos Cloud",
        description: "Proyecto basado en un personaje creado por mí, CRYOS es una joven astronauta al que podemos dirigir en sus aventuras",
        stack: ["https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
        "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
        "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png"],
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530658/CRYOS_WORLD_1_lwbofi.png",
        url:"https://cryos.cloud/"

    },
    {
        id: 4,
        title: "Arkanoid",
        description: "Primer proyecto de videojuegos, típico Arkanoid. Sólo funciona en ordenador",
        stack: ["https://res.cloudinary.com/manuelcodex/image/upload/v1699529983/phaserio-icon_i179ox.svg"],
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699529795/ARKANOID_1_yazad5.png",
        url:"https://arkanoid-weld.vercel.app/"
    },

];
const experienceList = [
    {
        id: 1,
        title: "One second Faith",
        description: "Proyecto creado para un grupo de música, web sencilla donde podemos encontrar lógica básica con todos los conciertos y lo último de su música",
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1688821217/manuel.alcazar_a_Valknut_logo_with_a_black_background_each_of_t_29acc2a5-483b-49f7-8fd5-ba2751df2699_qexuv3.png"

    },
    {
        id: 2,
        title: "Api de Peliculas",
        description: "Proyecto que hace llamadas a una api de películas, listado completo de las películas y detalle",
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1688821217/manuel.alcazar_a_Valknut_logo_with_a_black_background_each_of_t_29acc2a5-483b-49f7-8fd5-ba2751df2699_qexuv3.png"

    },
    {
        id: 3,
        title: "Cryos Cloud",
        description: "Proyecto basado en un personaje creado por mí, CRYOS es una joven astronauta al que podemos dirigir en sus aventuras",
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1688821217/manuel.alcazar_a_Valknut_logo_with_a_black_background_each_of_t_29acc2a5-483b-49f7-8fd5-ba2751df2699_qexuv3.png"

    },
    {
        id: 4,
        title: "Arkanoid",
        description: "Primer proyecto de videojuegos, típico Arkanoid",
        img: "https://res.cloudinary.com/manuelcodex/image/upload/v1688821217/manuel.alcazar_a_Valknut_logo_with_a_black_background_each_of_t_29acc2a5-483b-49f7-8fd5-ba2751df2699_qexuv3.png"

    },

];
const projectList = document.getElementById("projectList");

projectsListado.forEach((project)=>{
    const unitProject = document.createElement("div");
    unitProject.classList.add("div-item")
    unitProject.setAttribute('id', `project${project.id}`);

    const ulStack = document.createElement("div");


    project.stack.forEach((tecnologia) => {
        const liTecnologia = document.createElement("img");
        liTecnologia.src = tecnologia;
        liTecnologia.classList.add("stackImage")
        ulStack.appendChild(liTecnologia);
    });
    ulStack.classList.add("disappear");

    unitProject.innerHTML = ` 
    <img src="${project.img}" alt="${project.title}" />
    <h4>${project.title}</h4>
    <p style="display: none;">
    ${project.description}
    </p>
    <a href="${project.url}" class="urlProject" style="display: none;">
    Enlace a este proyecto
    </a>
    `
    unitProject.appendChild(ulStack);
    projectList.appendChild(unitProject);


});


