export const IntroducirTexto = (props) => {
  const { listaLetrasUsadas, setListaLetrasUsadas, letraIntroducida, setLetraIntroducida, comprobarLetra
  } = props;
  const enviarLetra = (evento) => {
    setLetraIntroducida(evento.target.value);
    comprobarLetra(letraIntroducida);
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
      onChange={enviarLetra} />
  );
};
