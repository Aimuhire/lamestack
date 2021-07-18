var express = require('express');
const APIClient = require('../api/v1/APIClient');
var albumsRouter = express.Router()

albumsRouter.get('/:albumID/photos', function (req, res) {
    const albumID = req.params.albumID;
    if (!albumID) return res.send([])
    APIClient.getAlbumPhotos(albumID).then((response) => {
        res.send(response)
    })
})

module.exports = albumsRouter