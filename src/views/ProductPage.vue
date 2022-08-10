<template>
  <h1 style="color: black">Product {{ $route.params.id }}</h1>
  <div v-if="product">
    <p>{{ product.wtf }}</p>
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
    async ïnitData() {
      const response = await fetch(`dsad/${this.$route.params.id}`);
      this.product = await response.json();
    },
  },

  async created() {
    this.initData();
    // namisto $watch muze byt nic zde a v router-link muže byt :key="$route.path"; Ma to ale horsi vykon
    this.$watch(() => this.$route.params, this.initData);
  },
};
</script>

<style>
</style>