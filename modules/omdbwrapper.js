import axios from "axios";

const CLAVE_API = "461144a4";
const buscarOMDBPorPagina = async (textoBusqueda, pagina = 1) => {
    let resultado = {
        exito: false,
        totalResultados: 0,
        datos: []
    };

    try {
        const respuesta = await axios.get("http://www.omdbapi.com/", {
            params: {
                s: textoBusqueda, 
                page: pagina, 
                apikey: CLAVE_API 
            }
        });

        if (respuesta.data.Response === "True") {
            resultado.exito = true;
            resultado.totalResultados = respuesta.data.totalResults;
            resultado.datos = respuesta.data;
        }
    } catch (error) {
        console.error("Error al buscar por página:", error);
    }

    return resultado;
};

const buscarOMDBCompleto = async (textoBusqueda) => {
    let resultado = {
        exito: false,
        totalResultados: 0,
        datos: []
    };
    
    try {
        const respuesta = await axios.get("http://www.omdbapi.com/", {
            params: {
                s: textoBusqueda, 
                apikey: CLAVE_API 
            }
        });
        
        if (respuesta.data.Response === "True") {
            resultado.exito = true;
            resultado.totalResultados = respuesta.data.totalResults;
            resultado.datos = respuesta.data;
        }
    } catch (error) {
        console.error("Error al buscar completamente:", error);
    }
    
    return resultado;
};

const obtenerOMDBPorImdbID = async (imdbID) => {
    let resultado = {
        exito: false,
        totalResultados: 0,
        datos: {}
    };
    
    try {
        const respuesta = await axios.get("http://www.omdbapi.com/", {
            params: {
                i: imdbID, 
                apikey: CLAVE_API 
            }
        });
        
        if (respuesta.data.Response === "True") {
            resultado.exito = true;
            resultado.datos = respuesta.data;
        }
    } catch (error) {
        console.error("Error al obtener por IMDb ID:", error);
    }
    
    return resultado;
};

export { buscarOMDBPorPagina, buscarOMDBCompleto, obtenerOMDBPorImdbID };