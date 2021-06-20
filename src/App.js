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
  const [letrasMostrar, setLetrasMostrar] = useState([]);

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

  const comprobarLetra = async (letraIntroducida) => {
    const response = await fetch(
      `${urlApiComprobarPalabra}${palabraSecreta}/${letraIntroducida}`
    );
    const resultado = await response.json();
    if (!resultado.error) {
      acierto(resultado.posiciones);
    } else {
      error();
    }
  };
  const error = () => {
    if (fallos <= maxFallos) {
      setFallos(fallos + 1);
    }
  };
  const acierto = (arrayPosiciones) => {
    setPalabraSecreta(
      palabraSecreta
        .split("")
        .map((letra, indice) => {
          if (arrayPosiciones.includes(indice)) {
            setLetrasMostrar([...letrasMostrar, letra]);
          }
          return letra;
        })
        .join("")
    );
  };

  return (
    <>
      <div className="ahorcado">
        <Muñeco fallos={fallos} />
      </div>
      <Palabra palabraSecreta={palabraSecreta} letrasMostrar={letrasMostrar} />
      <IntroducirTexto
        listaLetrasUsadas={listaLetrasUsadas}
        setListaLetrasUsadas={setListaLetrasUsadas}
        comprobarLetra={comprobarLetra}
      />
      <LetrasEliminadas listaLetrasUsadas={listaLetrasUsadas} />
      <Mensajes />
    </>
  );
}

export default App;
