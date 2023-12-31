# Prueba Practica 3
## Descripción

Prueba practica 3 estudiante Nicolas Henriquez Pedraza
rut 202135919
## Recomendacion Para el Backend:

* Node.js y npm:
        Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde https://nodejs.org/.

* MongoDB:
        Deberán tener una instancia de MongoDB ejecutándose localmente o proporcionar la URL de conexión a una base de datos MongoDB.

Para el Frontend:

* Node.js y npm:
        Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde https://nodejs.org/.

Recomendaciones para el Desarrollo:

* Git:
        Se recomienda tener Git instalado para clonar el repositorio y gestionar versiones.

    Editor de Código:
        Se sugiere utilizar un editor de código como Visual Studio Code, Sublime Text, Atom, o cualquier otro de tu preferencia.
## Recomendacion para frontend
Es necesario tener react native y android estudio o un emulador de celular para poder usar este proyecto.
## Instalación


```bash
# Clona el repositorio
git clone https://github.com/Bharragan/practica3Web
```

## Configuración del Backend


1. **Variables de Entorno:**
   - Crea un archivo `.env` en el directorio `backend` para almacenar las variables de entorno sensibles.
   - Ejemplo de contenido del archivo `.env`:

     ```plaintext
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/tu-base-de-datos
     ```

     - `PORT`: Puerto en el que se ejecutará el servidor.
     - `MONGODB_URI`: Cadena de conexión a tu base de datos MongoDB.

2. **Instalación de Dependencias:**
   - Asegúrate de haber instalado las dependencias del backend con `npm install` en el directorio `backend`.

3. **Inicio del Servidor:**
    - Asegúrate de ejecutar `npm seed` en el directorio `backend` para poblar la base de datos.
   - Ejecuta el servidor con `npm start` en el directorio `backend`.
   - Verifica que el backend se esté ejecutando correctamente en la URL especificada en la consola.

Con estos pasos, habrás configurado el backend de tu aplicación.
## Frontend

Asumiendo que ya tienes clonado el repo, crea una nueva terminal y ejecuta los siguientes comandos:

1. Cambia al directorio del frontend:

```bash
cd frontend
```
2. Instala las dependencias:

```bash
npm install
```
3. Copia el archivo de configuración de ejemplo:

```bash
cp .env.example .env
```
4. Abre el archivo .env con tu editor de texto y completa los campos requeridos con los valores adecuados,
ojo si usas un emulador es posible que necesites usar la ip de tu computadora.

5. Inicia la aplicación:

```bash
npm start
```