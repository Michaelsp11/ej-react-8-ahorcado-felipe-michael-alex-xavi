import { LetrasEliminadas } from "./componentes/LetrasEliminadas";
import { Mensajes } from "./componentes/Mensajes";
import { Muñeco } from "./componentes/Muñeco";
import { Palabra } from "./componentes/Palabra";
import { IntroducirTexto } from "./componentes/IntroducirTexto";
import { useState } from "react";

function App() {
  const listado = ["avispa", "electrodomestico", "teclado", "boligrafo", "azul", "ballena", "cajon", "serpiente", "hombre", "saco", "tormenta", "radio", "mar", "helicoptero", "jamon", "mochila", "telediario", "koala", "simpatico", "cuchillo", "chimenea", "circulo"];
  const [palabra, setPalabra] = useState("");
  const palabraAleatoria = () => {
    const aleatorio = Math.floor(Math.random() * listado.lenght)
    const seleccion = aleatorio;
    setPalabra(listado(seleccion));
  };
  return (
    <>
      <div className="ahorcado">
        <Muñeco />
      </div>
      <Palabra />
      <IntroducirTexto />
      <LetrasEliminadas />
      <Mensajes />
    </>
  );
}

export default App;
