const galeria = [
  {
    colecction: 'Destacado',
    nColeccion: 0,
    inventario: [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-2.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-3.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-6.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'Z-experience',
    nColeccion: 1,
    inventario: [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-1.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-2.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-3.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-4.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-5.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-6.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-7.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-experience-8.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'TopChicas',
    nColeccion: 2,
    inventario: [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-4.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-2.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-5.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'Chicas',
    nColeccion: 3,
    inventario : [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-1.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-2.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-3.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-4.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-5.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-6.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-7.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicas-8.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'TopChicos',
    nColeccion: 5,
    inventario : [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-1.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-5.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-6.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'Chicos',
    nColeccion: 5,
    inventario : [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-1.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-2.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-3.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-4.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-5.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-6.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-7.jpg' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/colection-chicos-8.jpg' alt=''></div>"
      }
    ]
  },
  {
    colecction: 'Camisetas',
    nColeccion: 6,
    inventario : [
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/camiseta-1.png' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/camiseta-2.png' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/camiseta-3.png' alt=''></div>"
      },
      {
        descipcion: '',
        html: "<div><img src='src/imagenes/camiseta-4.png' alt=''></div>"
      },
    ]
  }
]
const colDestacada = document.getElementById('colecDestacada'),
colChicas = document.getElementById('colecChicas'),
colChicos = document.getElementById('colecChicos')

const zExp = document.getElementById('zExp'),
chicas = document.getElementById('chicas'),
chicos = document.getElementById('chicos'),
camisetas = document.getElementById('camisetas')

$(document).ready(function() {
  galeria[0].inventario.forEach(prenda => {
    colDestacada.innerHTML += prenda.html
  });
  galeria[1].inventario.forEach(prenda => {
    zExp.innerHTML += prenda.html
  });
  galeria[2].inventario.forEach(prenda => {
    colChicas.innerHTML += prenda.html
  });
  galeria[3].inventario.forEach(prenda => {
    chicas.innerHTML += prenda.html
  });
  galeria[4].inventario.forEach(prenda => {
    colChicos.innerHTML += prenda.html
  });
  galeria[5].inventario.forEach(prenda => {
    chicos.innerHTML += prenda.html
  });
  galeria[6].inventario.forEach(prenda => {
    camisetas.innerHTML += prenda.html
  });
})

// Funcionalidad del navbar lateral
const viewMain = document.getElementById('viewMain'),
viewLanding = document.getElementById('viewLanding'),
viewColection = document.getElementById('viewColection'),
viewAbout = document.getElementById('viewAbout'),
vistas = [
  {
    tittle: 'viewMain',
    document: viewMain,
  },
  {
    tittle: 'viewLanding',
    document: viewLanding,
  },
  {
    tittle: 'viewColection',
    document: viewColection,
  },
  {
    tittle: 'viewAbout',
    document: viewAbout,
  }
]
function goTo (seccion) {
  vistas.forEach(vista => {
    if (!vista.document.classList.contains('hidde')) {
      vista.document.classList.add('hidde')
      window
    }
    if (seccion === vista.tittle) {
      vista.document.classList.remove('hidde')
    }
  });
}

 // Mostrar y ocultar nav de las secciones
const navSection = document.getElementById("nav"), navSection2 = document.getElementById("nav2")
let scroll = window.pageYOffset;
window.onscroll = function() {
  let actualScroll = window.pageYOffset;
  if (scroll > actualScroll) {
    navSection.classList.add("shownav");
    navSection2.classList.add("shownav");
  } else {
    navSection.classList.remove("shownav");
    navSection2.classList.remove("shownav");
  }
  scroll = actualScroll;
}

// Acción de scroll en las secciones
const Texp = document.getElementById("Texp"),
Tchicas = document.getElementById("Tchicas"),
Tchicos = document.getElementById("Tchicos"),
Tcamisetas = document.getElementById("Tcamisetas"),
Tequipo = document.getElementById("Tequipo"),
Tstory = document.getElementById("Tstory"),
Tcontact = document.getElementById("Tcontact")

function scrollToSection(section) {
  if (section == 'exp') {
    Texp.scrollIntoView({ block: "start" });
  }
  if (section == 'chicas') {
    Tchicas.scrollIntoView({ block: "start" });
  }
  if (section == 'chicos') {
    Tchicos.scrollIntoView({ block: "start" });
  }
  if (section == 'camisetas') {
    Tcamisetas.scrollIntoView({ block: "start" });
  }
  if (section == 'equipo') {
    Tequipo.scrollIntoView({ block: "start" });
  }
  if (section == 'story') {
    Tstory.scrollIntoView({ block: "start" });
  }
  if (section == 'contact') {
    Tcontact.scrollIntoView({ block: "start" });
  }
}

// Clase que indica la seccione en la que se encuentra el usuario
const navExp = document.getElementById("navExp"),
navChicas = document.getElementById("navChicas"),
navChicos = document.getElementById("navChicos"),
navCamisetas = document.getElementById("navCamisetas"),
navEquipo = document.getElementById("navEquipo"),
navStory = document.getElementById("navStory"),
navContact = document.getElementById("navContact")

const sectionActive = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      if (entrada.target.id == "zExp") {
        navExp.classList.add("active")
      }
      if (entrada.target.id == "chicas") {
        navChicas.classList.add("active")
      }
      if (entrada.target.id == "chicos") {
        navChicos.classList.add("active")
      }
      if (entrada.target.id == "camisetas") {
        navCamisetas.classList.add("active")
      }
      if (entrada.target.id == "equipo") {
        navEquipo.classList.add("active")
      }
      if (entrada.target.id == "story") {
        navStory.classList.add("active")
      }
      if (entrada.target.id == "contact") {
        navContact.classList.add("active")
      }
    }
    if (!entrada.isIntersecting) {
      if (entrada.target.id == "zExp") {
        navExp.classList.remove("active")
      }
      if (entrada.target.id == "chicas") {
        navChicas.classList.remove("active")
      }
      if (entrada.target.id == "chicos") {
        navChicos.classList.remove("active")
      }
      if (entrada.target.id == "camisetas") {
        navCamisetas.classList.remove("active")
      }
      if (entrada.target.id == "equipo") {
        navEquipo.classList.remove("active")
      }
      if (entrada.target.id == "story") {
        navStory.classList.remove("active")
      }
      if (entrada.target.id == "contact") {
        navContact.classList.remove("active")
      }
    }
  });
  },
  colection = new IntersectionObserver(sectionActive, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

colection.observe(document.getElementById("zExp"));
colection.observe(document.getElementById("chicas"));
colection.observe(document.getElementById("chicos"));
colection.observe(document.getElementById("camisetas"));
colection.observe(document.getElementById("equipo"));
colection.observe(document.getElementById("story"));
colection.observe(document.getElementById("contact"));

// window.onload = function () {
//   console.log(typeof colDestacada)
//   console.log(colDestacada.innerHTML += galeria[0].inventario[3].html)
// };

// document.addEventListener('DOMContentLoaded', function () {
//   console.log('owo')
// })