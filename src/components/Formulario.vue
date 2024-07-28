<template>

    <div class="container">
        <div class="formulario">
            <header>
            </header>
            <nav></nav>
            <section>
                <form class="form">
                    <p type="Cedula">
                        <input v-model="cedula" placeholder="Cédula" type="text">
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
                    <button @click="consultar"> Buscar </button>
                    <button @click="actualizar"> Actualizar </button>
                </div>

            </section>
            <footer></footer>
        </div>
    </div>

</template>

<script>

import {obtenerPorCedulaAxiosFachada,actualizarFachada} from '../clients/clienteEstudiante.js'

export default {

    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null,
            fechaNacimiento: null,
            genero:null
        }
    },

    methods: {
        async consultar() {
            console.log(this.cedula);
            const data = await obtenerPorCedulaAxiosFachada(this.cedula);
            console.log(data);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            this.fechaNacimiento = data.fechaNacimiento;
            this.genero = data.genero;
        },

        async actualizar(){

            const bodyEstudiante = {
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                genero: this.genero
            }
            const data = await actualizarFachada(this.cedula,bodyEstudiante);
        }
    },

    created(){
        console.log(this.$route);
        let cedula =this.$route.params.cedula;
        console.log(cedula)
        if (cedula !== "vacio"){
            this.cedula = cedula;
            this.consultar();
        }
    }
}

</script>

<style>
p {
    margin: 10px;
    padding: 0;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
}

input {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1.5px solid #000000;
}

button {
    background-color: #4e9050;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 15px;
}

button:hover {
    background-color: #377c3a;
    cursor: pointer;
}
</style>