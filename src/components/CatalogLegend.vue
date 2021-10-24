<template>
  <div class="legend">
    <div class="legend__block">
      <div class="legend__icon legend__icon_directory">Directory</div>
    </div>
    <div class="legend__block">
      <div class="legend__icon legend__icon_link">Link</div>
    </div>
    <div class="legend__block">
      <div class="legend__icon legend__icon_file">File</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogLegend",
};
</script>

<style>
.legend {
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
  border-radius: 5px;
  border: 1px dashed #ccc;
}

.legend__block {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.legend__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90px;
  padding: 0 5px;
  font-size: 12px;
  line-height: 18px;
  border-radius: 5px;
  border: 1px dotted #ccc;
  font-weight: bold;
}

.legend__icon_directory {
  background-color: rgb(243, 243, 152);
}

.legend__icon_link {
  background-color: rgb(197, 239, 255);
}

.legend__icon_file {
  background-color: #fff;
}
</style>
