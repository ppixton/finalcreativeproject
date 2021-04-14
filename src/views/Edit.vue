<template>
<div class="wrapper">
    <div class="jumbotron">
    <h1>Edit an Order</h1>
    <p>Leaving a field blank will leave the previous information in the table - you only need to fill the fields you intend to change </p>
    <hr class="my-4">
    <div class="add">
        <div class="form">
                <label for="name">Full Name: </label>
                <input id="name" v-model="name" type="text" name="name">
                <br>
                <br>

                <label for="email">Email: </label>
                <input id="email" v-model="email" type="text" email="email">
                <br>
                <br>

                <label for="state">State: </label>
                <input id="state" v-model="state" type="text" state="state">
                <br>
                <br>

                <label for="city">City: </label>
                <input id="city" v-model="city" type="text" city="city">
                <br>
                <br>

                <label for="address">Street Address: </label>
                <input id="address" v-model="address" type="text" address="address">
                <br>
                <br>

                <label for="zip">Postal Code: </label>
                <input id="zip" v-model="zip" type="text" zip="zip">
                <br>
                <br>

                <label for="color">Color: </label>
                <input id="color" v-model="color" type="text" color="color">
                <br>
                <br>

                <label for="size">Sweatshirt Size: </label>
                <input id="size" v-model="size" type="text" size="size">
                <br>
                <br>

                <label for="status">Order Status: </label>
                <input id="status" v-model="status" type="text" status="status">
                <br>
                <br>

                <label for="uni">University Letters: </label>
                <input id="uni" v-model="uni" type="text" uni="uni">
                <br>
                <br>

                <label for="artist">Artist Responsible: </label>
                <select id="artist" v-model="artist" artist="artist" class="form-control">
                  <option disabled value="" selected="selected">Please select one</option>
                  <option v-for="artist in artists" :key="artist._id" v-bind:value="artist._id">
                          {{artist.fname}}
                  </option>
                </select>
                <br>
                <br>

                <router-link to="/table">
                <button class="btn btn-success btn-lg" @click="editItem()">Edit</button>
                </router-link>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data(){
      return {
        name: "",
        email: "",
        state: "",
        city: "",
        address: "",
        zip: "",
        color: "",
        size: "",
        uni: "",
        status: "",
        artist: "",
        artists: [],
        item: Object,
      }
    
  },
  created() {
    this.getItem();
  },
  methods:{
      async editItem (){
          if (this.name === ""){
                this.name = this.item.name
            }
            if (this.email === ""){
                this.email = this.item.email
            }
            if (this.state === ""){
                this.state = this.item.state
            }
            if (this.city === ""){
                this.city = this.item.city
            }
            if (this.address === ""){
                this.address = this.item.address
            }
            if (this.zip === ""){
                this.zip = this.item.zip
            }
            if (this.color === ""){
                this.color = this.item.color
            }
            if (this.size === ""){
                this.size = this.item.size
            }
            if (this.uni === ""){
                this.uni = this.item.uni
            }
            if (this.status === ""){
                this.status = this.item.status
            }
          try{
            await axios.put("/api/" + this.artist + "/items/" + this.item._id, {
                name: this.name,
                email: this.email,
                state: this.state,
                city: this.city,
                address: this.address,
                zip: this.zip,
                color: this.color,
                size: this.size,
                uni: this.uni,
                status: this.status,
             })
              return true;
            } catch(error) {
              console.log(error)
          }
      },
      async getItem (){
          this.getArtists();
        try {
            let response = await axios.get("/api/items/" + this.$route.params.id);
            this.item = response.data;
            return true;
        } catch (error){
            console.log(error)
        }
      },
      async getArtists(){
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
.wrapper {
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
}
</style>