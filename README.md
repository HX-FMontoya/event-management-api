# Event Management Api

## Descripción

Esta es una API para la gestión de eventos, desarrollada en Node.js con Express. Permite CRUD de eventos, registro de asistentes, y consulta de ubicaciones cercanas con Mapbox. Incluye autenticación JWT, manejo de archivos Excel, y Dockerización. Sigue principios de **Clean Architecture** para modularidad y escalabilidad.

## Características
- CRUD de eventos
- Autenticación JWT
- Dockerización para fácil despliegue

## Requisitos previos

- **Node.js** v14.x o superior
- **npm** o **yarn** para la gestión de dependencias
- **PostgreSQL**: La base de datos utilizada es PostgreSQL.
- **Git Bash (solo para Windows)**: Si estás en Windows y deseas ejecutar scripts Bash, asegúrate de tener instalado Git Bash [Descargar Git Bash](https://git-scm.com/).
- **Docker y Docker Compose**: Para ejecutar la aplicación con Docker.

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/HX-FMontoya/event-management-api.git
```
2. Navega dentro de la carpeta del proyecto
```bash
cd event-management-api
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

4. Crea un archivo `.env` en la raíz del proyecto basándote en el [.env.example](/event-management-api/.env.example)

```bash
cp .env.example .env
```

## Configuración de la Base de Datos

La API utiliza PostgreSQL como base de datos. Los scripts SQL para crear las tablas y poblar datos de ejemplo se encuentran en la carpeta db:

- [schema.sql](/event-management-api/db/schema.sql) para la definición de las tablas.
- [data.sql](/event-management-api/db/data.sql) para poblar la base de datos con datos iniciales.

Se ha creado [este](/event-management-api/setup-db.sh) script que se encarga de ejecutarlos automáticamente.

**Nota: Asegúrate de que PostgreSQL esté instalado en tu sistema.**

### Linux/macOS
Para ejecutar el script de configuración de la base de datos en sistemas Linux o macOS, utiliza el siguiente comando:

```bash
npm run setup-db-linux
```

### Windows
Para ejecutar el script de configuración de la base de datos en Windows (utilizando Git Bash), usa el siguiente comando:

```bash
npm run setup-db-windows
```

**Nota: Asegúrate de que Git Bash esté instalado en tu sistema si estás utilizando Windows.**

## Docker
### Ejecución con Docker
Si prefieres correr la aplicación con Docker, sigue los siguientes pasos:

1. Asegúrate de que Docker y Docker Compose estén instalados en tu sistema. Puedes descargar Docker desde Docker Desktop.

2. Asegúrate de tener el archivo .env configurado, tal como se describe en la sección de instalación.

3. Ejecuta el siguiente comando para levantar los contenedores:

```bash
docker-compose up
```
Este comando construirá y levantará tanto la aplicación como la base de datos PostgreSQL en contenedores Docker.

Accede a la aplicación desde http://localhost:3000.

### Docker Compose
El archivo [docker-compose.yml](/event-management-api/docker-compose.yml) contiene la configuración necesaria para levantar la aplicación y la base de datos PostgreSQL en contenedores. Asegúrate de que Docker esté corriendo correctamente antes de ejecutar docker-compose up.

Para detener los contenedores, puedes usar:

```bash
docker-compose down
```
Esto apagará y limpiará los contenedores en ejecución.

## Scripts disponibles
### Inicia la aplicación
#### En modo producción:
```bash
npm start
```
#### En modo desarrollo con Nodemon:
```bash
npm run dev
```
### Test
#### Ejecuta los test con Jest:
```bash
npm test
```
### Base de datos
#### Configura la base de datos en Linux o macOS:
```bash
npm run setup-db-linux
```
#### Configura la base de datos en Windows usando Git Bash:
```bash
npm run setup-db-windows
```

## Documentación Extra

En la carpeta docs encontrarás material complementario como:
- [Diagrama ER en formato PNG](/event-management-api/docs/ER%20Diagram%20Event%20Managment.drawio.png).
- [Plantilla-excel](/event-management-api/docs/event_template_with_user_data.ods)
- [Video](https://drive.google.com/file/d/1elfU99JPnlOE6quCQetKSzrhnG7mzOYo/view?usp=drive_link)

## Estructura del proyecto

```bash
/event-management-api
  /db
  /docs             
  /src              
    /config         
    /controllers    
    /helpers
    /infrastructure
        /queries
    /middlewares  
        /auth
        /core
        /events
        /permissions
            /verify
        /validations
            /reservation
    /models         
    /routes         
    /services       
    /utils     
    /validations     
    server.js       
  /test          
  .env.example   
  .gitignore
  docker-compose.yml
  Dockerfile
  eslint.config.mjs
  index.js   
  package-lock.json
  package.json
  README.md         
```

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.