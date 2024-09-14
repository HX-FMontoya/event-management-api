# Event Management Api

## Descripción

Esta es una API para la gestión de eventos, desarrollada en Node.js con Express. Permite CRUD de eventos, registro de asistentes, y consulta de ubicaciones cercanas con Mapbox. Incluye autenticación JWT, manejo de archivos Excel, y Dockerización. Sigue principios de **Clean Architecture** para modularidad y escalabilidad.

## Características
- CRUD de eventos
- Autenticación JWT

## Requisitos previos

- **Node.js** v14.x o superior
- **npm** o **yarn** para la gestión de dependencias
- **PostgreSQL**: La base de datos utilizada es PostgreSQL.
- **Git Bash (solo para Windows)**: Si estás en Windows y deseas ejecutar scripts Bash, asegúrate de tener instalado Git Bash [Descargar Git Bash](https://git-scm.com/).

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

## Estructura del proyecto

```bash
/event-management-api
  /db
  /docs             
  /src              
    /config         
    /controllers    
    /middlewares    
    /models         
    /routes         
    /services       
    /utils          
    server.js       
  /test          
  .env.example   
  .gitignore
  eslint.config.mjs
  index.js   
  package-lock.json
  package.json
  README.md         
```

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.