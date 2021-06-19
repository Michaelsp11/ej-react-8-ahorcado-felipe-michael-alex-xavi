import { LetrasEliminadas } from "./componentes/LetrasEliminadas";
import { Mensajes } from "./componentes/Mensajes";
import { Muñeco } from "./componentes/Muñeco";
import { Palabra } from "./componentes/Palabra";
import { IntroducirTexto } from "./componentes/IntroducirTexto";

function App() {
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
