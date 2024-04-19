import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { PeliculaAdmin } from "../../componentes/peliculas/PeliculaAdmin";
import { PeliculaCrear } from "../../componentes/peliculas/PeliculaCrear";
import { PeliculaListar } from "../../componentes/peliculas/PeliculaListar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/peladm" element={<PeliculaAdmin />} />
      <Route path="/pelcrear" element={<PeliculaCrear />} />
      <Route path="/pelilist" element={<PeliculaListar />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
