<template>
   <div>

       <div class="flex mb-4">
           <div class="w-full h-12">
               <agregarAlumno></agregarAlumno>
           </div>
       </div>

       <!-- Full width column -->
       <div class="flex mb-4">
           <div class="w-full bg-grey h-12">
               <h4>Profesor: Juan Mariano Escaleta</h4>
           </div>
       </div>
       <!-- Five columns -->
       <div class="flex mb-4" style="font-size: 20px">
           <div class="w-1/5 bg-grey h-12">0</div>
           <div class="w-1/5 bg-grey-light h-12">Nombre</div>
           <div class="w-1/5 bg-grey h-12">Apellido</div>
           <div class="w-1/5 bg-grey-light h-12">Curso</div>
           <div class="w-1/5 bg-grey h-12">Edad</div>
           <div class="w-1/5 bg-grey h-12">FUNCION</div>
       </div>
       <div class="flex mb-4 ">
           <div class="w-1/5 h-12">1</div>
           <div class="w-1/5 h-12">Carlo</div>
           <div class="w-1/5 h-12">Gammarota</div>
           <div class="w-1/5 h-12">5to A</div>
           <div class="w-1/5 h-12">23</div>
           <div class="w-1/5 h-12">
               <div class="flex mb-4">
                   <div class="w-1/2 h-12"><button class="content-center bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">EDIT</button></div>
                   <div class="w-1/2 h-12"><button class="content-center bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">DELETE</button></div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import agregarAlumno from "./agregarAlumno"
    export default {
        name: "tableAlumnos",
        components:{
            agregarAlumno
        }
    }
</script>

<style scoped>

</style>