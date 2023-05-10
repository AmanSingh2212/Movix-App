import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWMxNzc5ODFlNmYzMTI0YzYyMWM2ZWZkZDE2OTkxMCIsInN1YiI6IjY0MTljMjg5NmEyMjI3MDBlOTc2ZTM5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1mUuVMaSWidUmmuri06IVXY5gooXXaurPK0pcPPUlgw';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN ,
}

 const fetchDataFromApi = async (url, params) => {
    try{
      const {data} = await axios.get(BASE_URL + url, {
                  headers,
                  params
      })
       return data;
    }catch (err) {
        console.log(err);
        return err;
    }
}

export default fetchDataFromApi;