<template>
  <div class="home" v-for="info in infos" :key="info.id">

   {{info.marche}}
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
 async mounted() {
  const response = await axios.get('http://localhost:3000/users/')
  console.log(response.data);
    this.infos = response.data

  },
}
</script>
