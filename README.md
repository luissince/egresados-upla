# UPLA EGRESADOS

<!-- ![IMAGES DE GO LANG](images/ladder.svg) -->
<img src="src/assets/images/logo_upla.svg" alt="Imagen go" width="200" />

Aplicación para los egresados de la universidad peruana los andes.

## Iniciar

Esta proyecto esta echo en react js con tailwind css.

Algunos recursos para iniciar con este proyecto puedes ver en:

- [Node Js](https://nodejs.org/es/) Entorno de desarrollo para aplicación web o movil usando JavaScript.
- [React Js](https://reactjs.org/) Biblioteca para diseñar interfeces de usuario usando JavaScript.
- [Visual Studio](https://code.visualstudio.com/) Editor de código para todos tipos de lenguaje de programación.
- [Tailwindcss](https://tailwindcss.com/) Framework css para la parte visual.
- [TypeScript](https://www.typescriptlang.org/) Lenguaje de programación de tipado fuerte.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) Lenguajde de programación interpretado.
- [Git](https://git-scm.com/) Software de control de versiones.
- [Git Hub](https://github.com/) Plataforma de alojamiento de proyecto de todo ámbito.

## Instalación

Siga los pasos para iniciar el desarrollo:

1. Clona el proyecto o agrague el ssh al repositorio para contribuir en nuevos cambios [Git Hub - UPLA EGRESADOS](https://github.com/luissince/egresados-upla)

#Code

    /** 
    ** Para el proceso de integración **
    **/

    // ejecute en su consola cmd, bash, git los siguientes comandos
    
    // Generar tu clave ssh para poder contribuir al proyecto
    ssh-keygen -t rsa -b 4096 -C "tu email"

    
    // crea una carpera
    mkdir upla-egresados

    // moverse a la carpera
    cd upla-egresados
    
    // comando que inicia git
    git init

    // comando que agrega la referencia de la rama
    git remote add origin git@github.com:luissince/egresados-upla.git
   
    // comando que descarga los archivos al working directory
    git fetch origin master
    
    // comando que une los cambios al staging area
    git merge origin/master

    /** 
    ** Para el proceso de clonación **
    **/

    // Clonar al proyectp
    git clone https://github.com/luissince/egresados-upla.git

2. Ejecute en la carpte la clonada **npm install**

#Code

    npm install

3. Ejecute **npm run dev**

#Code

    npm run dev

3. Ejecute **npm run build**

#Code

    npm run dev

4. Ejecute **npm run build**

#Code

    npm run preview
