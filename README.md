<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Tech](#tech)
- [Requirements](#requirements)
- [Quick Start](#quick-start)
  - [Use Grunt tasks](#use-grunt-tasks)
  - [Paths](#paths)
    - [Javascripts or data files](#javascripts-or-data-files)
    - [Images](#images)
    - [Styles](#styles)
  - [Heroku deploy](#heroku-deploy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Tech

* [AngularJS] - HTML enhanced for web apps!
* [Angular Material] - An implementation of Material Design in Angular.js.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Grunt] - the streaming build system

## Requirements

- Install Node
    - on OSX install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows install [chocolatey](https://chocolatey.org/)
        - More tips on [Windows with node](http://jpapa.me/winnode)
        - open command prompt as administrator
            - type `choco install nodejs`
            - type `choco install nodejs.install`
    - On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Use the `sudo` command if necessary
- Type `npm install -g node-inspector bower grunt-cli`

## Quick Start
Clone this repo and run the content locally
```bash
npm install
grunt serve
```

### Use Grunt tasks

* `grunt` or `grunt build` to build an optimized version of your application in `/dist`
* `grunt serve` to launch a browser sync server on your source files
* `grunt serve:dist` to launch a server on your optimized application

### Paths

#### Javascripts or data files

Place files such as:

* controller.js
* proteinStructure.js

In

```bash
client/practices/
```

Then add to `client/index.html`

```
	<script src="practices/controller.js"></script>
	<script src="practices/proteinStructure.js"></script>
```

Place files such as:

* JSmol.min.nojq.js

In

```bash
client/JSmol/
```

Then add to `client/index.html`

```
	<script src="JSmol/JSmol.min.nojq.js"></script>
```

Place files such as:

* bigAntiparallelSheet.pdb

In

```bash
client/components/data/PDB/bigAntiparallelSheet.pdb
```

#### Images

Place the files as in the original application

```bash
client/components/images/
or
client/components/data/images/
```
For example:
```bash
<!--
client/components/styles/practiceStyle.styl
-->
background-image: url(../components/images/background.jpg);

<!--
client/practices/proteinStructure.js
-->
Jmol.script(jmolApplet0, 'background IMAGE "components/images/background.jpg";');
```

#### Styles

Add your styles to the file:

```bash
client/components/styles/practiceStyle.styl
```

### Heroku deploy

Add Procfile file with:

```bash
web: node server/app.js
```
```bash
NODE_ENV = production
```

[node.js]:http://nodejs.org
[express]:http://expressjs.com
[AngularJS]:http://angularjs.org
[Angular Material]:https://material.angularjs.org/
[Grunt]:http://gruntjs.com/
