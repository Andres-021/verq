import search from './Search';
import movie from './movie';
import tv from './tv';

const api = {
  search,
  movie,
  tv,

  getQueryImg: async (path) => {
    try{
      if(path === null || path === undefined){
        return;
      }
      
      const res = await fetch(`https://image.tmdb.org/t/p/original${path}`);
      if(res.status === 200){
        return res;
      }
    }catch(e){
      console.log('catch img: ',e);
    }
  },
}

export default api;