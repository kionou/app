<template>
  <div class="home" v-for="info in infos" :key="info.id">

   {{info.nom_marche}}
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      infos:""
    }
  },
  mounted() {
    axios
  // .get("http://simro-kberthe.pythonanywhere.com/api/marche")
   .get("http://localhost:3000")

  .then((response) => {
  console.log("data",response.data , this.infos)
  this.infos = response.data
  })
  },
}
</script>
