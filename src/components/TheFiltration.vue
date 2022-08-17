<template>
  <div class="filtrovani">
    <div class="filtrationColumns">
      <div
        class="sloupec"
        v-for="[filtersKey, filtersValue] in Object.entries(
          filters
        )"
        :key="filtersKey"
      >
        <h3>{{ filtersValue.name }}</h3>
        <div class="filtracePolozky">
          <div
            class="filtraceGroup"
            v-for="value in filtersValue.label"
            :key="value"
          >
            <input
              :name="filtersKey"
              :id="filtersKey + '.' + value"
              :type="filtersValue.type"
              :value="value"
              @change="$emit('filtersChanged', $event.target)"
            />
            <label :for="filtersKey + '.' + value">{{ value }}</label>
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
  props: ["filters"],
};
</script>

<style>
.filtrovani {
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
.filtraceGroup {
  margin-left: 0.5rem;
  padding-right: 5rem;
}
.filtraceGroup label {
  margin-bottom: 0;
}

.filtraceGroup {
  width: 115%;
}
.filtrationColumns input[type="submit"] {
  display: table;
  margin: auto;
  margin-top: 15px;
}
.sloupec {
  margin-left: 15%;
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
}
</style>