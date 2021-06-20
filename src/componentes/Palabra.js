export const Palabra = (props) => {
  const { adivinarPalabra } = props;

  return (
    <>
      <ul className="palabra">
        {[...adivinarPalabra].map((letra, indice) => (
          <li key={indice}>{letra.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
};
