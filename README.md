# SAFETEST

Es una app que permite comunicar el resultado de un examen de VIH, dada la confidencialidad de esta información, el diagnóstico será cifrado por un profesional de la salud, el cual al ser recibido por el paciente puede ser decodificado, gracias a una clave (offset del 1 al 39) según la fecha y el rut del paciente (por ejemplo: la suma del día del examen y el ultimo digito del id).

![proyecto](https://raw.githubusercontent.com/andreaaguilar3a/andreaaguilar3aSCL011-Cipher/master/proyecto.jpg)

Para ello se utiliza el [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) que es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir, cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

-La letra A se cifra como D.
-La palabra CASA se cifra como FDVD.
-Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
-Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

### Resumen del proyecto

#### Intrucciónes de uso

###Para Cifrar:
1.Seleccionar el tipo de usuario: médico (cifrar) o paciente (decifrar)
2.Ingresar texto a cifrar (médico cifra el resultado del examen)
3.elegir un offset de desplazamiento (clave del 1 al 39)
4.oprime boton "codifica tu mensaje".
5.recibe tu mensaje codificado.
6.oprime boton "limpiar" para refrescar y volver a utilizar.

#### Para Descifrar:
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

## PLANIFICACIÓN y ASPECTOS TÉCNICOS
para organizar el desarrollo del proyecto se utilizó trello y se diseñaron prototipos pensando en las funciones de cifrado y decifrado, ya que en cada caso sirven paara usuarios distintos (médico y paciente, respectivamente).
Se trabajo con: HTML, index.js (DOM), css (estilos) y cipher.js (contiene la lógica)


## PROTOTIPOS


## USUARIOS testeo:
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
