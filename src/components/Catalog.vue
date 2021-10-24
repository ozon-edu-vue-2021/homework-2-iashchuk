<template>
  <div class="catalog">
    <span
      class="catalog__selected"
      :class="{ catalog__selected_empty: !selected }"
      >{{ selected || "Selected file will be displayed here" }}</span
    >
    <ul class="catalog__tree">
      <catalog-child
        :item="catalogTree"
        :selected="selected"
        @onSelectItem="handleSelectItem"
      ></catalog-child>
    </ul>
  </div>
</template>

<script>
import CatalogChild from "./CatalogChild";
import catalogTree from "../../public/static/node_modules";

export default {
  name: "Catalog",
  components: {
    CatalogChild,
  },
  data() {
    CatalogChild;
    return {
      catalogTree,
      selected: "",
    };
  },

  methods: {
    handleSelectItem(pathname) {
      this.selected = pathname === this.selected ? "" : pathname;
    },
  },
};
</script>

<style>
.catalog {
  padding: 20px;
}

.catalog__selected {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #35495e;
  background-color: #f7f7f7;
  border: 1px dashed #41b883;
  border-radius: 5px;
}

.catalog__selected_empty {
  color: #aaa;
  font-weight: normal;
}

.catalog__tree {
  line-height: 1.5em;
}
</style>
