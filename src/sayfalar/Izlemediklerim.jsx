// src/sayfalar/Izlemediklerim.js
import { Typography, Grid, Container } from "@mui/material";
import FilmKartı from "../bileşenler/FilmKartı";

const Izlemediklerim = ({ filmler, kaldır }) => {// filmler ve kaldır fonksiyonunu prop olarak alıyoruz filmKartıdan
  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>İzlemediğim Filmler</Typography>
      <Grid container spacing={2}>
        {filmler.map((film) => (
          <Grid item key={film.id}>
            <FilmKartı film={film} kaldirFonk={kaldır} gösterButonlar={false} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Izlemediklerim;
