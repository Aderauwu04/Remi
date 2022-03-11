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
  // Llenar la galería de inicio y las colecciones
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
  // Funcionalidad con la base de datos de los formularios
  // Formulario de registro
  $('#formulario-registro').submit(function (e) {
    const datos = {
      name: $('#name').val(),
      apellido: $('#apellido').val(),
      email: $('#email').val(),
      direccion: $('#direccion').val(),
      gustos: $('#gustos').val(),
    };
    console.log(datos);
    $.post('back/agregarRegistro.php', datos, function (response) {
      console.log(response);
      $('#formulario-registro').trigger('reset');
    });
    e.preventDefault();
  });
  // Formulario de contacto
  $('#formulario-contacto').submit(function (e) {
    const datos = {
      name: $('#name-contact').val(),
      apellido: $('#apellido-contact').val(),
      email: $('#email-contact').val(),
      telefono: $('#tel-contact').val(),
      direccion: $('#direccion-contact').val(),
      motivo: $('#motivo-contact').val()
    };
    console.log(datos);
    $.post('back/agregarContacto.php', datos, function (response) {
      console.log(response);
      $('#formulario-contacto').trigger('reset');
    });
    e.preventDefault();
  });
})

// Funcionalidad del navbar lateral
const vistas = [
  {
    tittle: 'viewMain',
    document: document.getElementById('viewMain'),
  },
  {
    tittle: 'viewLanding',
    document: document.getElementById('viewLanding'),
  },
  {
    tittle: 'viewColection',
    document: document.getElementById('viewColection'),
  },
  {
    tittle: 'viewAbout',
    document: document.getElementById('viewAbout'),
  }
],
html = document.querySelector('html')
function goTo (seccion, noTop) {
  vistas.forEach(vista => {
    if (!vista.document.classList.contains('hidden')) {
      vista.document.classList.add('hidden')
      vista.document.classList.remove('show')
    }
    if (seccion === vista.tittle) {
      html.setAttribute('style', 'scroll-behavior: auto');
      vista.document.classList.remove('hidden')
      vista.document.classList.add('show')
    }
  });
  html.scrollIntoView({ block: "start", behavior: "auto" })
}

// Acción de scroll en las secciones
const secciones = [
  {
    tittle: 'main',
    document: document.getElementById("viewMain"),
  },
  {
    tittle: 'exp',
    document: document.getElementById("Texp"),
  },
  {
    tittle: 'chicas',
    document: document.getElementById("Tchicas"),
  },
  {
    tittle: 'chicos',
    document: document.getElementById("Tchicos"),
  },
  {
    tittle: 'camisetas',
    document:document.getElementById("Tcamisetas"),
  },
  {
    tittle: 'equipo',
    document: document.getElementById("Tequipo"),
  },
  {
    tittle: 'story',
    document: document.getElementById("Tstory"),
  },
  {
    tittle: 'contact',
    document: document.getElementById("Tcontact"),
  }
]
function scrollToSection(section, toTop) {
  secciones.forEach(tittle => {
    if (section == tittle.tittle) {
      tittle.document.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    if (toTop) {
      html.scrollIntoView({ block: "start", behavior: "auto" })
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