<template>
    <h1>Borrar estudiante</h1>
    <p type="Cedula"> <input v-model="cedula" placeholder="Cédula" type="text"> </p>  
    <button @click="eliminar"> Eliminar </button>
    
</template>

<script>

import {eliminarFachada} from '../clients/clienteEstudiante.js'

export default {

    data() {
        return {
            cedula: null
        }
    },
    methods: {
        async eliminar() {

            const data = await eliminarFachada(this.cedula);
        }
    },
}

</script>

<style></style>