import { Routes, Route } from "react-router-dom";
import { Layout, Inicio, Contacto, Error, Error404 } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/error/:errorNo" element={<Error />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
