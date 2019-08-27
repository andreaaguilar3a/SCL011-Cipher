# SAFETEST

Es una app que permite comunicar el resultado de un examen de VIH, dada la confidencialidad de esta información, el diagnóstico será cifrado por un profesional de la salud, el cual al ser recibido por el paciente puede ser decodificado, gracias a una clave (offset del 1 al 39) según la fecha y el rut del paciente (por ejemplo: la suma del día del examen y el ultimo digito del id).


![alt text](https://raw.githubusercontent.com/andreaaguilar3a/andreaaguilar3aSCL011-Cipher/master/proyectopantallazo.png) 


Para ello se utiliza el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) que es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir, cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

-La letra A se cifra como D.
-La palabra CASA se cifra como FDVD.
-Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
-Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

#Resumen del proyecto

##Intrucciónes de uso
###Para Cifrar:
1.Seleccionar el tipo de usuario: médico (cifrar) o paciente (decifrar)
2.Ingresar texto a cifrar (médico cifra el resultado del examen)
3.elegir un offset de desplazamiento (clave del 1 al 39)
4.oprime boton "codifica tu mensaje".
5.recibe tu mensaje codificado.
6.oprime boton "limpiar" para refrescar y volver a utilizar.

###Para Descifrar:
1.Seleccionar el tipo de usuario: médico (cifrar) o paciente (decifrar)
2.ingresar texto a descifrar (diagnóstico del examen codificado).
3.elegir un offset de desplazamiento (el mismo que se utilizo para codificar).
4.oprime boton "decodifica tu mensaje".
5.recibe tu mensaje decodificado.
6.oprime boton "limpiar" para refrescar y volver a utilizar.

#### Definición del producto
Chile es el país latinoamericano con mayor tasa anual de nuevos contagios, según informe de ONUSIDA (del 2018) aumentó en un 34% los casos detectados.
La interacción de los usuarios y los pacientes debe ser lo más intuitiva posible, y a su vez, debe tener consideraciones respecto al mensaje que se proporcionará.

Proceso para definir el producto final a nivel de experiencia y de interfaz:

Quiénes son los principales usuarios de producto: ONU recomienda el examen para personas entre 13 y 64 años, pero según las estadísticas, en Chile, el grupo de mayor exposición fluctúa entre los 14 y 24 años de edad (usuario/paciente al que va dirigida la app). Además de los profesionales de la salud que transmiten los diagnósticos

Cuáles son los objetivos de estos usuarios en relación con tu producto: poder transmitir o conocer un diagnóstico eficientemente,respetando la confidencialidad de la información, de manera personal y fidedigna.

Cómo crees que el producto que estás creando está resolviendo sus problemas: 
La aplicación permite resolver necesidades y tener acceso a la información del examen de VIH, de manera:
- rápida, existen test rápidos y caseros, pero no suelen ser especializados, además por norma los resultados seropositivo deben ser confirmados por el ISP, y estos tardan más. La detección temprama es fundamental para disminuir la trasmición y obtener un tratamiento eficiente, nuestra aplicación permite una comunicación escrita y directa entre los usuarios (ley 19779) 
- confidencial: es un derecho resguardado por ley (al igual que lo es hacer el examen voluntariamente), el cifrado asegura que el mensaje sea reervado y llegue solo a su destinatario.
- accesible: indistintamente de la distancia donde se encuentre el usuario la información llega a destino (no es necesario el desplazamiento físico en zonas aisladas).

##PLANIFICACIÓN y ASPECTOS TÉCNICOS
para organizar el desarrollo del proyecto se utilizó trello y se diseñaron prototipos pensando en las funciones de cifrado y decifrado, ya que en cada caso sirven paara usuarios distintos (médico y paciente, respectivamente).
Se trabajo con: HTML, index.js (DOM), css (estilos) y cipher.js (contiene la lógica)


##PROTOTIPOS


##USUARIOS testeo:
Fabián Vergara
"me pareció una idea muy útil ya que es un resultad muy personal, y eficiente para quienes tenemos horarios de oficina complicados que pueden retrasar ir por un resultado físicamente"
usabilidad: le resultó díficil comprender las indicaciones sin los cuadros de texto, ya que estas estarían en un home según el prototipo original. No tuvo problemas para copiar el texto cifrado que recibiría por texto.

Jeanette Aguilar
"me gusta que solo yo pueda leer el resultado del examen, suelo extraviar los documentos y no me gustaría que mi resultado cayera en otras manos".
usabilidad: no tuvo problemas para seleccionar su usuario (paciente), no tuvo problemas cmprendiendo las instrucciones, pero olvido como obtener la clave (su rut termina en K=0), así que pregunto que le recordara esa instrucción.

Camila Jadue
"me gusta no tener que ir a buscar el examen, como estoy embarazada el test de Elisa lo debo realizar varias veces durante la gestación, además mi embarazo es de riesgo por lo tanto tuve que darle un poder notarial a mi marido para que fuera por el resultado, ya que yo no podía retirarlo en mi condición, fue muy engorroso"
usabilidad: no tuvo problemas para escoger su usuario, pero como habían 2 texarea (uno para el mensaje y otro para el offset) dudo donde pegar el texto cifrado, es recomendable incorporar una indicación discreta en cada cuadro (ejemplo: ingrese aquí el texto o examen).Comprendió como aplicar la clave sin dificultad, pero apretó atrás en 2 oportunidades para revisar las instrucciones y confirmar si estaba haciéndolo bien.

Romina de Oliveira
"Me gustó poder entregar tan rápido un diagnóstico, lo ideal sería poder hacerlo directamente para realizar el acompañamiento cuando el resultado es seropositivo, pero muchos paciente tardan en retirar su resultado y es un poco complejo el tiempo de reacción que se pierde para los casos de mayor riesgo, el sistema tradicional es un poco burocrático"
usabilidad: uso ambos botones (médico y paciente), indica que le gustaría que se incorporarán datos del profesional o una clave de acceso y donde poder agregar el correo del paciente al que se le enviará la información, tambien un boton de borrar (ya que son muchos resultados los que se enviarán)y que no hubiera que regresar al menú para elegir otra opción, sino que se visualice desde todas las ventanas los botones de selección (médico/paciente).







# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## Resumen del proyecto

¿Qué tengo que hacer exactamente? En este proyecto crearás la primera aplicación web del _bootcamp_. Servirá para que el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres (_offset_).

La temática es libre. Tú debes pensar en qué situaciones de la vida real se necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc. 

Algunas ideas de ejemplo:

- Crear claves seguras para el email.
- Encriptar/cifrar una tarjeta de crédito.
- Herramienta de mensajería interna de una organización de derechos humanos en una zona de conflicto.
- Mensajería secreta para parejas.


## Consideraciones generales

- Este proyecto se debe resolver de manera individual.
- El proyecto será entregado subiendo tu código a GitHub (commit/push) y la interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.
- Tiempo para completarlo: El proyecto dura 2 semanas, trabaja con sprints y planificando tus tareas.

## Objetivos de aprendizaje

En este proyecto aprenderás a construir una aplicación web que interactúe con el usuario a través del navegador y la lógica basada en esa interacción. Dicho en palabras sencillas, aprenderás a:

- Pintar elementos de formulario en la pantalla usando **HTML** y **CSS**.
- Permitir al usuario interactuar (**eventos del DOM**) y hacer algo cuando ocurran dichos eventos (cifrar/descifrar).
- Manipular _**strings**_ (cadenas de texto).
- Usar **control de flujo** (bucles, condicionales, ...).
- Actualizar la pantalla con los resultados (**manipular el DOM**).
- **Implementar funciones** dada una descripción de su comportamiento.
- Verificar tu implementación con **pruebas unitarias**.
- Entender las **necesidades del usuario** y cómo proponer una solución.
- Organizar tu tiempo y priorizar tareas en un entorno de **alta incertidumbre**.

## Parte Obligatoria

Usa este alfabeto simple (solamente mayúsculas y sin ñ):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

#### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz.

- Quiénes son los principales usuarios de producto.
- Cuáles son los objetivos de estos usuarios en relación con tu producto.
- Cómo crees que el producto que estás creando está resolviendo sus problemas.

#### Interfaz de usuario (UI)

La interfaz debe permitir al usuario:
- Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## Vamos a los detalles. Consideraciones Técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye tests (pruebas) de ejemplo como punto de partida.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

## Evaluación

Te aconsejamos revisar [la rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Esta es una lista de todas las habilidades involucradas en este proyecto y que evaluaremos cuando lo  completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

### Habilidades Técnicas Front-end

| Habilidad |
|-----------|
| **CS** |
| Lógica |
| Arquitectura |
| **SCM** |
| Git |
| GitHub |
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |

### Habilidades Técnicas UX

| Habilidad |
|-----------|
| User Centricity |

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te 
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-08-bc-core-scl011/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
