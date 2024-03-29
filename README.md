# **Proyecto para sii**

## **Tecnologias utilizadas**

### **Primer bloque**

-   Reactjs
-   HTML
-   CSS
-   Bootrstrap

### **Segundo bloque**

-   Node.js
-   Express.js
-   MongoDB

## **Instrucciones para correr el proyecto**

1. Clonar repositorio con el comando

```properties
git clone https://github.com/DemetrioQ/SIITest.git
```

2. Ir a la ruta del proyecto

```properties
cd SIITest
```

3. ### Correr el comando

```bash
npm install
```

4.  En una consola de comando correr en la ruta base del proyecto el comando

```properties
npm run start
```

5. En otra consola de comando ir a la ruta de la api

```properties
cd api
```

6. Correr el comando

```properties
node server.js
```
# **Puntos realizados**

## Primer Bloque

1) Realizar maquetación del diseño suministrado y tomar en cuenta:
- [x] Todos los campos son requeridos.
- [x] El editar los campos de tarjetas, fecha y nombre modifica el diseño de la tarjeta.
- [x] El campo tarjeta solo puede contener números y un máximo de 16 caracteres.
- [x] El campo fecha de vencimiento debe tener formato mm/yy.
- [x] El campo fecha solo puede aceptar valores válidos para mes (01 a 12) y año (22 hasta año actual + 5).
- [x] El campo Nombre titular solo puede contener letras y letras con tildes y máximo de 20 caracteres.
- [x] En caso de que algún campo no sea válido se debe colocar texto en rojo debajo del campo indicando la causa de la invalidez.

2) Al pulsar botón de Agregar tarjeta.
- [x] Debe agregar la tarjeta a un bloque en el cual se mostrarán los campos de tarjeta, nombre y fecha vencimiento.
- [x] Para cada registro se debe contener un identificador único.
- [x] Debe validar que el formulario sea válido y que al no ser válido despliegue los textos en cada campo que no es válido.
- [x] El campo de número de tarjeta se debe mostrar enmascarado, solo mostrar los primeros y 4 últimos dígitos (ej. 41********1234).

- [x] 3) Al pulsar botón Cancelar se deben limpiar todos los campos.



## Segundo Bloque

1) Crear RESTful API para el procesamiento de agregado/visualización de tarjetas.
- [x] Debe contener todos los métodos de CRUD. (aunque no los use todos)

2) Conectar el primer bloque con el segundo bloque.

- [x] Al momento de agregar tarjeta esta debe ser almacenada en alguna base de datos o archivo de texto (ej. Firebase).
- [x] Lo único que se debe validar al momento de agregar es que los campos requeridos sean enviados.
- [x] Los API deben de devolver correctamente respuestas HTTP para cada caso, (ej.  404, 500, 302, 200, etc).
