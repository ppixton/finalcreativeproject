<template>
  <div class="wrapper">
    <div class="jumbotron">
      <h1 class="display-4">Welcome!</h1>
      <p class="lead">Madi Stitches Embroidered Sweatshirt Orders Page</p>
      <hr class="my-4">
      <p>On the table page you are able to view the current list of order requests for our embroidered sweatshirts.
        You should update the list as you go through the process of claiming an order, taking payment, making the order and shipping the order.</p>
    </div>
    <br>
    <br>
    <div class="jumbotron">
      <p class="lead">Data Descriptions</p>
      <hr class="my-4">
                        <p>ID : The id of the order</p>
                        <p>Customer : Full name of the customer</p>
                        <p>Email : Customer's Email</p>
                        <p>State/City/Address/Zip : The shipping address information</p>
                        <p>Color : Color of the sweatshirt</p>
                        <p>Size : Size of the sweatshirt</p>
                        <p>University : The university letters being embroidered on</p>
                        <p>Status : Status of the order(Placed, Started, Created, Shipped, Paid, or Complete)</p>
                        <p>Artist : Name of the artist responsible for the order</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
}
</style>
