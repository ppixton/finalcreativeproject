<template>
  <div class="wrapper">
    <ItemList :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import ItemList from "../components/ItemList.vue"

export default {
  name: 'Table',
  components: {
    ItemList
  },
  data() {
    return {
      items: [],
      artistID: this.$route.params.id,
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/artists/" + this.artistID + "/items");
        this.items = response.data;
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