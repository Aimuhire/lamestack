const HTTPClient = require("../../services/HTTPClient");
const APIEndpoints = require("./apiEndpoints");


module.exports = class APIClient {
    static getAlbumPhotos(albumID) {
        return HTTPClient.get(`${APIEndpoints.ALBUMS_ENDPOINT}/${albumID}/photos`).then((response) => {
            console.log("====> ", response);

            return response.map((item) => { return { title: item.title, thumbnailUrl: item.thumbnailUrl } }
            )
        })
    }
}
