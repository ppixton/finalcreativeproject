<template>
  <div class="wrapper">
    <router-link to="/addartist">
    <div class="mybutton">
    <button class="btn btn-success btn-lg">Add an Artist </button>
    </div>
    </router-link>
    <ArtistList :artists="artists" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ArtistList from "../components/ArtistList.vue"

export default {
  name: 'Table',
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
  methods: {
    async getArtists() {
      try {
        let response = await axios.get("/api/artists");
        this.artists = response.data;
        return true;
      } catch (error){
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.mybutton {
  display: flex;
  justify-content: end;
}

</style>