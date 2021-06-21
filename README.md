<h1 align="center">
    Bytebank
</h1>


## About
Bytebank - It is a basic system that simulates bank transfers.

Users will find the following features:
- Transfer
- View transfers

Project designed to study and learn Angular
</p>


## Techs

The following tools were used in the construction of the project:

- [Angular][angular]

## How to run:

### Prerequisites

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js][nodejs].
It's nice to have an editor to work with code like [VSCode][vscode]

### Run (Front End)

```bash
# Clone this repo
$ git clone https://github.com/matheustsr/bytebank

# Install dependencies
$ npm install

# Start
$ ng s -o

# It will run in port:3000 - go to http://localhost:3000
```
### Run json-server 

```bash

# Go to "banco de dados" in json
$ cd dados

# Run json-server
$ json-server --watch db.json

```

[nodejs]: https://nodejs.org/
[angular]: https://angular.io/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
