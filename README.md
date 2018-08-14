To start the server:
- Go to the server folder and run npm install & npm start
- It will initialice the server in http://localhost:8080
- to start it with docker:
    sudo docker build -t <your username>/node-server .
    docker images (ves las imagenes activas)
    sudo docker run -p 8080:8080 nurialopez/node-server
    it will be accesible in http://localhost:8080 

To start the front-end:
- Go to the paradigma-ui folder and run npm install & npm start
- It will initialice the front-end in http://localhost:3000
- to start it with docker:
    sudo docker build -t <your username>/node-web-app .
    docker images (ves las imagenes activas)
    sudo docker run -p 49160:3000 nurialopez/node-web-app 
    (if your port 3000 it's busy run sudo docker run -p 3000:3000 nurialopez/node-web-app. The app will be accesible in  http://localhost:49160 )
    it will be accesible in http://localhost:3000 

How to use the front-end:
- It will load a loader whilst the list of the phones is being fetched. (It takes less than one second.)
- Once the data are retrieved from the api, a list of cards will be shown.
- Every card is clickable and when it's clicked it will opne some further details about the selected item inside the card.
- for testing: run npm test in paradigma-ui folder.
