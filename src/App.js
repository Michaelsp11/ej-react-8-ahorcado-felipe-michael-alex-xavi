import { LetrasEliminadas } from "./componentes/LetrasEliminadas";
import { Mensajes } from "./componentes/Mensajes";
import { Muñeco } from "./componentes/Muñeco";
import { Palabra } from "./componentes/Palabra";
import { IntroducirTexto } from "./componentes/IntroducirTexto";
import { useCallback, useEffect, useState } from "react";
function App() {
  // server y api palabras.
  // serverPalabras: "http://localhost:3000/palabras",
  // apiJuego: "https://letras-ahorcado.herokuapp.com/letras/",
  const urlApiPalabras = "http://localhost:3001/palabras";
  const urlApiComprobarPalabra =
    "https://letras-ahorcado.herokuapp.com/letras/";
  //const [fallos, setFallos] = useState(11);
  const [palabraSecreta, setPalabraSecreta] = useState("");
  const [listaLetrasUsadas, setListaLetrasUsadas] = useState([]);
  const getPalabra = useCallback(async () => {
    const response = await fetch(urlApiPalabras);
    const { lista } = await response.json();
    setPalabraSecreta(getPalabraAleatoria(lista));
  }, []);
  const getPalabraAleatoria = (palabras) => {
    const posicionAleatoria = Math.floor(Math.random() * palabras.length);
    return palabras[posicionAleatoria];
  };
  useEffect(() => getPalabra(), [getPalabra]);
  return (
    <>
      <div className="ahorcado">
        <Muñeco />
      </div>
      <Palabra palabraSecreta={palabraSecreta} />
      <IntroducirTexto
        listaLetrasUsadas={listaLetrasUsadas}
        setListaLetrasUsadas={setListaLetrasUsadas}
      />
      <LetrasEliminadas listaLetrasUsadas={listaLetrasUsadas} />
      <Mensajes />
    </>
  );
}

export default App;
