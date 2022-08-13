<template>
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
</template>

<script>
export default {
  name: "TheFiltration",
}
</script>

<style>

</style>