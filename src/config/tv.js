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
    const res = await fetch(`https://api.themoviedb.org/3${url}?api_key=${api_key}${search}&language=es`, options);

    // Codigo correcto
    if(res.status === 200){  
      const jsondata = await res.json();
      return jsondata;
    }

  }catch(e){
    console.log(e);
  }
}

const api_tv = {
  // Obtener peliculas buscadas, y paginas de las mismas.
  getQueryTVs: async (movie, page) => {

    /*
      -- Parametros
      search: string. /Entrega el nombre de la consulta
      page: int. /Entrega el numero de pagina, si es 0 no se realiza peticion de pagina.
    */ 
  
    dataInfo.url= '/search/tv';
    dataInfo.search = `&query=${movie}&page=${page}`;
    
    const res = await callApi(dataInfo);
    return res;
  },

  // Obtener detalles de peliculas con id
  getDetailsTVs: async (id) => {
    dataInfo.url = `/tv/${id}`;
    dataInfo.search = '';

    const res = await callApi(dataInfo);
    return res;
  },

  getPopularTvs: async (page) => {
    dataInfo.url = `/tv/popular`;
    dataInfo.search = `&page=${page}`;

    const res = await callApi(dataInfo);
    return res;
  },

  getTopRatedTvs: async (page) => {
    dataInfo.url = `/tv/top_rated`;
    dataInfo.search = `&page=${page}`;

    const res = await callApi(dataInfo);
    return res;
  },

  getLatestTvs: async() => {
    dataInfo.url = `/tv/latest`;
    dataInfo.search = ``;

    const res = await callApi(dataInfo);
    return res;
  }
}

export default api_tv;