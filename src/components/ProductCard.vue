<template>
  <div class="card col-sm-12 col-md-6 col-xl-4 productCard" >
        <span style="visibility: visible; background-color:red" class="badge badge-pill badge-danger"
          >NULL</span
        >
        <img src="../assets/product/barevnyspyani.jpg" alt="productPicture" />
        <div class="card-body">
          <h5 class="card-title">Chléb s domácí</h5>
          <p class="card-text">25 Kč</p>
          <button type="button" class="btn btn-primary">
            Zobrazit
          </button>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.btn {
  width: 100%;
}
.productCard {
  width: 23rem;
  padding: 1%;
}
.card-text {
  text-align: center;
}
.badge-danger {
  width: 3.5rem;
  float: right;
  position: absolute;
  z-index: 1;
}
</style>