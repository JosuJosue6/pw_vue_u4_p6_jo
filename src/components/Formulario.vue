<template>

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
                        <input placeholder="Nombre" type="text">
                    </p>
                    <p type="Apellido">
                        <input placeholder="Apellido" type="text">
                    </p>
                    <p>Fecha Nacimiento</p>
                    <p type="Fecha Nacimiento">
                        <input type="date">
                    </p>

                </form>

                <div>
                    <button @click="consultar"> Buscar </button>
                    <button> Actualizar </button>
                </div>

            </section>
            <footer></footer>
        </div>
    </div>

</template>

<script>

import {obtenerPorCedulaAxiosFachada, actualizarFachada} from '../clients/clienteEstudiante.js'

export default {

    data() {
        return {
            cedula: null
        }
    },

    methods: {
        async consultar() {
            console.log(this.cedula);
            const data = await obtenerPorCedulaAxiosFachada(this.cedula);
            console.log(data);
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