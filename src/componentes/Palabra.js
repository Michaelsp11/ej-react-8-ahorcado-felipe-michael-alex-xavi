export const Palabra = (props) => {
  const { palabraSecreta } = props;
  return (
    <>
      <ul className="palabra">
        {palabraSecreta.split("").map((letra, indice) => (
          <li key={indice}></li>
        ))}
      </ul>
    </>
  );
};
