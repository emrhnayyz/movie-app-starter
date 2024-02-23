import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovie(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <MovieContext.Provider value={{ movie, loading, getMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;


// Bu sayfa, TMDB API'sini kullanarak film verilerini almak ve bu verilere erişimi sağlamak için bir film bağlamı sağlar.

// İşlevleri şunlardır:

// getMovies: API tarafından sağlanan URL'ye bir HTTP GET isteği yapar ve film verilerini alır. Veriler res.data.results üzerinden ayarlanır ve setMovie işlevi kullanılarak film durumu güncellenir. Hata durumunda hataları konsola yazdırır. İstek tamamlandığında setLoading(false) işlevi kullanılarak yükleme durumu güncellenir.