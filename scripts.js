const projectsListado = [
  {
    id: 1,
    title: "One second Faith",
    description:
      "Proyecto creado para el grupo de heavy metal ONE SECOND FAITH. Contiene un listado con anteriores y próximos conciertos y las canciones del último disco así cómo una página descripción de el grupo. Contiene enlaces a todas sus RR.SS",
    stack: [
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530450/ONE_SECOND_FAITH_1_aek6hm.png",
    url: "https://osf-react.vercel.app/",
  },
  {
    id: 2,
    title: "Api de Peliculas",
    description:
      "Proyecto que hace llamadas a www.themoviedb.org, contiene un listado actualizado diariamente de películas en cartelera con nota de la crítica. Dentro de cada película podemos encontrar el elenco de actores y su sinopsis",
    stack: [
      "https://res.cloudinary.com/manuelcodex/image/upload/v1699794260/Angular_full_color_logo_crisbo.png",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530450/CARTELERA_CINE_jju6iq.png",
    url: "https://peliculas-app-omega.vercel.app/home",
  },
  {
    id: 3,
    title: "Cryos World",
    description:
      "Proyecto personal en desarrollo. Cryos es un astronauta que viaja por el espacio descubriendo nuevos mundos, en estos viajes podremos convivir con él ya que podremos ayudarle a decidir cual es el mejor camino para completar la misión",
    stack: [
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699530658/CRYOS_WORLD_1_lwbofi.png",
    url: "https://cryos.cloud/",
  },
  {
    id: 4,
    title: "Arkanoid",
    description:
      "Primer proyecto de videojuegos con PhaserJs, en mi deseo de aprendizaje de crear diferentes historias, empecé a probar con Phaser la posibilidad de crear videojuegos. Videojuego sencillo basado en Arkanoid. Sólo funciona en ordenador.",
    stack: [
      "https://res.cloudinary.com/manuelcodex/image/upload/v1699529983/phaserio-icon_i179ox.svg",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699529795/ARKANOID_1_yazad5.png",
    url: "https://arkanoid-weld.vercel.app/",
  },
  {
    id: 5,
    title: "Air Europa Formation",
    description:
      "Cuando comencé el bootcamp trabajaba en Air Europa, y decidí crear un proyecto para que todos los trabajadores de logística pudiese llevar una guía de aprendizaje en el móvil. *Por motivos de seguridad no puedo exponer los datos que introduje*. Estoy terminándola con elementos de prueba. ",
    stack: [
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778872/React_sna58t.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778868/nodejs_znlsmq.png",
      "https://res.cloudinary.com/manuelcodex/image/upload/v1698778866/MongoDB_aiatn0.png",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699692572/AIR_EUROPA_FORMATION_sqw1qt.png",
    url: "https://aea-front-manuel0311nan.vercel.app/",
  },
];

const experienceList = [
  {
    id: 1,
    title: "Programador backEnd",
    company: "Gescobert",
    description: [
      "Stack utilizado: PHP, Javascript, Jquery, MySQL, Sharepoint",
      "Mantenimiento y desarrollo de nuevos avances para las webs de la empresa.",
      "Gestión de las bases de datos, actualización de tarifas",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699691701/gescobert_hvgf94.jpg",
  },
  {
    id: 2,
    title: "Desarrollador Web y maquetador en prácticas",
    company: "Azken Services",
    description: [
      "Stack utilizado: PHP, Javascript, Jquery, MySQL",
      "Maquetación de diferentes webs y landings para empresas",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699693620/azken_wblvjo.jpg",
  },
  {
    id: 3,
    title: "Vendedor especializado de dispositivos electrónicos",
    company: "Hubside",
    description: [
      "Venta de dispositivos electrónicos y productos complementarios",
      "Asesoramiento y recomendación aportando valor a su compra",
      "Capacidad de atender las solicitudes y satisfacer las necesidades de los clientes",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699691702/hubside_srishx.jpg",
  },
  {
    id: 4,
    title: "Vendedor especializado de dispositivos electrónicos",
    company: "Xiaomi",
    description: [
      "Venta de dispositivos electrónicos y productos complementarios",
      "Asesoramiento y recomendación a clientes aportando valor a su compra",
      "Capacidad de atender las solicitudes y satisfacer las necesidades de los clientes",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699693267/xiaomi_d8r3nt.png",
  },
  {
    id: 5,
    title: "Auxiliar administrativo y Logística",
    company: "Air Europa",
    description: [
      "Control de la mercancia, entrega y colocación de los elementos del almacén.",
      "Mantenimiento del stock adecuado en sistema y fisicamente.",
      "Coordinación de tareas para el buen funcionamiento del turno de trabajo.",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699693646/airEuropa_csawln.png",
  },
];
const studiosList = [
  {
    id: 1,
    title: "Bootcamp fullstack",
    school: "Upgrade Hub",
    description: [
      "Lenguajes de programación aprendidos: HTML, CSS, Javascript, NodeJS y PHP",
      "Frameworks: Reactjs, Angular, Symfony",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699692855/upgrade_hub_zfudhj.png",
  },
  {
    id: 2,
    title: "Máster MBA",
    school: "EAE Business School",
    description: [
      "Conocimientos a nivel global de la empresa y el mercado en el que se desenvuelve",
      "Gestión de equipos con capacidad de liderazgo.",
      "Desarrollo de competencias y mentalidad innovadora.",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699691701/EAE-Business-School_wtzms6.png",
  },
  {
    id: 3,
    title: "Grado en Comercio",
    school: "Universidad Complutense de Madrid",
    description: [
      "Conocimientos a nivel global de la empresa y el mercado en el que se desenvuelve",
      "Gestión de equipos con capacidad de liderazgo.",
      "Desarrollo de competencias y mentalidad innovadora.",
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699692859/ucm_jud3w4.png",
  },
  {
    id: 4,
    title: "Piloto de drones A1",
    school: "Aerocámaras",
    description: [
      "Conocimientos teóricos en funcionamiento y conducción de drones",
      "Responsabilidades legales y de mantenimiento del dispositivo"
    ],
    img: "https://res.cloudinary.com/manuelcodex/image/upload/v1699693265/aerocamaras_fldriu.jpg",
  },
];
const projectList = document.getElementById("projectList");

projectsListado.forEach((project) => {
  const unitProject = document.createElement("div");
  unitProject.classList.add("div-item");
  unitProject.setAttribute("id", `project${project.id}`);

  const ulStack = document.createElement("div");

  project.stack.forEach((tecnologia) => {
    const liTecnologia = document.createElement("img");
    liTecnologia.src = tecnologia;
    liTecnologia.classList.add("stackImage");
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
    `;
  unitProject.appendChild(ulStack);
  projectList.appendChild(unitProject);
});

const experienciaDiv = document.getElementById("experiencia");
const experienceContainer = document.getElementById("divDos");
const projectsContainer = document.getElementById("projects");
const studiesDiv = document.getElementById("studies");
const contactDiv = document.getElementById("contact");

experienciaDiv.addEventListener("click", function () {
  experienceContainer.innerHTML = "";
  experienceContainer.style.display = "block";
  experienceList.forEach((experiencia) => {
    const proyectoDiv = document.createElement("div");
    proyectoDiv.className = "card-divDos";
    projectsContainer.style.display = "none";

    const ulExperiencie = document.createElement("ul");
    experienceContainer.scrollIntoView({behavior: "smooth"});
    experiencia.description.forEach((experience) => {
        const liExperience = document.createElement("li");
        liExperience.classList.add("li-divDos");
        liExperience.textContent = experience;
        ulExperiencie.appendChild(liExperience);
      });

    proyectoDiv.innerHTML = `
            <h2 class="title-divDos">${experiencia.title}</h2>
            <h2 class="title2-divDos">${experiencia.company}</h2>
            <div class="second-divDos">
                <img class="imagen-divDos" src="${experiencia.img}" alt="${experiencia.title}" />
            </div>
            `;
    proyectoDiv.querySelector(".second-divDos").appendChild(ulExperiencie);
    experienceContainer.appendChild(proyectoDiv);
  });
  experienceContainer.style.display = "block";
  projectsContainer.style.display = "none";
});

studiesDiv.addEventListener("click", function () {
  experienceContainer.innerHTML = "";
  experienceContainer.style.display = "block";
  studiosList.forEach((studio) => {
    const proyectoDiv = document.createElement("div");
    proyectoDiv.className = "card-divDos";
    projectsContainer.style.display = "none";

    const ulStudy = document.createElement("ul");

    experienceContainer.scrollIntoView({behavior: "smooth"});

    studio.description.forEach((study) => {
        const liStudy = document.createElement("li");
        liStudy.classList.add("li-divDos");
        liStudy.textContent = study;
        ulStudy.appendChild(liStudy);
      });
    proyectoDiv.innerHTML = `
            <h2 class="title-divDos">${studio.title}</h2>
            <h2 class="title2-divDos">${studio.school}</h2>
            <div class="second-divDos">
            <img class="imagen-divDos" src="${studio.img}" alt="${studio.title}" />
            </div>

            `;
    proyectoDiv.querySelector(".second-divDos").appendChild(ulStudy);
    experienceContainer.appendChild(proyectoDiv);
  });
  experienceContainer.style.display = "block";
  projectsContainer.style.display = "none";
});

contactDiv.addEventListener("click", function () {
  experienceContainer.innerHTML = "";
  experienceContainer.style.display = "block";

    const proyectoDiv = document.createElement("form");
    proyectoDiv.className = "form-divDos";
    projectsContainer.style.display = "none";



    proyectoDiv.innerHTML = `
    <label class="form-label" for="nombre">Nombre:</label>
    <input class="form-input" type="text" id="nombre" name="nombre" required>

    <label class="form-label" for="telefono">Teléfono:</label>
    <input class="form-input" type="tel" id="telefono" name="telefono" required>

    <label class="form-label" for="email">Correo Electrónico:</label>
    <input class="form-input" type="email" id="email" name="email" required>

    <label class="form-label" for="mensaje">Mensaje:</label>
    <textarea class="form-textarea" id="mensaje" name="mensaje" rows="4" required></textarea>

    <button class="form-button" type="submit">Enviar</button>
            </div>

            `;
    experienceContainer.appendChild(proyectoDiv);
    experienceContainer.scrollIntoView({behavior: "smooth"});
  experienceContainer.style.display = "block";
  projectsContainer.style.display = "none";
});


