![Image](https://github.com/diina-gh/Shop/blob/master/src/assets/img/app-img2.png)
## Shop (work in progress..)
`Shop` is an app template created with [Ionic Framework](https://ionicframework.com/)
###
Ionic is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences.

## First install the Ionic CLI:
You should make sure that your computer has the lattest version of Node.js installed, before you continue.
You can get Node.js from [here](https://nodejs.org/en/download/)
### 
Install the Ionic CLI with npm:
```npm
npm install -g @ionic/cli
```
## Clone Shop repository:
```git
git clone https://github.com/diina-gh/Shop/
```
If you don't have `git`, you can get it from [here](https://git-scm.com/downloads)
## Start the project:
```npm
cd Shop
npm install (to install the dependencies in the local node_modules folder)
ionic serve (or ionic serve --l)
```
The command `ionic serve` will start a live-reload server for your project in a web browser. When changes are made to any HTML, SASS, or TypeScript files, the browser will automatically reload.

![Image](https://github.com/diina-gh/Shop/blob/master/src/assets/img/app-img1.png)

## Cordova
With Cordova, you can test right in a simulator or use your own phone. To add a platform in your project, use the following commands:
```npm
ionic cordova platform add android
//or 
ionic cordova plarform add ios
```
###
Then:
```npm
ionic cordova run android --device
//or
ionic cordova run ios --device (although I would recommend using xcode for ios device)
```
Note that your phone and your computer must be connected via a USB port.
## Xcode
To run and debug Ionic apps on iOS simulators and devices, you can use Xcode. Xcode is an IDE for creating native iOS apps. It includes the iOS SDK and Xcode command-line tools. 
[More about Xcode..](https://developer.apple.com/xcode/)

