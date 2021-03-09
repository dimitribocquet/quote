# Quote

## Project setup
```
npm install
cp .env.example .env
```

Configure Firebase credentials in `.env` file.

### Build & run with Docker
```
docker build -t quote .
docker run --name quote -d -p 8888:80 quote
```

You can access to the project from http://localhost:8888.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
