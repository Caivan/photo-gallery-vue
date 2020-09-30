import {Model} from 'vue-mc'

/**
 * Image model
 */
export class ImageElement extends Model {

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            name: '',
            author: '',
            width: null,
            height: null,
            url: '',
            download_url: ''
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id:   (id) => Number(id) || null,
            author: String,
            width: Number,
            height: Number,
            url: String,
            download_url: String
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/task/{id}',
            save:  '/task',
        }
    }
}