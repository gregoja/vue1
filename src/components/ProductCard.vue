<template>
  <div class="card col-sm-12 col-md-6 col-xl-4 product-card" >
        <span v-show="product.tagName" :style="{ 'background-color': product.tagColor}"  class="badge badge-pill badge-danger"
          >{{product.tagName}}</span>
        <img :src="require(`@/assets/product/${product.pictureUrl}`)" alt="productPicture" />
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.price}} Kč</p>
          <a :href="`/product/`+product.id" class="btn btn-primary">
            Zobrazit
          </a>
        </div>
      </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>
.btn {
  width: 100%;
}
.product-card {
  width: 23rem;
  padding: 1%;
}
.product-card img{
    width:300px;
    height:300px;
}
.card-text {
  text-align: center;
}
.badge-danger {
  width: 4rem;
  float: right;
  position: absolute;
  z-index: 1;
}
</style>