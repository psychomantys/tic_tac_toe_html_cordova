Tic tac toe html cordova
=========================================================

Sample tic tac toe html5 game for mobile device(android, iphone, windows phone...) with cordova.

Project features:

* Automate tasks with grunt
* Tests via phantom and jasmine
* Build aplication for mobile with cordova
* Deps resolve with npm
* Minify code with uglifyJS


Install Dependencies
=========================================================

Grunt (http://gruntjs.com/)
	https://github.com/devgeeks/grunt-init-cordova/blob/master/root/Gruntfile.js

* node.js
* npm install --save-dev

Maybe:

* npm install -g grunt
* npm install --save-dev

Build application
=========================================================

Execute tests and deploy application:

* grunt


How to use cordova
=========================================================

Cordova-cli(https://github.com/apache/cordova-cli)

Include sdks bin paths on PATH, and:

```
export PATH="${PATH}:node_modules/.bin/"
```

Test application for android:

* grunt debug:android

Test application for blackberry:

* grunt debug:blackberry

Test application for ios:

* grunt debug:ios


How to use jasmine test with phatom and syntax validation
=========================================================

Test: Jasmine (http://pivotal.github.io/jasmine/)

Execute syntax validation test:

* grunt linter

Execute unit test and BDD:

* grunt jasmine

Execute all tests:

* grunt test

