# Event Management Api

## Descripción

Esta es una API para la gestión de eventos, desarrollada en Node.js con Express. Permite CRUD de eventos, registro de asistentes, y consulta de ubicaciones cercanas con Mapbox. Incluye autenticación JWT, manejo de archivos Excel, y Dockerización. Sigue principios de **Clean Architecture** para modularidad y escalabilidad.

## Características
- CRUD de eventos
- Autenticación JWT

## Requisitos previos

- **Node.js** v14.x o superior
- **npm** o **yarn** para la gestión de dependencias

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

4. Crea un archivo `.env` en la raíz del proyecto basándote en el .env.example

## Uso

Para ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```
Para ejecutar el proyecto en modo producción:

```bash
npm start
```

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```
## Documentación

En la carpeta docs encontrarás material complementario como:
- Diagrama ER en formato PNG.

## Estructura del proyecto

```bash
/event-management-api
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