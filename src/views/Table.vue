<template>
  <div class="wrapper">
    <router-link to="/admin">
    <div class="mybutton">
    <button class="btn btn-success btn-lg">Add an Order </button>
    </div>
    </router-link>
    <ItemList :items="items" />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemList from "../components/ItemList.vue"

export default {
  name: 'Table',
  components: {
    ItemList
  },
  data() {
    return {
    }
  },
  computed: {
    items() {
      return this.$root.$data.items;
    }
  },
}
</script>

<style scoped>
.mybutton {
  display: flex;
  justify-content: end;
}

</style>