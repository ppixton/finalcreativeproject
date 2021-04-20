<template>
    <div class='wrapper'>
        <div class="table">
            <table>
                <thead>
                    <tr>
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
                        <td>{{item.artist.fname}}</td>
                        <td>                
                                <router-link :to="`/edit/${item._id}`">
                                    <button class="btn btn-secondary btn-sm">Edit</button>
                                </router-link> | 
                            <router-link :to="'/table'">
                            <button class="btn btn-dark btn-sm" @click="myDelete(item)">Delete</button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ItemList',
  props: {
    items: Array
  },
  methods: {
      async myDelete(item){
          try {
            await axios.delete("/api/items/" + item._id);
            return true;
          } catch(error) {
              console.log(error);
          }
      },
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