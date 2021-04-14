<template>
<div class="wrapper">
    <div class="jumbotron">
    <h1 class="display-4">Add an Embroidery Artist</h1>
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

                <label for="employed">Time Employed: </label>
                <input id="employed" v-model="employed" type="text" employed="employed">
                <br>
                <br>
                    


                <router-link to="/artists">
                  <button class="btn btn-success btn-lg" @click="newSubmit">Submit</button>
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
            fname: "",
            lname: "",
            email: "",
            location: "",
            employed: "",
      }
    
  },
  components: {
  },
  methods:{
      async newSubmit () {
        try {
          let response = await axios.post('/api/artists', {
            fname: this.fname,
            lname: this.lname,
            email: this.email,
            location: this.location,
            employed: this.employed
          });
          console.log(response)
        } catch (error) {
          console.log(error);
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