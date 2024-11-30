import axios from "axios";
const API_KEY = "ddcba6bca26d61b32f95b83c6e02ff25";
const BASE_URL = "http://api.themoviedb.org/3";

export const getMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const searchMovies = async (query: string) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}`,
    {
      params: {
        query: query,
      },
    }
  );
  return response.data.results;
};
