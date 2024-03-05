# Chmury assignment &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Wawrzynn/chmury-assignment/blob/main/LICENSE)
> Additional information or tag line

Simple CRUD created for cloud assigment using React and Node. App is used to perform varoius CRUD operations on it using movies db. I use Vagrant(Ansible, Docker, Kubernetes and OpenStack on it.

## Installing / Getting started

In order to install the application user needs node.js and npm.

### Frontend
```shell
cd client
npm install
npm run start
```
Here user navigates to client folder in order to install dependencies required to run the app. Last command runs the app on [localhost:3000](https://localhost:3000/).

### Backend
```shell
cd server
npm install
npm run start
```
Here user navigates to server folder in order to install dependencies required to run the app. Last command runs the app on [localhost:8080](https://localhost:8080/).

### Database
```shell
cd server
touch .env
DB_USERNAME = your mongodb atlas username
DB_PASSWORD = your mongodb atlas password
```
Here user navigates to server and creates .env file in order to establish enviromental variables used in MongoDB.

### Vargant
User needs [Vagrant](https://developer.hashicorp.com/vagrant/docs/installation).
```shell
vagrant up
vagrnat ssh
```
This command allows user to provision Vagrant and establish everything necesary using Vagrantfile and ansible playbooks.

### Docker
User needs to install [Docker](https://docs.docker.com/engine/install/).
```shell
docker-compose build
docker-compose up
```
This commands allows user to build and run applications using Docker  and establish everything necesary using docker-compose.yml.

## Developing

### Built With
Build with React, Node.js, Express.js, MongoDB, Vagrant, Ansible and Docker.

### Prerequisites
User needs to have installed node.js, Vagrant and Docker to run everything in this repository as described above.

### Setting up Dev
No additional steps needed besides those described above.

## Database

Project uses MongoDB Atlas and requires user to create a database.

## Licensing

Project is using MIT license.
