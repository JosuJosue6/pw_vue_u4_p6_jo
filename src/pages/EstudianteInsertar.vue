<template>
    <h1>Registro Nuevo estudiante</h1>
    <div class="container">
        <div class="formulario">
            <header>
            </header>
            <nav></nav>
            <section>
                <form class="form">
                    <p type="Cedula">
                        <input v-model="cedula" placeholder="Cedula" type="text">
                    </p>
                    <p type="Nombre">
                        <input v-model="nombre" placeholder="Nombre" type="text">
                    </p>
                    <p type="Apellido">
                        <input v-model="apellido" placeholder="Apellido" type="text">
                    </p>

                    <p type="Genero">
                        <input v-model="genero" placeholder="Genero" type="text">
                    </p>
                    <p>Fecha Nacimiento</p>
                    <p type="Fecha Nacimiento">
                        <input type="date">
                    </p>

                </form>

                <div>
                    <button @click="insertar"> Agregar </button>

                </div>

            </section>
            <footer></footer>
        </div>
    </div>


</template>

<script>
import Formulario from '../components/Formulario.vue'
import Boton from '../components/Boton.vue'
import { guardarFachada } from '../clients/clienteEstudiante.js'
export default {

    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            genero: null
        }
    },

    methods: {
        async insertar() {
            const bodyEstudiante = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                genero: this.genero
            }

            const data = await guardarFachada(bodyEstudiante);
        }
    },
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