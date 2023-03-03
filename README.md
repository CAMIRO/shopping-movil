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

- En la parte derecha de la cabecerá, se mostrará el numero de items que se hayan añadido al carrito. 


3. SEARCH

✅ Se mostrará un input al usuario, el permitirá la introdución de una cadena de texto.

✅ El usuario deberá filtrar los productos en función del texto introducido, y se comparará con el Marca y el Modelo de los productos.

✅ El filtrado, será en tiempo real, es decir, se lanzará una busqueda cada vez que el usuario cambie los criterios de busqueda.

4. Product Details Page

- En la primera se mostrará el componente de la imagen del producto.

- En la segunda, se mostrará los detalles y las acciones del producto.

- Deberá mostrar un link para navegar de vuelta a la lista de productos.
    - Imagen 
    - Marca 
    - Modelo 
    - Precio 