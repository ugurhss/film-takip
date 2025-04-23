import React, { useEffect, useState } from "react";
import { filmleriGetir } from "../api/filmApi";
import FilmKartı from "../bileşenler/FilmKartı";
import { Grid, Typography, Container, TextField } from "@mui/material";

const Anasayfa = ({ izlediklerimEkle, izlemediklerimEkle }) => {// izlediklerimEkle ve izlemediklerimEkle fonksiyonlarını prop olarak alıyoruz
  const [filmler, setFilmler] = useState([]); // filmler state'i
  const [arama, setArama] = useState("");// arama state'i

  useEffect(() => {// sayfa ilk yüklendiğinde çalışır
    const veriyiGetir = async () => { // veriyiGetir fonksiyonu api'den veri çekmek için
      const gelenFilmler = await filmleriGetir();
      setFilmler(gelenFilmler);
    };

    veriyiGetir();
  }, []);

  const filtrelenmişFilmler = filmler.filter(f =>
    f.title.toLowerCase().includes(arama.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" mt={4} mb={2}>Popüler Filmler</Typography>
      <TextField
        label="Film Ara"
        variant="outlined"
        fullWidth
        margin="normal"
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      />
      <Grid container spacing={2}>
        {filtrelenmişFilmler.map((film) => (
          <Grid item key={film.id}>
            <FilmKartı
              film={film}
              izledimEkle={izlediklerimEkle}
              izlemedimEkle={izlemediklerimEkle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Anasayfa;
