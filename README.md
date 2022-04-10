# Hacker News UI

![Hacker News Screenshot](https://i.imgur.com/sdfp65H.png)

### Development

In the project directory (after package installation), you can run:

```bash
npm start
```

This runs the app in the development mode and will automatically open in the browser for viewing on [localhost:8080](http://localhost:8080).

### Deployment

Deploy to Github pages:

```bash
npm run build &&
./node_modules/.bin/gh-pages -d build
```