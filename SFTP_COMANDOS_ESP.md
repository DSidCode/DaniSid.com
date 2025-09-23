# Manual de Comandos SFTP (Traducido al Español)

Esta es una guía de referencia rápida de los comandos disponibles en el cliente SFTP, útil para la gestión de archivos en tu servidor a través de la terminal.

---

| Comando | Descripción |
| :--- | :--- |
| `bye` | Salir de sftp. |
| `cd ruta` | Cambiar el directorio remoto a 'ruta'. |
| `chgrp [-h] grupo ruta` | Cambiar el grupo del archivo 'ruta' a 'grupo'. |
| `chmod [-h] modo ruta` | Cambiar los permisos del archivo 'ruta' a 'modo'. |
| `chown [-h] propietario ruta` | Cambiar el propietario del archivo 'ruta' a 'propietario'. |
| `copy ruta_antigua ruta_nueva` | Copiar archivo remoto. |
| `cp ruta_antigua ruta_nueva` | Copiar archivo remoto (sinónimo de `copy`). |
| `df [-hi] [ruta]` | Mostrar estadísticas del directorio actual o del sistema de archivos que contiene 'ruta'. |
| `exit` | Salir de sftp. |
| `get [-afpR] remoto [local]` | Descargar un archivo del servidor a tu máquina local. |
| `help` | Mostrar este texto de ayuda. |
| `lcd ruta` | Cambiar el directorio local a 'ruta'. |
| `lls [opciones-ls [ruta]]` | Mostrar el listado del directorio local. |
| `lmkdir ruta` | Crear un directorio en tu máquina local. |
| `ln [-s] ruta_antigua ruta_nueva` | Enlazar un archivo remoto (-s para enlace simbólico). |
| `lpwd` | Imprimir el directorio de trabajo local. |
| `ls [-1afhlnrSt] [ruta]` | Mostrar el listado del directorio remoto. |
| `lumask umask` | Establecer el umask local a 'umask'. |
| `mkdir ruta` | Crear un directorio en el servidor remoto. |
| `progress` | Activar/desactivar el medidor de progreso para las transferencias. |
| `put [-afpR] local [remoto]` | Subir un archivo desde tu máquina local al servidor. |
| `pwd` | Mostrar el directorio de trabajo remoto. |
| `quit` | Salir de sftp. |
| `reget [-fpR] remoto [local]` | Reanudar la descarga de un archivo. |
| `rename ruta_antigua ruta_nueva` | Renombrar un archivo remoto. |
| `reput [-fpR] local [remoto]` | Reanudar la subida de un archivo. |
| `rm ruta` | Eliminar un archivo remoto. |
| `rmdir ruta` | Eliminar un directorio remoto. |
| `symlink ruta_antigua ruta_nueva` | Crear un enlace simbólico a un archivo remoto. |
| `version` | Mostrar la versión de SFTP. |
| `!comando` | Ejecutar un 'comando' en la shell local (tu propia terminal). |
| `!` | Escapar temporalmente a la shell local. |
| `?` | Sinónimo de `help` (ayuda). |