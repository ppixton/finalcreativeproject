<template>
<div class="wrapper">
    <div class="jumbotron">
    <h1>Edit an Artist</h1>
    <p>Leaving a field blank will leave the previous information in the table - you only need to fill the fields you intend to change </p>
    <hr class="my-4">
    <div class="add">
        <div class="form">
                <label for="fname">First Name: </label>
                <input id="fname" v-model="fname" type="text" fname="fname">
                <br>
                <br>

                <label for="lname">Last Name: </label>
                <input id="lname" v-model="lname" type="text" lname="lname">
                <br>
                <br>

                <label for="email">Email: </label>
                <input id="email" v-model="email" type="text" email="email">
                <br>
                <br>

                <label for="location">Location: </label>
                <input id="location" v-model="location" type="text" location="location">
                <br>
                <br>

                <label for="employed">Time Employed </label>
                <input id="employed" v-model="employed" type="text" employed="employed">
                <br>
                <br>

                <router-link to="/artists">
                <button class="btn btn-success btn-lg" @click="editArtist()">Edit</button>
                </router-link>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EditArtist',
  data(){
      return {
        fname: "",
        lname: "",
        email: "",
        location: "",
        employed: "",
        artist: Object,
      }
    
  },
  created() {
    this.getArtist();
  },
  methods:{
      async editArtist (){
          if (this.fname === ""){
                this.fname = this.artist.fname
            }
            if (this.email === ""){
                this.email = this.artist.email
            }
            if (this.lname === ""){
                this.lname = this.artist.lname
            }
            if (this.location === ""){
                this.location = this.artist.location
            }
            if (this.employed === ""){
                this.employed = this.artist.employed
            }
          try{
            await axios.put("/api/artists/" + this.$route.params.id, {
                fname: this.fname,
                lname: this.lname,
                email: this.email,
                location: this.location,
                employed: this.employed,
             })
              return true;
            } catch(error) {
              console.log(error)
          }
      },
      async getArtist(){
        try {
            let response = await axios.get("/api/artist/" + this.$route.params.id);
            this.artist = response.data;
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