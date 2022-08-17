<template>
  <div class="filtration">
    <div class="filtration-columns">
      <div
        class="filtration-column"
        v-for="[filtersKey, filtersValue] in Object.entries(filters)"
        :key="filtersKey"
      >
        <h3>{{ filtersValue.name }}</h3>
        <div >
          <div
            class="filtration-imp-label-wrap"
            v-for="(label, index) in filtersValue.label"
            :key="label"
          >
            <input
              :checked="filtersValue.selected.includes(label)"
              :name="filtersKey"
              :id="filtersKey + '_' + label"
              :type="filtersValue.type"
              :value="filtersValue.apiNameContent[index]"
              @change="$emit('filtersChanged', $event.target)"
            />
            <label :for="filtersKey + '_' + label">{{ label }}</label>
          </div>
        </div>
      </div>

      <div class="filtration-column">
        <h3>Seřadit od</h3>
        <div>
          <div
            class="filtration-imp-label-wrap"
            v-for="(label, index) in sort.label"
            :key="label"
          >
            <input
              :checked="
                sort.selected == sort.apiNameContent[index] &&
                sort.selectedOrder == sort.order[index]
              "
              name="sort"
              :id="sort.apiNameContent[index] + '_' + sort.order[index]"
              type="radio"
              :value="sort.apiNameContent[index]"
              :data-order="sort.order[index]"
              @change="$emit('sortChanged', $event.target)"
            />
            <label
              :for="sort.apiNameContent[index] + '_' + sort.order[index]"
              >{{ label }}</label
            >
          </div>
        </div>
      </div>

      <div class="cleaner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFiltration",
  props: ["filters", "sort"],
};
</script>

<style>
.filtration {
  background-color: #e0e0e0;
  display: block;
  padding-bottom: 35px;
  padding-right: 35px;
  padding-left: 20px;
  margin-bottom: 35px;
  float: left;
  margin-right: 15px;
  padding-top: 20px;
}
.filtration-imp-label-wrap {
  margin-left: 0.5rem;
  padding-right: 5rem;
    width: 115%;
}
.filtration-imp-label-wrap label {
  margin-bottom: 0;
}

.filtration-imp-label-wrap input {
  margin-bottom: 0;
  margin-right:0.5rem;
}

.filtration-column {
  margin-left: 15%;
}
@media only screen and (max-width: 990px) {
  .filtration {
    float: none;
    margin-right: 0;
  }

  .filtration-column {
    margin: 0;
    margin-right: 2rem;
    float: left;
  }

  .filtration-columns {
    display: flex;
    justify-content: space-around;
  }
  .filtration-imp-label-wrap {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }
}
</style>