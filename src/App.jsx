import { Routes, Route } from "react-router-dom";
import { Layout, Inicio, Contacto,  Guia, GuiaInicial, GuiaJurisdiccion, Jueces, Error404, Boletines } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/boletines" element={<Boletines />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/jueces" element={<Jueces />} />
          <Route path="/guia" element={<Guia />}>
            <Route index element={<GuiaInicial />} />
            <Route path=":slug" element={<GuiaJurisdiccion />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
