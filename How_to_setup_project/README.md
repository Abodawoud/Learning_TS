## how to setup project
### 1. create project
```
$ mkdir project_name
$ cd project_name
$ tsc --init
```
### 2. install packages
```
$ npm init -y
```
### 3. make src and dist directory
```
$ mkdir src dist
```
Edit tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```
