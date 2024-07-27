//Aqui se configura las librerias del router y tambien se declara las rutas del proyecto 
import { createRouter, createWebHashHistory } from 'vue-router'

//el @ siempre va al inicio
//Siempre importar primero las paginas
import EstudianteActualizar from '@/pages/EstudianteActualizar.vue'
import EstudianteEliminar from '@/pages/EstudianteEliminar.vue'
import EstudianteInsertar from '@/pages/EstudianteInsertar.vue'
import BienvenidaPage from '@/pages/BienvenidaPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import BloqueadoPage from '@/pages/BloqueadoPage.vue'

//Rutas
const routes = [
    {
        //Nombro la ruta del path de mi pagina despues del :8080
        path: '/estudianteActualizar/:cedula',
        component: EstudianteActualizar
    },
    {
        path: '/estudianteEliminar',
        component: EstudianteEliminar
    },
    {
        path: '/estudiantesInsertar/:id',
        name: 'prueba',
        component: EstudianteInsertar

    },
    {
        path: '/',
        component: BienvenidaPage

    },

    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage,
    },

    {
        path: '/bloqueado',
        name: 'blo',
        component: BloqueadoPage
    }
]

//Configurar la dependencia
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

//Programar los Guardianes
router.beforeEach((to, from, next) => {
    //

    console.log("Guardianes .............................")
    console.log(to);
    console.log(from);
    console.log(next);

    let usuario = 'josue';
    let resultado = false;
    const random= Math.random()*100;

    if (random > 50) {
        console.log("Si tiene acceso a esa pagina");
        next();
    } else {
        console.log("Acceso BLOQUEADO :C");
        next({ name: "blo" })
    }
})

export default router


