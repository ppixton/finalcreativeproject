<template>
    <div class='wrapper'>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Artist Loctaion</th>
                        <th>Time Employed</th>
                        <th>View Orders</th>
                        <th>Edit | Delete </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="artist in artists" :key="artist.id">
                        <td>{{artist.fname}}</td>
                        <td>{{artist.lname}}</td>
                        <td>{{artist.email}}</td>
                        <td>{{artist.location}}</td>
                        <td>{{artist.employed}}</td>
                        <td>
                            <router-link :to="`/view/${artist._id}`">
                                    <button class="btn btn-secondary btn-sm">View</button>
                                </router-link>
                        </td>
                        <td>                
                                <router-link :to="`/edit/artist/${artist._id}`">
                                    <button class="btn btn-secondary btn-sm">Edit</button>
                                </router-link> | 
                            <router-link :to="'/#'" >
                            <button class="btn btn-dark btn-sm" @click="myDelete(artist)">Delete</button>
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
  name: 'ArtistList',
  props: {
    artists: Array
  },
  methods: {
      async myDelete(artist){
          try {
            await axios.delete("/api/artists/" + artist._id);
            return true;
          } catch(error) {
              console.log(error);
          }
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