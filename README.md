Taller Node.js - [CSHL](http://cshluesocc.org)
=============================================

[![Join the chat at https://gitter.im/csluesocc/taller-nodejs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/csluesocc/taller-nodejs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

#Instalación

##Desde repositorios

###Debian y derivados

Script de configuración
```
$ curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
```
Luego installar via apt-get

```
$ sudo apt-get install nodejs
```

**Opcional y recomendado:**
Para instalar complementos nativos con npm vamos a necesitar instalar las herramientas para compilar:

```
$ sudo apt-get install build-essential
```

###Enterprise Linux (RH, CentOS) y Fedora

Script de configuración
```
$  curl -sL https://rpm.nodesource.com/setup | bash -
```

Luego instalar con yum
```
$ sudo yum install nodejs
```

**Opcional y recomendado:**
Para instalar complementos nativos con npm vamos a necesitar instalar las herramientas para compilar:

```
$ sudo yum install gcc-c++ make
o bien
$ sudo yum groupinstall 'Development Tools'
```

**Alternativas**

A partir de fedora 18:

```
$ sudo yum install nodejs npm
```

Enterprise Linux (RHEL and CentOS):

[Habilitar repositorios EPEL](http://www.rackspace.com/knowledge_center/article/install-epel-and-additional-repositories-on-centos-and-red-hat)
```
$ sudo yum install epel-release
```
Luego instalar node:

```
$ sudo yum install nodejs npm --enablerepo=epel
```

###Arch Linux y derivados

```
$ sudo pacman -S nodejs npm
```

##Compilar nodejs

Si prefieres puedes compilar nodejs desde su código fuente, acá las instrucciones:

**Prerrequisitos:**

* GCC >= 4.2
* G++ >= 4.2
* Python 2.6 ó 2.7
* GNU Make >= 3.81
* libexecinfo (FreeBSD and OpenBSD only)

Asumiendo que tienes instalado python (Que normalmente viene por defecto en las distros GNU/Linux), para instalar las utilidades podemos hacerlo de la siguiente manera:

**Debian y derivados**

```
$ sudo apt-get install build-essential
```

**Enterprise Linux (RHEL and CentOS) y Fedora:**

```
$ sudo yum groupinstall 'Development Tools'
```

**Compilar:**

Descargar codigo fuente
```
$ wget http://nodejs.org/dist/v0.12.4/node-v0.12.4.tar.gz
```
Descomprimir
```
$ tar -zxf node-v0.12.4.tar.gz && cd node-v0.12.4
```
Compilar
```
$ ./configure
$ make
$ sudo make install
```

##Verificar instalación

```
$ node -v
v0.12.4
$ npm -v
2.x.x
```

Hola mundo con node.js
```
$ echo "console.log('Hola Mundo')" > hello.js
$ node hello.js
Hola Mundo
```
