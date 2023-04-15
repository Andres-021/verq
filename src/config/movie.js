const api_key = 'fc0beb428ef70ac4c7f4059545ac7e3e'
const language = 'es' //localStorage.getItem('language');
const dataInfo = {};


const callApi = async(data, options = {}) =>{
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const {url ,search} = data;
  try{
    const res = await fetch(`https://api.themoviedb.org/3${url}?api_key=${api_key}${search}&language=es&include_image_language=es`, options);

    if(res.status === 404){
      console.log(res);
    }

    // Codigo correcto
    if(res.status === 200){  
      const jsondata = res.json();
      return jsondata;
    }

  }catch(e){
    console.log(e);
  }
}

const movie = {
  // Obtener peliculas buscadas, y paginas de las mismas.
  getQueryMovies: (movie, page) => {

    /*
      -- Parametros
      @search: string. /Entrega el nombre de la consulta
      page: int. /Entrega el numero de pagina, si es 0 no se realiza peticion de pagina.
    */ 
    // Creamos la variable que necesitemos en el objeto dataInfo.
    dataInfo.url = '/search/movie';
    dataInfo.search = `&query=${movie}&page=${page}`;
    const res = callApi(dataInfo);
    return res;
  },

  // Obtener detalles de peliculas con id
  getDetailsMovies: async (movie_id) => {
    dataInfo.url = `/movie/${movie_id}`;
    dataInfo.search = '';

    const res = await callApi(dataInfo);
    return res;
  },

  getPopularMovies: async (page) => {
    dataInfo.url = `/movie/popular`;
    dataInfo.search = `&page=${page}`;

    const res = await callApi(dataInfo);
    return res;
  },

  getTopRatedMovies: async (page) => {
    dataInfo.url = `/movie/top_rated`;
    dataInfo.search = `&page=${page}`;

    const res = await callApi(dataInfo);
    return res;
  },

  getLatestMovies: async () => {
    dataInfo.url = `/movie/latest`;
    dataInfo.search = ``;

    const res = await callApi(dataInfo);
    return res;
  }
}

export default movie;