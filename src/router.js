import Vue from 'vue';
import Router from 'vue-router';
import HomePhotoGallery from '@/views/HomePhotoGallery'
import About from '@/views/About'
import Error from '@/views/Error'


Vue.use (Router);

export default new Router (
    {
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomePhotoGallery
            },
            {
              path: "/about",
              name: "about",
              component: About
            },
            {
              path: "*",
              name: "error",
              component: Error
            }
        ]
    }
)