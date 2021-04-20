<template>
<div>
  <div v-if="user" class="wrapper">
    <router-link to="/addartist">
    <div class="mybutton">
    <button class="btn btn-success btn-lg">Add an Artist </button>
    </div>
    </router-link>
    <ArtistList :artists="artists" />
  </div>
  <Login v-else />
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ArtistList from "../components/ArtistList.vue"
import Login from "../components/Login.vue"

export default {
  name: 'Table',
  components: {
    ArtistList,
    Login
  },
  data() {
    return {
      artists: [],
    }
  },
  created() {
    this.getArtists();
    this.getUser();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async getArtists() {
      try {
        let response = await axios.get("/api/artists");
        this.artists = response.data;
        return true;
      } catch (error){
        console.log(error)
      }
    },
    async getUser() {
      try {
        let response = await axios.get('/api/users');
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>
.mybutton {
  display: flex;
  justify-content: end;
}

</style>