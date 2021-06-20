export const LetrasEliminadas = (props) => {
  const { listaLetrasUsadas } = props;
  return (
    <ul className="letras-usadas">
      {listaLetrasUsadas.map((letraUsada) => (
        <li key={letraUsada.id}>{letraUsada.letra}</li>
      ))}
    </ul>
  );
};
