<template>
<div class="wrapper">
  <div class="menu">
    <h2>Welcome, {{user.firstName}} {{user.lastName}} | <button class="btn btn-dark btn-sm" @click="logout()">Logout</button></h2>
  </div>

  <br> <br> <br> 
  <h3>Your Artist Profile:</h3>
    <router-link to="/addartist">
    <button class="btn btn-success btn-lg">Add an Artist </button>
    </router-link>
  <ArtistList :artists="artists" />
</div>
</template>


<script>
import axios from 'axios';
import ArtistList from "../components/ArtistList.vue"


export default {
  name: 'Dashboard',
  components: {
    ArtistList
  },
  data() {
    return {
      artists: [],
    }
  },
  created() {
    this.getArtists();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getArtists() {
      try {
        let response = await axios.get("/api/artists/dash");
        this.artists = response.data;
        return true;
      } catch (error){
        console.log(error)
      }
    },
  }
}
</script>


<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}

.side {
  display: flex;
  justify-content: center;
  align-content: flex-end;
}
</style>