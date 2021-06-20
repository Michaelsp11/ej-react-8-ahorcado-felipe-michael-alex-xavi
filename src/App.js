import { LetrasEliminadas } from "./componentes/LetrasEliminadas";
import { Mensajes } from "./componentes/Mensajes";
import { Muñeco } from "./componentes/Muñeco";
import { Palabra } from "./componentes/Palabra";
import { IntroducirTexto } from "./componentes/IntroducirTexto";
import { useCallback, useEffect, useState } from "react";
function App() {

  const urlApiPalabras = "http://localhost:3001/palabras";
  const urlApiComprobarPalabra =
    "https://letras-ahorcado.herokuapp.com/letras/";
  const [fallos, setFallos] = useState(0);
  const maxFallos = 11;
  const [palabraSecreta, setPalabraSecreta] = useState("");
  const [listaLetrasUsadas, setListaLetrasUsadas] = useState([]);
  const [palabraAdivinar, setPalabraAdivinar] = useState("");

  const [letraIntroducida, setLetraIntroducida] = useState("");
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

  const comprobarLetra = async () => {
    const response = await fetch(`${urlApiComprobarPalabra}/${palabraSecreta}/${letraIntroducida}`);
    const resultado = await response.json();
    setListaLetrasUsadas([...listaLetrasUsadas, letraIntroducida]);
    if (!resultado.error) {
      acierto(resultado.posiciones, letraIntroducida);
    } else {
      error(resultado.mensaje, letraIntroducida);
    }
  };
  const error = (mensaje, letra) => {
    if (fallos !== maxFallos) {
      setFallos(fallos + 1);
    }
  };
  const acierto = (arrayPosiciones, letraIntento) => {
    setPalabraAdivinar(
      palabraAdivinar
        .split("")
        .map((letra, indice) => {
          if (arrayPosiciones.includes(indice)) {
            return letraIntento;
          }
          return letra;
        })
        .join("")
    );
  };

  return (
    <>
      <div className="ahorcado">
        <Muñeco />
      </div>
      <Palabra palabraSecreta={palabraSecreta} />
      <IntroducirTexto
        listaLetrasUsadas={listaLetrasUsadas}
        setListaLetrasUsadas={setLetraIntroducida}
        letraIntroducida={letraIntroducida}
        setLetraIntroducida={setLetraIntroducida}
        comprobar={comprobarLetra} />
      <LetrasEliminadas />
      <Mensajes />
    </>
  );
}

export default App;
