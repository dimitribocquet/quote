![Screenshot of Quote](https://github.com/dimitribocquet/quote/blob/master/front/public/images/screenshot.png?raw=true)


## Project setup

### Api

### Front
```
cp .env.example .env
cd ./api
npm install
cd ../front
npm install 
npm run serve
```

Configure Firebase credentials in `.env` file.

### Build & run with Docker
```
docker-compose up -d --build
```

You can access to the Front from http://localhost:8080.
Api is available from http://localhost:8082.
MongoDB Client is available from http://localhost:8081.
