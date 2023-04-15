# Digimon Appi Rest

## Bienvenido a mi código para el proyecto del modulo 2 del bootcamp fullstack JavaScript

### Páginas

- [Home]
- [Listado]

En Home podemos ver un carusel con 3 Digimones destacados
En Listado podemos ver todos los pokemones además de poder filtrar por nombre

### Módulos

_[Bootstrap 5.2.3]
_[JQuery 3.6.3]
_[FontAwesome]
_[Google Fonts 'Ubuntu'] \*[Fetch]

### Script

## Funciones

_[apiCall()] Esta función llama al fetch con la URL de la api y crea 3 digimons al azar para la página de inicio
_[getDigimon()] Esta función genera un número random
_[fillFeatured()] Esta función llama 3 veces el número random
_[digimonList()] Esta función llama al fetch con la URL de la api y genera una lista dinámica en el HTML con todos los Digimons
_[search()] Esta función se llamada desde listado y llama a la Api pero con el nombre ingresado en el input
_[createDigimon] Esta función exist en digimonList() y search(), pero con la diferencia que en search, solo crea un Digimon y lo envía a la tabla de bootstrap como "filtro"

## Adicionales

Finalmente añadi un "go up" para poder pasearse por el listado comodamente, ya que existen más de 200 Digimon para explorar.
