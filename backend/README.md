Pew Pew Pew! Serverless Array Backend
===

This is built using the [Serverless Framework](https://serverless.com), targeting the AWS **Python 3.6** Lambda stack.

Contributing
---

Backend (`/backend`) codebase assumes **Python 3.6.6** and **Node JS 8.10** for tooling.

Recommended version managers:
- [pyenv](https://github.com/pyenv/pyenv)
    - and [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) to manage virtualenvs
- [nvm](https://github.com/creationix/nvm)

### Bootstrapping

```
# Ensure you're in the /backend directory

# :: installs python
pyenv install 3.6.6

# :: these steps set up the virtual env in a way 
#    that serverless can see properly
pyenv virtualenv -p python3.6 3.6.6 <virtualenv name>
pyenv local <virtualenv name>

# :: installs node
nvm install 8.10

# :: uses the node version specified in .nvmrc
nvm use

# :: installs the global and local deps
npm i -g serverless
npm i
```

### Deploying

This will deploy the stack into your own AWS account:
```
sls deploy
```
