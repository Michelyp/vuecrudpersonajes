<template>
  <h1>Personajes</h1>
  <router-link class="btn btn-dark" to="/"
    >Volver</router-link
  >
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Personaje</th>
        <th scope="col">Imagen</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="personaje in personajes" :key="personaje">
        <td>{{ personaje.nombre }}</td>
        <td><img :src="personaje.imagen" style="width: 100px,height:100px" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ServicioPersonaje from "./../services/ServicioPersonaje";
const service = new ServicioPersonaje();
export default {
  name: "ListaPersonajes",
  mounted() {
    var id = this.$route.params.id;
    service.findPersonajes(id).then((result) => {
      this.personajes = result;
      console.log(result);
    });
  },
  data() {
    return {
      personajes: []
    };
  }

};
</script>

<style></style>
