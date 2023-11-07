<template>
  <div class="card" style="width: 25rem">
    <img :src="serie.imagen" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ serie.nombre }}</h5>
      <p class="card-text">IMDB: {{ serie.puntuacion }}</p>
      <router-link
        :to="'/listapersonajes/' + serie.idSerie"
        class="btn btn-primary"
        >Personajes</router-link
      >
    </div>
  </div>
</template>

<script>
import ServicioPersonaje from "@/services/ServicioPersonaje";
const service = new ServicioPersonaje();
export default {
  name: "DetalleSerie",
  mounted() {
    this.cargarSerie();
  },
  methods: {
    cargarSerie() {
      var id = this.$route.params.id;
      service.findSerie(id).then((result) => {
        this.serie = result;
        console.log(result);
      });
    }
  },
  data() {
    return {
      serie: {}
    };
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.cargarSerie();
      }
    }
  }
};
</script>

<style></style>
