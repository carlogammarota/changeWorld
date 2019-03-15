<template>
    <div>

        <button class="content-center bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="show()">Agregar Alumno</button>
        <modal name="agreeAlumn" id="modal"  height="auto">
            <form class="w-full max-w-md" action="none">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                            Nombre
                        </label>
                        <input v-model="person.nombre" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
                        <p class="text-red text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                            Apellido
                        </label>
                        <input v-model="person.apellido" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-last-name" type="text" placeholder="Doe">
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
                            Curso
                        </label>
                        <div class="relative">
                            <select v-model="person.curso" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                                <option>1ro A</option>
                                <option>1ro B</option>
                                <option>2do A</option>
                                <option>2do B</option>
                                <option>3ro A</option>
                                <option>3ro B</option>
                            </select>
                            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
                            Edad
                        </label>
                        <input v-model="person.edad" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="number" placeholder="Edad">
                    </div>


                </div>

            </form>
            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" @click="agregarPersona">Agregar</button>

        </modal>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "agregarAlumno",
        data(){
            return {
                person: {}
            }
        },
        methods: {
            ...mapActions([
                'agregar',  // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
            ]),



            agregarPersona(){
                this.agregar(this.person);

                console.log("agregarPersona");
                console.log(this.person);

                //this.person.push({nombre: person.nombre});

                //this.$store.state.alumnos("agregar", this.person)
            },
            show () {
                this.$modal.show('agreeAlumn');
            },
            hide () {
                this.$modal.hide('agreeAlumn');
            }
        },
        // computed: {...mapActions(['agregar'])}
        // computed:{ ...mapGetters([]) }
    }
</script>

<style scoped>
    #modal{
        height: auto !important;

    }
    form{
        padding: 50px;
    }
</style>