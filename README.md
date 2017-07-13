# Semaphore Continuous Deployment
Simple continious deploy
Automaticly deploy an application to production when pushed/merged to master.

## Requirements
- Ubuntu server running nginx
- [Semaphore](https://semaphoreci.com/)

Setup Semaphore to build off the master brance of this repository

## Deployment Commands for Semaphore
ssh into your server, setup the ssh key and use doployment commands
```bash
ssh-keyscan -H -p 22 45.55.153.229 >> ~/.ssh/known_hosts
ssh root@45.55.153.229 'bash -s' < deploy.sh
```