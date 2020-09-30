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
    console.log('Calling API', pageIndex , pageSize , `${picsumApiUrl}${allImagesEndpont}?page=${pageIndex}&limit=${pageSize}`);
    return fetch (`${picsumApiUrl}${allImagesEndpont}?page=${pageIndex}&limit=${pageSize}`).then ( res => res.json());
}

function getOneImage (imageId, width = defaultWidth, height = defaultHeight) {
    return fetch (`${picsumApiUrl}${oneImageEndpoint}/${imageId}/${width}/${height}`);
}

export default {
    getAllImages,
    getOneImage
};