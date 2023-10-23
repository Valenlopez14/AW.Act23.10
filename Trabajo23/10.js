const carrera = {
    nombre: "Analista de Sistemas",
    duracion : 3,
    semestres:[
     {
        semestre:1,
        materias:[
            {
                nombre: "Programacion Logica I", promocionable: true},
            {nombre: "Laboratorio de Programacion I", promocionable: true},
            {nombre: "Ingles I", promocionable: true},
            {nombre: "Algebra", promocionable: true},
            {nombre: "Hardware", promocionable: true},
        ],
    },
        {
            semestre:2,
            materias:[
                {nombre: "Programacion Logica II", promocionable: true},
                {nombre: "Laboratorio de Programacion II", promocionable: true},
                {nombre: "Ingles II", promocionable: true},
                {nombre: "Matematica Discreta", promocionable: true},
                {nombre: "Expresion Oral y Escrita", promocionable: true},
            ],
        },
        {
            semestre:3,
            materias:[
                {nombre:"Laboratorio de Programacion III", promocionable: true},
                {nombre:"Principios de Administracion", promocionable: true},
                {nombre:"Sistemas Operativos", promocionable: true},
                {nombre:"Estructura de Datos", promocionable: true},
            ],
        },
        {
            semestre:4,
            materias:[
                {nombre:"Redes y Comunicaciones", promocionable: true},
                {nombre:"Probabilidad y Estadistica", promocionable: true},
                {nombre:"Aplicaciones Web I", promocionable: false},
                {nombre:"Etica y Deontologia ", promocionable: true},
                {nombre:"Bases de Datos I", promocionable: true},
            ],
        },
        {
            semestre:5,
            materias:[
                {nombre: "Analisis de Sistemas", promocionable: true},
                {nombre: "Aplicaciones Web II", promocionable: false},
                {nombre: "Bases de Datos II", promocionable: true},
                {nombre: "Seminario I", promocionable: false},
            ],
        },
        {
            semestre:6,
            materias:[
                {nombre: "Ingenieria de Software", promocionable: true},
                {nombre: "Mercadotecnia", promocionable: false},
                {nombre: "Interfaz Gráfica", promocionable: true},
                {nombre: "Seminario II", promocionable: false},
            ],
        },

    ]

}
function obtenerMateriasPromocionables(carrera) {
    const materiasPromocionables = [];
  
    // Recorremos los semestres
    carrera.semestres.forEach((semestre) => {
      // Recorremos las materias de cada semestre
      semestre.materias.forEach((materia) => {
        if (materia.promocionable) {
          materiasPromocionables.push(materia.nombre);
        }
      });
    });
  
    return materiasPromocionables;
  }
  
  const materiasPromocionables = obtenerMateriasPromocionables(carrera);
  
  console.log("Materias Promocionables:");
  materiasPromocionables.forEach((materia) => {
    console.log(materia);
  });
