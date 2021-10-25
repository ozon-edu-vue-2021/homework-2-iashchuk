<template>
  <li
    class="child"
    :class="{
      child_directory: isDirectory,
      child_link: isLink,
      child_open: isOpenDirectory,
    }"
    @click.stop="handleAction"
    @keydown.enter.stop="handleAction"
    tabindex="0"
  >
    <div
      class="child__title"
      :class="{
        child__title_directory: isDirectory,
        child__title_selected: isSelectedFile,
      }"
    >
      <span>{{ item.name }}</span>
      <span v-if="isLink">{{ item.target }}</span>
      <div class="child__tag" v-if="isDirectory">
        {{ isOpenDirectory ? "OPENED" : "CLOSED" }}
      </div>
    </div>
    <ul class="child__tree" v-if="isShowChildTree">
      <catalog-child
        v-for="(child, index) in item.contents.slice(0, count)"
        :key="index"
        :directory="pathname"
        :item="child"
        :selected="selected"
        @onSelectItem="$emit('onSelectItem', $event)"
      ></catalog-child>
      <div class="child__observer" v-intersection="loadMoreItems"></div>
    </ul>
    <div class="child child_empty" v-if="isOpenDirectory && isEmptyDirectory">
      Empty directory
    </div>
  </li>
</template>

<script>
const COUNT_STEP = 50;

export default {
  name: "CatalogChild",
  props: {
    item: Object,
    selected: String,
    directory: String,
  },
  data: function () {
    return {
      isOpenDirectory: false,
      isLoadingItems: false,
      count: COUNT_STEP,
    };
  },
  computed: {
    pathname() {
      return `${this.directory || ""}/${this.item.name}`;
    },
    isDirectory() {
      return this.item.type === "directory";
    },
    isLink() {
      return this.item.type === "link";
    },
    isSelectedFile() {
      return this.pathname === this.selected;
    },
    isEmptyDirectory() {
      return this.item.contents.length === 0;
    },
    isShowChildTree() {
      return this.isDirectory && !this.isEmptyDirectory && this.isOpenDirectory;
    },
  },
  methods: {
    handleAction() {
      if (!this.isDirectory) {
        this.$emit("onSelectItem", this.pathname);
        return;
      }

      if (this.isOpenDirectory) {
        this.count = COUNT_STEP;
      }

      this.isOpenDirectory = !this.isOpenDirectory;
    },
    loadMoreItems() {
      if (!this.isOpenDirectory || this.isLoading) {
        return;
      }
      if (this.count >= this.item.contents.length) {
        this.count = this.item.contents.length;
        return;
      }
      this.isLoading = true;
      this.count += COUNT_STEP;
      setTimeout(() => (this.isLoading = false), 0);
    },
  },
};
</script>

<style>
.child {
  width: 100%;
  margin-top: 5px;
  margin-bottom: 3px;
  padding: 7px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.child_directory {
  padding-left: 20px;
  background-color: rgb(243, 243, 152);
}

.child_open {
  background-color: rgb(248, 248, 231);
}

.child_link {
  background-color: rgb(197, 239, 255);
}

.child_empty {
  color: #ccc;
}

.child__tag {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  margin-left: 10px;
  font-size: 14px;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.child__title {
  display: flex;
  justify-content: space-between;
}

.child__title_directory {
  font-weight: bold;
}

.child__title_selected {
  color: tomato;
  font-weight: bold;
}

.child__observer {
  height: 5px;
}
</style>
