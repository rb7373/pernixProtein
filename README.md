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
- Type `npm install -g node-inspector bower grunt-cli`

## Quick Start
Clone this repo and run the content locally
```bash
npm install
bower install
grunt serve
```

### Use Grunt tasks

* `grunt` or `grunt build` to build an optimized version of your application in `/dist`
* `grunt serve` to launch a browser sync server on your source files
* `grunt serve:dist` to launch a server on your optimized application

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
