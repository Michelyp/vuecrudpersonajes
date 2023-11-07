import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import DetalleSerie from './components/DetalleSerie.vue';
import ListaPersonajes from './components/ListaPersonajes.vue'

const myRoutes =[
    {
        path:"/", component:HomeComponent
    },
    {
        path:"/detalle/:id", component:DetalleSerie
    },
    {
        path:"/listapersonajes/:id", component:ListaPersonajes
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;