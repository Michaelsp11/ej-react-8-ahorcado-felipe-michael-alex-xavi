export const IntroducirTexto = (props) => {
  const { listaLetrasUsadas, setListaLetrasUsadas } = props;
  const anyadirLetraUsada = (evento) => {
    setListaLetrasUsadas([
      ...listaLetrasUsadas,
      {
        id: listaLetrasUsadas.length + 1,
        letra: evento.target.value.toUpperCase(),
      },
    ]);
    evento.target.value = "";
  };
  return (
    <input
      type="text"
      className="letra"
      maxLength="1"
      onChange={anyadirLetraUsada}
    />
  );
};
