var express = require('express');
const APIClient = require('../api/v1/APIClient');
var albumsRouter = express.Router()

albumsRouter.get('/:albumID/photos', function (req, res) {
    const albumID = req.params.albumID;
    if (!albumID) return res.send([])
    APIClient.getAlbumPhotos(albumID).then((response) => {
        res.header("Access-Control-Allow-Headers", "https://lamealbum.aimuhire.com")
        res.header("Access-Control-Allow-Origin", "https://lamealbum.aimuhire.com")
        res.send(response)
    })
})

module.exports = albumsRouter