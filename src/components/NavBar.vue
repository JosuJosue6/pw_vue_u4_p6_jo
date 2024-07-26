<template>
    <div>
        <router-link to="/">Bienvenida</router-link>
        <router-link to="/estudianteActualizar/vacio">Estudiante Actualizar</router-link>
        <router-link to="/estudiantesInsertar">Estudiante Crear</router-link>
        <router-link to="/estudianteEliminar">Estudiante Eliminar</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    padding: 20px 30px;
    border: solid 2px black;
    background: rgb(48, 48, 48);
}

div a{
    color: rgb(255, 255, 255);
    margin: 0px 20px;
    font-size: 18px;
    text-decoration: none;
}

div a:hover{
    color: rgb(0, 0, 0);
    margin: 0px 20px;
    font-size: 18px;
    background:rgb(255, 255, 255);
    padding: 20px 20px;
    border-radius: 5px;
    text-decoration: underline;
}

</style>