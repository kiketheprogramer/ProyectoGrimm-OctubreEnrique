
var personajes = [
    { id: 1, nombre: "Blutbad", imagenURL: "Imagenes/ImgBlutbad.jpg",peligrosidad: "Peligroso",tipo: "Lobo", descripcion: "Al transformarse las manos se cubren por pelo hasta los dedos, los dientes se hacen más grandes y agúdos. Los músculos de la mandíbula se hacen más gruesos y la musculatura lumbar se torna más gruesa y fuerte; sin embargo la espalda baja queda expuesta.", notas: "Físicamente tienen una fuerza y velocidad increíble, poseen una vista , olfato y audición sobrehumanos capaz de olfatear una persona a dos kilómetros de distancia. También tienen una resistencia y durabilidad muy grande a los golpes y una agilidad sobrehumana capaz de esquivar golpes de un Grimm." },
    { id: 2, nombre: "Lowen", imagenURL: "Imagenes/ImgLowen.jpg",peligrosidad: "Violento",tipo: "Leon", descripcion: "A los Löwen varones jóvenes les crece pelo largo que cuelga como una melena, mientras que a los Löwen adultos les crecen grandes melenas tupidas. También les crecen garras y dientes afilados, sus pies optan una forma más animalesca y sus ojos cambian a un color dorado o verde según la luz y su nariz adopta características felinas. ",notas: "Debido a su gran agilidad, pueden realizar saltos similares a los de un león, así como moverse con una sigiles increíble, permitiéndoles acercarse sigilosamente a las víctimas al igual que cazan los leones y sorprender incluso a un Grimm y a un Blutbad en otra ocasión." },
    { id: 3, nombre: "Spinnetod",imagenURL: "Imagenes/ImgSpinnetod.jpg",peligrosidad: "Neutral",tipo: "Araña", descripcion: "Al transformarse, sus ojos crecen y se tornan oscuros incluidos la esclerática y el iris. De sus bocas sobresalen dos grandes colmillos llamados quelíceros, pero su dentadura inferior permanece de forma humana; sus manos se arrugan y cambian a un color grisáceo.",notas: " Son extremadamente ágiles y veloces, más que cualquier humano, también poseen mucha fuerza." },
    { id: 4, nombre: "Ziegevolk",imagenURL: "Imagenes/ImgZiegevolk.jpg", peligrosidad: "Pacifico",tipo: "Cabra", descripcion: "Les crece pelo en todo su cuerpo y dos cuernos al final de la cabeza. Las orejas se vuelven largas y  puntiagudas, los colmillos se alargan y le crece una barba larga y los labios se vuelven de color rojo.",notas: "Poseen una velocidad y agilidad sobrehumana, al igual que las cabras y pueden saltar más alto y a más distancia que la común incluso en su forma humana. Sin embargo, no son mas fuertes o mas resistentes que los humanos." },
    { id: 5, nombre: "Mellifer",imagenURL: "Imagenes/ImgMellifer.jpg", peligrosidad: "Pacifico",tipo: "Abeja", descripcion: "Cambian su apariencia a tener los ojos grandes y oscuros (como ojos de cualquier insecto), dos pequeñas antenas aparecen arriba en su frente, en sus barbillas salen dos pequeñas mandíbulas e incluso, les crece cabello.",notas: "Los Mellifer tienen una mentalidad de enjambre. Viven en grupos pequeños de Mellifer liderados por una Mellischwuler, que es la abeja reina." },
    { id: 6, nombre: "Mauzhertz",imagenURL: "Imagenes/ImgMauzhertz.jpg", peligrosidad: "Pacifico",tipo: "Raton", descripcion: "Se transforman en una especie de raton humano",notas: "Representan a los Ratones dentro de la saga" },
    { id: 7, nombre: "Mordstier",imagenURL: "Imagenes/ImgMordstier.jpg", peligrosidad: "Pacifico",tipo: "Toro", descripcion: "Tienen una apariencia de toro, con sus cuernos y con unas patas fornidas",notas: "Por lo general no les gusta la pelea, pero formaron parte de la segunda guerra mundial en el lado de los alemanes" },
    { id: 8, nombre: "Musai",imagenURL: "Imagenes/ImgMusai.jpg", peligrosidad: "Pacifico",tipo: "Musa", descripcion: "Su pelo se vuelve rojo y su piel brillante de un color verde azulado. Las Musai tienen ojos grandes y profundos de color azul y orejas puntiagudas similares a las de un elfo.",notas: "Los labios de la Musai secretan un tipo de substancia psicotrópica, el cual puede ser usado como antídoto medicinal." },
    { id: 9, nombre: "Nuckelavee",imagenURL: "Imagenes/ImgNuckleavee.jpg", peligrosidad: "Neutral",tipo: "Caballo", descripcion: "Su carne se vuelve mas densa y carnosa, sin piel, la cabeza se parece a la de un caballo con una melena. Las venas y tendones son visibles en la cara y cuello. Los dientes se vuelven cuadrados y amarillos, se hacen mas musculosos, un hocico de caballo, pezuñas y orejas mas puntiagudas y grandes ",notas: "No les importa llevar a cabo asesinatos o robos siempre y cuando lo hagan con éxito. Debido a eso son  muy útiles para las familias reales." },
    { id: 10, nombre: "Skalenzahne",imagenURL: "Imagenes/ImgSkalenzahne.jpg", peligrosidad: "Peligroso",tipo: "Cocodrilo", descripcion: "Su piel se cambia por una verde oscura, gruesa y escamosa. La mandíbula crece y se alarga y posee dientes puntiagudos. La nariz, las orejas y todo el pelo desaparece. Las manos se vuelven mas grandes y crecen garras con piel de reptil.",notas: "Poseen una fuerza increíble capaz de pelear con un Blutbad y mantener a raya a un Grimm, también poseen una resistencia y durabilidad sobrehumana. "},
];

document.addEventListener("DOMContentLoaded", function() {

    crearListaPersonajes();

});


function cargarInformacion(id, imagenURL) {
    var personaje = personajes.find(personaje => personaje.id === id);
    document.getElementById("nombre").value = personaje.nombre;
    document.getElementById("imagenURL").value = imagenURL;

    document.getElementById("peligrosidad").value = personaje.peligrosidad;
    document.getElementById("tipo").value = personaje.tipo;
    document.getElementById("descripcion").value = personaje.descripcion;
    document.getElementById("notas").value = personaje.notas;
} 

function crearListaPersonajes() {
    var listaPersonajes = document.getElementById("personajes");

    while (listaPersonajes.firstChild) {
        listaPersonajes.removeChild(listaPersonajes.firstChild);
    }

    personajes.forEach(personaje => {
        var elementoPersonaje = document.createElement("li");

        var imagenContainer = document.createElement("div");
        var imagen = document.createElement("img");
        imagen.src = personaje.imagenURL;
        imagen.alt = personaje.nombre;
        imagen.style.width = "150px";
        imagen.style.height = "150px";
        imagen.style.borderRadius = "75px";

        imagenContainer.appendChild(imagen);

        imagen.addEventListener("click", function() {
            cargarInformacion(personaje.id, personaje.imagenURL);
        });

        var nombreElemento = document.createElement("span");
        nombreElemento.innerText = personaje.nombre;
        nombreElemento.style.margin = "40px";
        nombreElemento.style.fontSize = "18px";

        elementoPersonaje.appendChild(imagenContainer);
        elementoPersonaje.appendChild(nombreElemento);

        listaPersonajes.appendChild(elementoPersonaje);
    });
}

//#region de añadir, modificar y borrar wessen
function AñadirPersonaje() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var peligrosidad = document.getElementById("peligrosidad").value;
    var tipo = document.getElementById("tipo").value;
    var descripcion = document.getElementById("descripcion").value;
    var notas = document.getElementById("notas").value;
    var imagenURL = document.getElementById("imagenURL").value;

    // Verificar que los campos requeridos no estén vacíos
    if (nombre && peligrosidad && tipo) {
        var nuevoPersonaje = {
            id: personajes.length + 1,
            nombre: nombre,
            peligrosidad: peligrosidad,
            tipo: tipo,
            descripcion: descripcion,
            notas: notas,
            imagenURL: imagenURL
        };

        personajes.push(nuevoPersonaje);

        crearListaPersonajes();

        // Restablecer los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("peligrosidad").value = "";
        document.getElementById("tipo").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("notas").value = "";
        document.getElementById("imagenURL").value = "";
    } else {
        alert("Por favor, complete los campos requeridos: Nombre, Peligrosidad y Tipo.");
    }
}
 function editarPersonaje(id) {
    var id = parseInt(document.getElementById("id").value);
    var index = personajes.findIndex(personaje => personaje.id === id);

    if (!isNaN(id)) {
        var index = personajes.findIndex(personaje => personaje.id === id);

        if (index !== -1) {
            personajes[index].nombre = document.getElementById("nombre").value;
            personajes[index].peligrosidad = document.getElementById("peligrosidad").value;
            personajes[index].tipo = document.getElementById("tipo").value;
            personajes[index].descripcion = document.getElementById("descripcion").value;
            personajes[index].notas = document.getElementById("notas").value;
            personajes[index].imagenURL = document.getElementById("imagenURL").value;
            crearListaPersonajes();
        } else {
            alert("Debe ingresar un Id de personaje para poder modificarlo");
        }
    }
    }
function eliminarPersonaje(id) {
    
    var id = parseInt(document.getElementById("id").value);

    if (!isNaN(id)) {
        var index = personajes.findIndex(personaje => personaje.id === id);

        if (index !== -1) {
            personajes.splice(index, 1);
            crearListaPersonajes();
        } else {
            alert("Debe ingresar un Id de personaje para poder borrarlo");
        }
    }
}
//#endregion
