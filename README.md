# Auto microservice

The authentication microservice that handles rest API of outside server <br/> and provides auth of the user using JWT token
## Quick Run
clone the repo: git clone <name> <br/>
### start microservice local:
install all dependencies in the root folder: npm i <br/>
#### run microservice: npm start <br/> 
server listening on the port: 8080 <br/>
## Start WebServer
install dependency in the path docker_test/webServer: <br/>1. cd docker_test/webServer <br/>
2. npm i <br/>
#### run webServer: npm start <br/>
server listening on the port: 3030 <br/>

## Start Client
cd docker_test/webServer/client/ <br/>
install dependency: npm i<br/>
#### run Client: npm start
You can now view client in the browser. <br/>
Local: http://localhost:3000 <br/>

# Start App using docker:
build images: docker build -t auth_microservice . <br/>
view images: docker images <br/>
### run docker image
docker run <name image>: docker run auth_microservice <br/>

## Test user registration/login locally
cd docker_test <br/>
install dependency: npm i <br/>
#### run test integration: npm start

## Test Jest
run all tests: npm test <br/>

# Technologies  Included
Node using express library <br/>
MongoDB using mongoose library <br/>
Docker <br/>
React <br/>
JSX ES6 <br/>
MUI <br/>
SCSS <br/>
Jest <br/>

