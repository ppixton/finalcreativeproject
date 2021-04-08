<template>
<div class="wrapper">
    <div class="jumbotron">
    <h1 class="display-4">Add an Order</h1>
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

                <label for="embroiderer">Artist Responsible: </label>
                <input id="embroiderer" v-model="embroiderer" type="text" embroiderer="embroiderer">
                <br>
                <br>
                    
                <button class="btn btn-success btn-lg" @click="mySubmit">Submit</button>

        </div>
    </div>
</div>


</div>
    
</template>

<script>
export default {
  name: 'Admin',
  data(){
      return {
            id: "",
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
            embroiderer: "",
      }
    
  },
  components: {
  },
  methods:{
      mySubmit (){
          this.$root.$data.idLength += 1;
          let sObj = {
            "id": this.$root.$data.idLength,
            "name": this.name,
            "email": this.email,
            "state": this.state,
            "city": this.city,
            "address": this.address,
            "zip": this.zip,
            "color": this.color,
            "size": this.size,
            "uni": this.uni,
            "status": this.status,
            "embroiderer": this.embroiderer,
          }
          console.log(sObj)
          this.$root.$data.items.push(sObj)
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