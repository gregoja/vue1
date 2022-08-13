<template>
  <div>
    {{ filters }}
    <section class="filtrovani">
      <div class="filtrationColumns">
        <form>
          <div class="sloupec">
            <h3>Tag</h3>
            <div class="filtracePolozky">
              <div class="filtraceGroup">
                <input
                  v-model="filters.tag.content"
                  name="IS_SWEET"
                  id="sladke"
                  type="checkbox"
                  value="1"
                />
                <label for="sladke">Sleva</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.tag.content"
                  name="IS_SWEET"
                  id="slane"
                  type="checkbox"
                  value="0"
                />
                <label for="slane">Novinka</label>
              </div>
            </div>
          </div>

          <div class="sloupec">
            <h3>Kategorie</h3>
            <div class="filtracePolozky">
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category0"
                  type="checkbox"
                  value="4"
                />
                <label for="category0">Chlebíčky</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category1"
                  type="checkbox"
                  value="5"
                />
                <label for="category1">Plněné pečivo</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category2"
                  type="checkbox"
                  value="6"
                />
                <label for="category2">Saláty</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category3"
                  type="checkbox"
                  value="7"
                />
                <label for="category3">Dorty</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category4"
                  type="checkbox"
                  value="8"
                />
                <label for="category4">Dezerty v kelímku</label>
              </div>
              <div class="filtraceGroup">
                <input
                  v-model="filters.categories.content"
                  name="category"
                  id="category5"
                  type="checkbox"
                  value="9"
                />
                <label for="category5">Jiné</label>
              </div>
            </div>
          </div>

          <div class="sloupec">
            <h3>Seřadit od</h3>
            <div class="filtracePolozky">
              <div class="filtraceGroup">
                <input
                  checked
                  name="order"
                  id="ADDED_DESC"
                  v-model="filters.sort"
                  type="radio"
                  value="ADDED DESC"
                />
                <label for="ADDED_DESC">Data přidání</label>
              </div>
              <div class="filtraceGroup">
                <input
                  name="order"
                  id="Cena_ASC"
                  v-model="filters.sort"
                  type="radio"
                  value="PRICE ASC"
                />
                <label for="Cena_ASC">Nejnižší ceny</label>
              </div>
              <div class="filtraceGroup">
                <input
                  name="order"
                  id="Cena_DESC"
                  v-model="filters.sort"
                  type="radio"
                  value="PRICE DESC"
                />
                <label for="Cena_DESC">Nejvyšší ceny</label>
              </div>
            </div>
          </div>
          <div class="cleaner"></div>
        </form>
      </div>
    </section>

    <section class="row productSection">
      <h2>Nabídka vybraných produktů</h2>
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </section>

    <ThePagination
      :totalRecords="totalRecords"
      :perPage="productsPerPage"
      @pageChanged="updateContent"
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import ThePagination from "../components/ThePagination.vue";

export default {
  components: {
    ProductCard,
    ThePagination,
  },
  data() {
    return {
      products: [],
      totalRecords: 0,
      productsPerPage: 8,
      filters: {
        tag: {
          type: "checkbox",
          apiName: "tagName",
          content: [],
        },
        categories: {
          type: "checkbox",
          apiName: "categories",
          content: [],
        },
        //sort: 0,
      },
    };
  },
  methods: {
    async loadProducts(page) {
      try {
        const searchParams = new URLSearchParams({
          _limit: this.productsPerPage,
          _page: page,
        });

        /*this.filters.tag.content.forEach((element) => {
          searchParams.append("tagName", element);
        });

        this.filters.categories.content.forEach((element) => {
          searchParams.append("category", element);
        });*/

        // foreach(key, value) key=tag, value = { type:...,apiName:..., conten:...}
        Object.entries(this.filters).forEach(([, value]) => {
          value.content.forEach((element) => {
            searchParams.append(value.apiName, element);
          });
        });


        const response = await fetch(
          "http://localhost:3000/products?" +
            new URLSearchParams({
              _limit: this.productsPerPage,
              _page: page,
              _tag: this.filters.tag,
            })
        );
        const data = await response.json();
        this.products = data;

        this.totalRecords = response.headers.get("X-Total-Count");
      } catch (e) {
        console.error(e);
      }
    },
    updateContent(page) {
      this.loadProducts(page);
    },
  },
  mounted() {
    this.loadProducts(1);
  },
};
</script>

<style>
.productSection h2 {
  margin-top: 25px;
  margin-bottom: 25px;
}
.productSection {
  min-height: 500px;
}
.filtrovani {
  background-color: #e0e0e0;
  display: block;
  padding-bottom: 35px;
  margin-bottom: 35px;
  float: left;
  margin-right: 15px;
  padding-top: 20px;
}
.filtraceGroup {
  margin-left: 0.5rem;
  padding-right: 5rem;
}
.filtraceGroup label {
  margin-bottom: 0;
}

.sloupec {
  margin-left: 5%;
}
.filtraceGroup {
  width: 115%;
}
.filtrationColumns input[type="submit"] {
  display: table;
  margin: auto;
  margin-top: 15px;
}
@media only screen and (max-width: 990px) {
  .filtrovani {
    float: none;
    margin-right: 0;
  }
  .sloupec {
    margin: 0;
    margin-right: 2rem;
    float: left;
  }
  .filtrationColumns {
    display: flex;
    justify-content: space-around;
  }
  .filtraceGroup {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }
  .inputContainer {
    margin-top: 25px;
  }
}
</style>