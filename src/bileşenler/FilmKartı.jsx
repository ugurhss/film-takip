// src/bileşenler/FilmKartı.js
import { Card, CardMedia, CardContent, Typography, Button, Stack } from "@mui/material";
import Swal from 'sweetalert2';

const FilmKartı = ({// film, // film objesi prop olarak alınıyor yukarıdan 
  film,
  izledimEkle,
  izlemedimEkle,
  kaldirFonk,
  gösterButonlar = true
}) => {

  const izledimTikla = () => {//click event ile izledimEkle fonksiyonunu çağırıyoruz
    izledimEkle(film);
    Swal.fire({
      icon: 'success',
      title: 'İzlediklerime eklendi!',
      text: film.title,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const izlemedimTikla = () => {
    izlemedimEkle(film);
    Swal.fire({
      icon: 'success',
      title: 'İzlemediklerime eklendi!',
      text: film.title,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const kaldırTikla = () => {
    kaldirFonk(film.id);
    Swal.fire({
      icon: 'warning',
      title: 'Listeden kaldırıldı!',
      text: film.title,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <Card sx={{ maxWidth: 250, m: 2 }}>
      <CardMedia
        component="img"
        height="350"
        image={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
      <CardContent>
        <Typography variant="h6">{film.title}</Typography>
        <Stack direction="row" spacing={1} mt={1}>
          {gösterButonlar ? (
            <>
              <Button variant="contained" color="success" onClick={izledimTikla}>İzledim</Button>
              <Button variant="contained" color="error" onClick={izlemedimTikla}>İzlemedim</Button>
            </>
          ) : (
            <Button variant="outlined" color="warning" onClick={kaldırTikla}>Kaldır</Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
// askdjasjkd

export default FilmKartı;
