const picsumApiUrl = 'https://picsum.photos/v2';
const allImagesEndpont = '/list';
const oneImageEndpoint = '/id';
const defaultHeight = 267;
const defaultWidth = 367;
const maximunPageSize = 100;

/**
 * Make the request to the Picsum API, getting a list of Images
 */
function getAllImages (pageIndex = 1, pageSize = maximunPageSize) {
    return fetch (`${picsumApiUrl}${allImagesEndpont}?page=${pageIndex}&limit=${pageSize}`).then ( res => res.json());
}
/**
 * Make a single image request
 * @param {*} imageId Id of the image to request information
 * @param {*} width Width to be requested
 * @param {*} height height to be requested
 */
function getOneImage (imageId, width = defaultWidth, height = defaultHeight) {
    return fetch (`${picsumApiUrl}${oneImageEndpoint}/${imageId}/${width}/${height}`);
}

export default {
    getAllImages,
    getOneImage
};