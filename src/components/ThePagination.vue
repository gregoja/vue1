<template>
  <nav class="pagination">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" @click="changePage(-Infinity)">&lt;&lt;</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="changePage(-1)">&lt;</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link">Stránka {{ page }}/{{ pages }}</a>
      </li>
      <li class="page-item">
        <a @click="changePage(1)" class="page-link">&gt;</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="changePage(Infinity)">&gt;&gt;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["totalRecords", "perPage"],
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage;

      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
    changePage(offset) {
      switch (offset) {
        case -Infinity:
          this.page = 1;
          break;
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page;
          break;
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page;
          break;
        case Infinity:
          this.page = this.pages;
      }

      this.$emit("pageChanged", this.page);
    },
  },
};
</script>

<style>
.pagination {
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.page-item:not(.disabled) {
  cursor: pointer;
}
</style>