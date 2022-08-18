<template>
  <div v-if="product" class="container product-page-container">
    <h2>{{ product.name }}</h2>
    <div class="row">
      <div class="col-xl-4">
        <img
          class="product-image"
          :src="require(`@/assets/product/${product.pictureUrl}`)"
          alt="productPicture"
        />
      </div>
      <div class="col-xl-7">
        <p class="product-description">{{ product.description }}</p>
        <div class="product-center-container">
          <form id="formAddToCart">
            <div class="product-price">cena: {{ product.price }} Kč</div>
            <div class="product-ammount">
              Množství:
              <input
                id="ammount"
                class="form-control"
                type="number"
                value="1"
                min="1"
                placeholder=""
              />
            </div>
            <div class="cleaner"></div>
            <button type="button" class="btn btn-primary" id="buy-button">
              KOUPIT
            </button>
          </form>
        </div>
      </div>
    </div>

    <!--<h2>RECENZE</h2>
    <div class="reviewsDivWarning">
      <h5 style="color: red; margin: 1em 0 1em 0">
        Pro čtení a přidávání recenzí se musíš přihlásit
      </h5>
    </div>
    <div
      style="min-height: 100px"
      class="reviewsDiv recenze d-none"
      id="reviews"
    >
      <form id="formReview">
        <textarea class="reviewTextarea" name="text"></textarea>
        <div class="flex justify-content-between reviewControl">
          <div>
            <select name="stars">
              <option selected value="5">Bez Chyby</option>
              <option value="4">Výborné</option>
              <option value="3">Průměrné</option>
              <option value="2">Nic moc</option>
              <option value="1">Nechutné</option>
            </select>
            <img class="hvezdy" src="img/hvezdy_5.png" alt="hvezdy" />
          </div>
          <div>
            <input type="submit" name="submitReview" value="Odešli Recenzi" />
          </div>
        </div>
      </form>
      <div id="reviewsDiv">
        <h5 style="color: red; margin: 1em 0 1em 0">
          Žádné recenze k tomuto projektu zatím nemáme, takže směle do toho!
        </h5>
        TO BE FILLED BY THE BROWSER -->
    <!--</div>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
  },

  methods: {
    async initData() {
      const response = await fetch(
        `http://localhost:3000/products?id=${this.$route.params.id}`
      );
      const productArray = await response.json();
      this.product = productArray[0];
    },
  },

  async created() {
    this.initData();
    // aby byl komponent zachovan
    // namisto $watch muze byt nic zde a v router-link muže byt :key="$route.path"; Ma to ale horsi vykon
    this.$watch(() => this.$route.params, this.initData);
  },
};
</script>

<style>
.product-image {
  margin-bottom: 20px;
  display: table;
  margin: auto;
  width: 300px;
  height: auto;
}

.btn {
  width: 258px;
  border-radius: 0;
  background-color: #e4949f;
  border: none;
  padding: 0.4rem 0.75rem;
  font-size: 18px;
}
.btn:hover {
  background-color: #eda4ae;
  font-weight: bold;
}
.btn-primary:focus,
.btn-primary.focus {
  box-shadow: none;
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #eda4ae;
  border: none;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #eda4ae;
  border: none;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: none;
}

.product-page-container h2 {
  text-align: center;
  margin-top: 20px;
}

.product-description {
  margin-top: 20px;
}

.product-price {
  font-weight: 200;
  font-size: 25px;
}

.product-ammount {
  float: left;
  margin-top: 10px;
  margin-bottom: 15px;
}

.product-center-container {
  display: table;
  margin: auto;
}

.form-control {
  width: 100px;
}

#buy-button {
  width: 167px;
}

/*.recenze h2 {
  margin-top: 25px;
}
.hvezdy {
  height: 20px;
  width: auto;
}*/

@media only screen and (min-width: 576px) {
  .btn {
    width: 510px;
  }
}
@media only screen and (min-width: 768px) {
  .btn {
    width: 210px;
  }

  .product-description {
    margin-top: 20px;
  }

  /*.recenze h3 {
    float: left;
  }
  .hvezdy {
    margin-left: 15px;
  }*/
}

@media only screen and (min-width: 992px) {
  .btn {
    width: 18rem;
  }

  .product-description {
    margin: auto;
    margin-top: 20px;
  }
}
@media only screen and (min-width: 1200px) {
  h1 {
    font-size: 4em;
  }
  
  .nadpis {
    width: 600px;
    /*margin-top: 125px;*/
  }

  .btn {
    width: 350px;
  }

  /*.recenze h2 {
    margin-top: 40px;
  }
  .recenze {
    margin-bottom: 20px;
  }*/
}
</style>