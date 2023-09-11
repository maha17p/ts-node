# ts-node

## STEPS:
    1. npm init -y
    2. npm i -D typescript
    3. create ts config file (npx tsc init)
    4. config ts file
    5. install required packages
    6. npm start


## TS-CONFIG:
#### 1."target":"es6"
    _ If you need more advanced JS features, you can choose to use ES6 or a higher version
    - most of today browser only understand ES6 version of JS. 
    - So that We need to tell the TS compiler to transpile our TS code into ES6 JS.

#### 2."module":"commonjs"
    -  This is JS module formatting system for structuring and organizing JS code. 
    - This lets the compiler use module functions such as require() and objects such as module.exports.

#### 3."rootDir":"rootDir"
    - directory where the input TS file are stored.


#### 4."outDir":"outDir"
    - This is an output dir where the output structure of the compiled JS will be saved.

#### 5."strict":"true"
    - Enable all JS strict type-checking options.

#### 6."esModuleInterop":"true"
    - esModuleInterop allows us to compile ES6 modules to commonjs modules.

#### 7."exclude":[]
    - tells TS not to compile specified files or folders.
