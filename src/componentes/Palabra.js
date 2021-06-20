export const Palabra = (props) => {
  const { palabraSecreta, letrasMostrar } = props;
  return (
    <>
      <ul className="palabra">
        {palabraSecreta.split("").map((letra, indice) => (
          <li key={indice}>{letrasMostrar.includes(letra) ? letra : ""}</li>
        ))}
      </ul>
    </>
  );
};
