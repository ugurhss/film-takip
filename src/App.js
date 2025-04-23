// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Anasayfa from "./sayfalar/Anasayfa";
import Izlediklerim from "./sayfalar/Izlediklerim";
import Izlemediklerim from "./sayfalar/Izlemediklerim";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Container
} from "@mui/material";

function App() {
  const [izlediklerim, setIzlediklerim] = useState([]);
  const [izlemediklerim, setIzlemediklerim] = useState([]);

  // Film izlediklerime ekle
  const izlediklerimEkle = (film) => {
    if (!izlediklerim.find((f) => f.id === film.id)) {
      setIzlediklerim([...izlediklerim, film]);
    }
  };

  // Film izlemediklerime ekle
  const izlemediklerimEkle = (film) => {
    if (!izlemediklerim.find((f) => f.id === film.id)) {
      setIzlemediklerim([...izlemediklerim, film]);
    }
  };

  // İzlenen film sil
  const izlediktenKaldir = (id) => {
    setIzlediklerim(izlediklerim.filter((f) => f.id !== id));
  };

  // İzlenmeyen film sil
  const izlemediktenKaldir = (id) => {
    setIzlemediklerim(izlemediklerim.filter((f) => f.id !== id));
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Film Takip
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" component={Link} to="/">Anasayfa</Button>
            <Button color="inherit" component={Link} to="/izlediklerim">İzlediklerim</Button>
            <Button color="inherit" component={Link} to="/izlemediklerim">İzlemediklerim</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Anasayfa
                izlediklerimEkle={izlediklerimEkle}
                izlemediklerimEkle={izlemediklerimEkle}
              />
            }
          />
          <Route
            path="/izlediklerim"
            element={
              <Izlediklerim
                filmler={izlediklerim}
                kaldır={izlediktenKaldir}
              />
            }
          />
          <Route
            path="/izlemediklerim"
            element={
              <Izlemediklerim
                filmler={izlemediklerim}
                kaldır={izlemediktenKaldir}
              />
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
