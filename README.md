# Ejercicio ahorcado

Programa mediante React el ejercicio del ahorcado que hiciste en JS, con la siguiente diferencia: la comprobación de letra no la hará tu aplicación, sino que lo hará una API:

https://letras-ahorcado.herokuapp.com/letras/

A esta API le pasas una palabra y una letra, y te devuelve las posiciones de la letra o un error:

https://letras-ahorcado.herokuapp.com/letras/zanahoria/a

Devuelve:

```
{
    error: false,
    posiciones: [1, 3, 8]
}
```

https://letras-ahorcado.herokuapp.com/letras/zanahoria/p

Devuelve:

```
{
    error: true,
    mensaje: "La palabra no incluye esta letra"
}
```
