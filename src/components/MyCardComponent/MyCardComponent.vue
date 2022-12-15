<template>
  <div class="wrap card-item">
    <div class="title">{{ props.title }}</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: String,
});
</script>
<style lang="scss" scoped>
.wrap {
  border: 1px solid #3f51b5;
  box-shadow: 3px 3px 0px rgb(0 0 0 / 14%);
  .title {
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  &.card-item {
    & + .card-item {
      margin-top: 10px;
    }
  }
}
</style>
