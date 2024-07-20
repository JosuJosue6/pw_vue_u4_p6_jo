<template>
    <h1>Registro Nuevo estudiante</h1>
    <Formulario />
    <button>Guardar</button>
    
</template>

<script>
import Formulario from '../components/Formulario.vue'
import Boton from '../components/Boton.vue'

export default {

    components: {
        Formulario,
        Boton
    }
}

</script>

<style scoped>
button {
        background-color: #4e9050; 
        border: none;
        border-radius: 5px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
    }
    button:hover {
        background-color: #377c3a;
        cursor: pointer;
    }
</style>