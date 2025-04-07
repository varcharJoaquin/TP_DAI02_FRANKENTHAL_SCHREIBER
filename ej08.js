import { buscarOMDBPorPagina, buscarOMDBCompleto, obtenerOMDBPorImdbID } from './modules/omdbwrapper.js';

let resultado = null;

resultado = await buscarOMDBPorPagina("cars", 1);
console.log("buscarOMDBPorPagina", resultado.datos);

resultado = await buscarOMDBCompleto("Batman");
console.log("buscarOMDBCompleto", resultado.datos);

resultado = await obtenerOMDBPorImdbID("tt0111161"); 
console.log("obtenerOMDBPorImdbID", resultado.datos);