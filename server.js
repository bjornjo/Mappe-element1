const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();

//file system
var fs = require('fs');
var readline = require('readline');

var albums = [];

var filename = "albums.txt";
readline.createInterface({
    input: fs.createReadStream(filename)
}).on('line', function(line) {
    var split = line.split(";");
    var album = {
        artist: split[0],
        title: split[1],
        year: split[2]
    };
    albums.push(album);

});




app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/albums', (req, res) => res.send(albums));

app.listen(3000, err => {
    if (err) {
        throw new Error(err);
    }

    console.log('Listening on http://localhost:3000');
});
