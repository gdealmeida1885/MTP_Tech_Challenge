# MTP Tech Challenge

This repo stores MTP's Tech Challenge, which is an algorithm writen in Javascript and tested with Jest.

### Folder Tree :palm_tree:
The files are organized within the following Folder Tree
- root
  - Fixtures 
    - Stores the test data
  - Support
    - Stores random utils
  - Test
    - Stores the tests
```
mtp_tech_challenge (root)/
├── fixtures/
│   ├── actionMessages.json
│   └── soilsInfo.json
├── support/
│   └── random.js
└── test/
    └── soilCalculator.spec.js
```

### Language & Framework  :computer:
This challenge was made using Javascript and Jest. There's no particular reason for choosing JS but I've decided to use Jest due's is "out-of-the-box" capacities and integrated test runner

### How to run this project? :gear:
This challenge is store at a repl.it which allows you to run the code remotely but also has a Dockerfile and Docker image at dockerhub.

To run this at repl.it, just click [HERE](https://replit.com/@GabrielAlmeida/MTPTechChallenge-1?v=1),  open the link and click "Run".

To run on your local machine, either run 
```shell
docker run gdealmeida/mtp_tech_challenge
```

Or clone this repo
```sh
    git clone https://github.com/gdealmeida1885/MTP_Tech_Challenge
```

Within the project's root folder, build the docker image
```sh
docker build . -t gdealmeida/mtp_tech_challenge
```

And run it

```sh
docker run gdealmeida/mtp_tech_challenge
```