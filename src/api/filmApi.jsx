// src/api/filmApi.js
import axios from 'axios';

const anaURL = "https://api.themoviedb.org/3";
const apiAnahtarı = "53c316d271793916cb684e4813bb7025";

export const filmleriGetir = async () => {
  try {
    const cevap = await axios.get(`${anaURL}/movie/popular?api_key=${apiAnahtarı}&language=tr-TR&page=1`);
    return cevap.data.results;
  } catch (hata) {
    console.error("Film verileri alınamadı", hata);
    return [];
  }
};
