// src/api/filmApi.js
import axios from 'axios';
import Swal from 'sweetalert2';


const anaURL = "https://api.themoviedb.org/3";
const apiAnahtarı = "53c316d271793916cb684e4813bb7025";

export const filmleriGetir = async () => {
  try {
    const cevap = await axios.get(`${anaURL}/movie/popular?api_key=${apiAnahtarı}`); //buradda istek atarak film verilerini alıyoruz
    return cevap.data.results; // gelen verileri döndürüyoruz
  } catch (hata) { // hata durumunda hata mesajını alert ile gösteriyoruz
    Swal.fire({
      icon: 'error',
      title: 'Hata!',
      text: 'Film verileri alınamadı.',
      showConfirmButton: false,
      timer: 2500,
    });
   
  }
};
