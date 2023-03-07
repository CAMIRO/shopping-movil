## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `yarn start`

Ejecuta la aplicación en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La página se volverá a cargar cuando realices cambios.\
También puedes ver cualquier error de linter en la consola.

### `yarn run build`

Construye la aplicación para producción en la carpeta `build`.\
Este correctamente empaqueta React en modo de producción y optimiza la construcción para obtener el mejor rendimiento.

La construcción se minifica y los nombres de archivo incluyen los hashes.\
Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `yarn test`

Ejecuta el programa de pruebas en el modo de observación interactivo.\
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `yarn lint`

Ejecuta los linters del proyecto.

## CARACTERÍSTICAS:

1. Ecommerce

✅ fetch data de una API real

✅ Contiene un router  SPA

2. HEADER

✅ El titulo o el icono de la aplicación, actuará como enlace a la vista principal.

✅ Se mostrará un breadcrumbs, mostrando la pagina donde se encuentra el usuario asi como un link para su navegación. 

✅ En la parte derecha de la cabecerá, se mostrará el numero de items que se hayan añadido al carrito. 


3. SEARCH

✅ Se mostrará un input al usuario, el permitirá la introdución de una cadena de texto.

✅ El usuario deberá filtrar los productos en función del texto introducido, y se comparará con el Marca y el Modelo de los productos.

✅ El filtrado, será en tiempo real, es decir, se lanzará una busqueda cada vez que el usuario cambie los criterios de busqueda.

4. Product Details Page

✅ En la primera se mostrará el componente de la imagen del producto.

✅ En la segunda, se mostrará los detalles y las acciones del producto.

✅ Deberá mostrar un link para navegar de vuelta a la lista de productos.
    ✅ Imagen 
    ✅ Marca 
    ✅ Modelo 
    ✅ Precio 

5. Acciones Producto
✅ Se mostrará dos tipos de selectores, donde el usuario, podra seleccionar el tipo del producto que quiere añadir a la cesta. Se mostrarán los selectores de opciones para las siguiente atributos: 
    ✅ Almacenamiento  
    ✅  Colores
✅ Aunque solo exista una opción, se mostrará el selector con la información. Para este caso de uso, deberá estar seleccionado por defecto.
✅ Se visualizará un boton de Añadir, donde el usuario, un vez seleccionada las opciones, añadirá el producto a la cesta.
✅ Al añadir un producto mediante el API, se requiere mandar la siguiente información:
    ✅ El identificador del producto
    ✅ El codigo de color seleccionado
    ✅ El codigo de la capacidad de almacenamiento seleccionada
✅ La petición de añadir, devuelve en la respuesta, el numero de productos que hay en la cesta. Este valor deberá mostrarse en la cabecera de la aplicación en cualquier vista de la misma. Para ello se requiere persistir el dato

6. Persistencia de datos 
Se requiere, añadir un almacenaje en cliente de los datos que se reciban desde el API. Lo que se quiere ofrecer es un sistema de cacheo, para no se realicen cada vez peticiones al API. Por ello, se require definir la siguiente funcionalidad:
✅ Se almacenará la información cada vez que se solicite al servicio del API 
- Se guardará dicha información, y tendrá una expiración de 1 hora, una vez excedido dicho tiempo, deberá revalidarse la información.
✅ Se podrá utilizar cualquier metodo de storage para almacenar dicha información, ya sea del navegador o en memoria, pero siempre en cliente. 