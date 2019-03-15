<template>
  <div id="app">


    <!-- Three columns -->
    <div class="flex mb-4">
      <div class="w-1/6 h-12"></div>
      <div class="w-3/6 h-12">
        <tableAlumnos></tableAlumnos>
        {{ newValue }}
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="este es un mensaje"/>
        <!-- cuando se dispare el emit del componente chico,
                se disparara esta etiqueta @carlo="handler($event)" la cual se encarga de llamar a la funcion "handler que se encuentra en methods pasandole "$event que seria el objeto enviado.
          -->
        <button class="content-center bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="test()">TEST</button>
        <imgTest srcTest="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?cs=srgb&dl=airplane-architecture-big-city-1157255.jpg&fm=jpg" @carlo="handler($event), show()"></imgTest>
        <h1>{{ mensaje }}</h1>


        <!--{{countAlias}}-->
        {{ users }}



        <!-- Ventana modal vue-js-modal -->
        <modal name="hello-world" height="auto">
          <h1>{{ mensaje.test }}</h1>
          <h2>count: {{ count }}</h2>
          <card></card>
          <!-- Three columns -->
          <div class="flex mb-4">
            <div class="w-1/3 bg-grey-light h-12"></div>
            <div class="w-1/3 bg-grey h-12" style="text-align: center">
              <button @click="hide()" class="content-center bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">EXIT</button>
            </div>
            <div class="w-1/3 bg-grey-light h-12"></div>
          </div>

        </modal>
      </div>
      <div class="w-1/6 h-12">

      </div>

    </div>


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import imgTest from './components/imgTest.vue'
import card from "./components/card"
import tableAlumnos from "./components/tableAlumnos"
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    HelloWorld,
    imgTest,
    card,
    tableAlumnos
  },
  data(){
    return {
      mensaje: "",
      count: null,
      alumnos: [],
      // newValue: {}
    }
  },

  // watch: {
  //   init(newValue) {
  //     this.alumnos = newValue;
  //   }
  //   },

  create() {
    this.count = store.state.count;
    console.log("create")
  },

  methods: {
    test(){
      console.log("alumnosDevuelve", this.alumnos)
    },
    handler(data){
      //Aqui resivimos "data que seria el $event
      //this.count = this.store.state.count;

      console.log("data", this.$store.state.count)
      console.log("nombreDevuelve", name)


      //Guardamos data > $event dentro la variable mensaje
      this.mensaje = data;
      //alert(data.test);
    },
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }
  },
  mounted() {
    this.count = this.$store.state.count
  },

  computed:{ ...mapState(['users']), ...mapGetters([]) }

  //de cualquiera de las dos maneras esta bien


  // mapState({
  //            countAlias: 'users'
  //          })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
