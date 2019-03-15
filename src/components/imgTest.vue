<template>
    <div>
        <img height="200px" :src=srcTest alt="">
        </br>

        <!-- Este boton se encarga de llamar a la funcion "update la cual se encuentra dentro de "methods -->
        <button @click="update()" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">button</button>
    </div>
</template>

<script>
    export default {
        name: "imgTest",
        props: {
            srcTest: String
        },
        methods: {
            update(){
                console.log("Update");

                            //Esta funcion se encarga de emitir un objecto con el nombre "carlo" a un componente hijo, en este caso "App.vue
                this.$emit("carlo", {test: 123});
            }
        }
    }
</script>

<style scoped>
    button{

    }
</style>