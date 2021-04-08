<template>
    <div class='wrapper'>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Zip</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>University</th>
                        <th>Status</th>
                        <th>Artist</th>
                        <th>Edit | Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.state}}</td>
                        <td>{{item.city}}</td>
                        <td>{{item.address}}</td>
                        <td>{{item.zip}}</td>
                        <td>{{item.color}}</td>
                        <td>{{item.size}}</td>
                        <td>{{item.uni}}</td>
                        <td>{{item.status}}</td>
                        <td>{{item.embroiderer}}</td>
                        <td>                
                                <router-link :to="`/edit/${item.id}`">
                                    <button class="btn btn-secondary btn-sm">Edit</button>
                                </router-link> | 
                            <button class="btn btn-dark btn-sm" @click="myDelete(item)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: Array
  },
  methods: {
      myDelete(item){
          this.$root.$data.items.splice(this.$root.$data.items.indexOf(item),1);
      }
  }
}
</script>


<style>
.wrapper {
    display: flex;
    margin: auto;
    width: 98%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>