<p align="center">
  <h1 align="center">Authentication Microservice</h1>
</p>

<!-- TABLE OF CONTENTS -->
# Table Of Contents
* [About the Project](#about-the-project)
* [Installation](#installation)
  * [Node](#node)
  * [Update Node Version](#update-node-version)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
    * [Microservice](#microservice)
    * [WebServer](#web-server)
    * [Client](#client)
* [Start App via Docker](#start-app-via-docker)
  * [Linux](#linux)    
  * [Windows](#windows)    
  * [Mac](#mac)    
* [Built With Technologies](#built-with-technologies)
* [Testing](#testing)
* [Sequence Diagrams](#sequence-diagrams)
    * [Code Diagram Of Login](#code-diagram-of-login)
    * [Login Scheme](#login-scheme)
    * [Code Diagram Of Registration](#code-diagram-of-registration)
    * [Registration Scheme](#registration-scheme)
* [Resources](#resources)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
# About The Project
This service handles REST API of external server <br/> and provides auth of the user using JWT token

<!-- Installation -->
# Installation
## Node
- Download Node for your operating system:
1. https://nodejs.org/en/download/
2. Install Node
## Update Node Version
- Update Node with NVM to Latest Version on Linux Systems:
1.  Start by updating the package repository with the command:<br/>```sudo apt update```
2.  Install NVM using the curl command: <br/>
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash```
3. Close and reopen the terminal for system to recognize the changes or run the command: <br/>
```source ~/.bashrc```
4. Then, verify if you have successfully installed NVM: <br/>
```nvm --version```
5. Before upgrading Node.js, check which version you have running on the system: <br/>
```nvm ls```
6. Now you can check for newly available releases with: <br/>
```nvm ls-remote```
7. To install the latest version, use the nvm command with the specific Node.js version: <br/>
```nvm install [version.number]```
# Getting Started
Clone the repository: git clone <name> 

## Prerequisites
### Microservice
- Install requirements libraries
1. ```npm i``` 
2. Start: ```npm start```
3. Server listening on the port: 8080 
### WebServer
- Install requirements libraries
1. Path: ```cd docker_test/webServer```
2. ```npm i```
3. Start: ```npm start```
4. Server listening on the port: 3030

### Client
- Install requirements libraries
1. Path: ```cd docker_test/webServer/client```
2. ```npm i```
3. Start: ```npm start```
4. You can now view client in the browser:  http://localhost:3000

<!-- START APP VIA DOCKER -->
 # Start App via Docker:
## Linux
1. build images: ```docker build -t <name> .``` 
2. run image: ```docker run <name>```
## Windows 
- Installation
1. Download Docker:<br/> 
 https://docs.docker.com/desktop/windows/install/
2. Double-click InstallDocker.msi to run the installer.
3. Follow the Install Wizard: accept the license, authorize the installer, and proceed with the install.
4. Click Finish to launch Docker.
5. Docker starts automatically.
6. Docker loads a “Welcome” window giving you tips and access to the Docker documentation.
- Start Docker
1. build images: ```docker build -t <name> .``` 
2. run image: ```docker run <name>```
## Mac
- Install and run Docker Desktop on Mac
1. Double-click Docker.dmg to open the installer, then drag the Docker icon to the Applications folder.
2. Double-click Docker.app in the Applications folder to start Docker
3. The Docker menu (whale menu) displays the Docker Subscription Service Agreement window. It includes a change to the terms of use for Docker Desktop.
4. Click the checkbox to indicate that you accept the updated terms and then click Accept to continue. Docker Desktop starts after you accept the terms.
- Start Docker
1. build images: ```docker build -t <name> .``` 
2. run image: ```docker run <name>```

# Built With Technologies
1. Node 16 
2. MongoDB 
3. Docker 
4. React 17 
5. JSX 
6. ES6 
7. MUI 
8. SCSS
9. Jest

<!-- TESTING -->
# Testing
1. Run all tests: ```npm test```
- Test locally login and registration user: 
2. ```cd docker_test```
3. ```npm i```
4. ```npm start``` 

<!-- SEQUENCE DIAGRAMS -->
# Sequence Diagrams
If you want to upload the sequence diagram use the next source:<br/>
https://sequencediagram.org/
## Code Diagram Of Login
```title Login flow

actor Client
entity Web_Server

entity Auth_microservice
database Database


Client->Client: Click on the login button
Client->Client: Show login form
Client->Client: Validate the form
Client->Web_Server: Login

Web_Server->Auth_microservice: Login
Auth_microservice->Auth_microservice: Validate login fields

Auth_microservice->Database: Find user by email
Database--#redxAuth_microservice: if user doesn't exist in DB return message error

Auth_microservice--#redxWeb_Server: Message error
Web_Server--#redxClient: Email or password wrong
Database-->Auth_microservice:Return the User


note over Auth_microservice:Compare between db password\n and user's password


Database--#redxAuth_microservice: If password doesn't match return message error
Auth_microservice--#redxWeb_Server: message error
Web_Server--#redxClient: Email or password wrong


Auth_microservice->Web_Server: Set user_id and JWT token in the response.

Web_Server->Client:Return the User object (without password) and jwt token that valid for 24h on the cookie
```
## Login Scheme
<img src="sequenceDiagrams/login.png"width="600">
![](sequenceDiagrams/login.png)

## Code Diagram Of Registration

```title Registration flow

actor Client
entity Web_Server

entity Auth_microservice
database Database


Client->Client: Click on the register button
Client->Client: Show registration form
Client->Client: Validate the form
Client->Web_Server: Register

Web_Server->Auth_microservice: Register
Auth_microservice->Auth_microservice: Validate registration fields

Auth_microservice->Database: Find user by email
Database--#redxAuth_microservice: If user exists in DB return msg with error
Auth_microservice--#redxWeb_Server: error message

Database-->Auth_microservice: If user doesn't exist return empty response

Auth_microservice->Auth_microservice: Create hashed password using bcrypt
note over Auth_microservice: Creating a new user with hashed\n password and other fields

Auth_microservice->Database: Save a new user in DB
Auth_microservice->Web_Server: Set the user(without password) and JWT token

Web_Server->Client: Set a cookie with JWT token for 24h and return the User
```
## Registration Scheme
<img src="sequenceDiagrams/registration.png"width="600">
![](sequenceDiagrams/registration.png)

<!-- RESOURCES -->
# Resources
1. Create sequence diagram: https://sequencediagram.org/
2. Docker images: https://hub.docker.com/search?type=image
3. MongoDB Atlas: https://www.mongodb.com/atlas/database
4. Jest: https://jestjs.io/docs/getting-started
5. Docker Documentation: https://docs.docker.com/get-started/

<!-- CONTACT -->
# Contact
* Roman Irinarkhov - romairi1991@gmail.com
* Project Link: [https://github.com/romairi/auth-microservice](https://github.com/romairi/auth-microservice)