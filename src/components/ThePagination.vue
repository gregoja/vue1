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
        <a class="page-link">Stránka {{ currentPage }}/{{ pages }}</a>
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
  props: ["totalRecords", "perPage", "page"],
  data() {
    return {
      currentPage: this.page,
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
      const pageBefore = this.currentPage;
      switch (offset) {
        case -Infinity:
          this.currentPage = 1;
          break;
        case -1:
          this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
          break;
        case 1:
          this.currentPage = this.currentPage < this.pages ? this.currentPage + 1 : this.currentPage;
          break;
        case Infinity:
          this.currentPage = this.pages;
      }
      if(pageBefore != this.currentPage) this.$emit("pageChanged", this.currentPage);
    },
  },
  watch: {
    page:{
      handler: function (val, ) { 
        this.currentPage = val;
      }
    }
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