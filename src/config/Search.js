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

const search = {
  getQueryMovies: (movie, page) => {
    dataInfo.url = '/search/movie';
    dataInfo.search = `&query=${movie}&page=${page}`;

    const res = callApi(dataInfo);
    return res;
  },
  getQueryTVs: async (movie, page) => {
    dataInfo.url= '/search/tv';
    dataInfo.search = `&query=${movie}&page=${page}`;
    
    const res = await callApi(dataInfo);
    return res;
  },
}

export default search;