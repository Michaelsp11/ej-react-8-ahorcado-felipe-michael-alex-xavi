export const IntroducirTexto = (props) => {
  const { listaLetrasUsadas, setListaLetrasUsadas, comprobarLetra } = props;
  const enviarLetra = (evento) => {
    comprobarLetra(evento.target.value);
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
    <input type="text" className="letra" maxLength="1" onChange={enviarLetra} />
  );
};
