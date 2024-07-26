//Aqui se configura las librerias del router y tambien se declara las rutas del proyecto 
import { createRouter, createWebHashHistory } from 'vue-router'

//el @ siempre va al inicio
//Siempre importar primero las paginas
import EstudianteActualizar from '@/pages/EstudianteActualizar.vue'
import EstudianteEliminar from '@/pages/EstudianteEliminar.vue'
import EstudianteInsertar from '@/pages/EstudianteInsertar.vue'
import BienvenidaPage from '@/pages/BienvenidaPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

//Rutas
const routes = [
    {
        //Nombro la ruta del path de mi pagina despues del :8080
        path: '/estudianteActualizar/:cedula?edad=15',
        component: EstudianteActualizar
    },
    {
        path: '/estudianteEliminar',
        component: EstudianteEliminar
    },
    {
        path: '/estudiantesInsertar',
        component: EstudianteInsertar

    },
    {
        path: '/',
        component: BienvenidaPage

    },

    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }
]

//Configurar la dependencia
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router


