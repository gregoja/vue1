<template>
  <div>
    <section>
      <TheFiltration
        :filters="filters"
        :sort="sort"
        @filtersChanged="updateFilters"
        @sortChanged="updateSort"
      />
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
      :page="page"
      :totalRecords="totalRecords"
      :perPage="productsPerPage"
      @pageChanged="updateContentPageChanged"
    />
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import ThePagination from "../components/ThePagination.vue";
import TheFiltration from "../components/TheFiltration.vue";

export default {
  components: {
    TheFiltration,
    ProductCard,
    ThePagination,
  },
  data() {
    return {
      products: [],
      totalRecords: 0,
      productsPerPage: 8,
      page: 1,
      filters: {
        tag: {
          name: "Tag",
          type: "checkbox",
          apiName: "tagName",
          label: ["Sleva", "Novinka"],
          apiNameContent: ["Sleva", "Novinka"],
          selected: [],
        },
        categories: {
          name: "Kategorie",
          type: "checkbox",
          apiName: "category",
          label: ["Dort", "Donut", "Muffin"],
          apiNameContent: ["Dort", "Donut", "Muffin"],
          selected: [],
        },
      },
      sort: {
        label: ["Data přidání", "Nejnižší ceny", "Nejvyšší ceny"],
        apiNameContent: ["added", "price", "price"],
        order: ["desc", "asc", "desc"],
        selected: "added",
        selectedOrder: "desc"
      },
    };
  },
  methods: {
    async loadProducts() {
      try {
        const searchParams = new URLSearchParams({
          _limit: this.productsPerPage,
          _page: this.page,
          _sort: this.sort.selected,
          _order: this.sort.selectedOrder,
        });

        Object.entries(this.filters).forEach(([, value]) => {
          value.selected.forEach((element) => {
            searchParams.append(value.apiName, element);
          });
        });

        const response = await fetch(
          "http://localhost:3000/products?" + searchParams
        );
        const data = await response.json();
        this.products = data;

        this.totalRecords = response.headers.get("X-Total-Count");
      } catch (e) {
        console.error(e);
      }
    },
    updateContentPageChanged(computedPage) {
      this.page = computedPage;
      this.loadProducts();
    },
    updateFilters(target) {
      const affectedFilter = this.filters[target.name];
      if (affectedFilter.type == "radio") {
        affectedFilter.selected = [target.value];
      } else {
        if (!affectedFilter.selected.includes(target.value)) {
          affectedFilter.selected.push(target.value);
        } else {
          affectedFilter.selected = affectedFilter.selected.filter((val) => {
            return val != target.value;
          });
        }
      }

      this.page = 1;
      this.loadProducts();
    },
    updateSort(target) {
      this.sort.selected = target.value;
      this.sort.selectedOrder = target.getAttribute('data-order');

      this.page = 1;
      this.loadProducts();
    },
  },
  mounted() {
    this.loadProducts();
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
</style>