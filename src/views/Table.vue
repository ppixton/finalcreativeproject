<template>
  <div>
      <div v-if="user" class="wrapper">
      <router-link to="/admin">
      <div class="mybutton">
      <button class="btn btn-success btn-lg">Add an Order </button>
      </div>
      </router-link>
      <ItemList :items="items" />
    </div>
  <Login v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ItemList from "../components/ItemList.vue"
import Login from "../components/Login.vue"

export default {
  name: 'Table',
  components: {
    ItemList,
    Login
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
    this.getUser();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
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