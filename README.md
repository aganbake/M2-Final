# Digimon Appi Rest

## Bienvenido a mi código para el proyecto del modulo 2 del bootcamp fullstack JavaScript

### Páginas

- [Home]
- [Listado]
- [Batalla]

En Home podemos ver un carusel con 3 Digimones destacados
En Listado podemos ver todos los digimones además de poder filtrar por nombre
En Batalla, podremos disfrutar un minijuego con 2 Digimones al azar, donde podrá ganar el mejor de 3

### Módulos

- [Bootstrap 5.2.3]
- [JQuery 3.6.3]
- [FontAwesome]
- [Google Fonts 'Ubuntu']
- [Fetch]

## Script

### Funciones en el js

- [apiCall()] Esta función llama al fetch con la URL de la api y crea 3 digimons al azar para la página de inicio
- [getDigimon()] Esta función genera un número random
- [fillFeatured()] Esta función llama 3 veces el número random
- [digimonList()] Esta función llama al fetch con la URL de la api y genera una lista dinámica en el HTML con todos los Digimones
- [search()] Esta función se llamada desde listado y llama a la Api pero con el nombre ingresado en el input
- [createDigimon] Esta función existe en digimonList() y search(), pero con la diferencia que en search, solo crea un Digimon y lo envía a la tabla de bootstrap como "filtro"
- [startGame()] Esta función, genera 2 números random y ejecuta la función minigame
- [minigame()] Esta función recibe 2 números por parametros y envía un digimon a la sección HTML generada dinamicamente
- [rollDice()] Esta función es la mas "compleja", además de generar los números al azar, envía la imagen dinamicamente de acuerdo al botón presionado "lanza" en el html, luego comprueba los puntajes y los muestra en pantalla y permite iniciar una nueva partida, se puede usar para ganar una apuesta :D
- [button()] Esta función verifica los puntajes y la etiqueta del botón, para decidir si iniciar una nueva partida o continuar lanzando los dados

## Adicionales

Finalmente añadi un "go up" para poder pasearse por el listado comodamente, ya que existen más de 200 Digimon para explorar.

## Repositorio

git clone https://github.com/aganbake/M2-Final.git
