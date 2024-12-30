<template>
  <div class="link-list-item" @click="handleClick(props.linkObj?.link)">
    <img
      class="link-img"
      :src="props.linkObj?.image ? props.linkObj?.image : PlaceholderImg"
      :alt="props.linkObj?.title"
    />
    <a class="link" href="javascript:;" target="_blank">{{
      props.linkObj?.title
    }}</a>
  </div>
</template>
<script lang="ts" setup>
import PlaceholderImg from "@/assets/img/link-logo/placeholder-img.png";
const props = defineProps<{
  linkObj: {
    image?: typeof PlaceholderImg;
    title: string;
    link: string;
  };
}>();
const handleClick = (link: string) => {
  if (link) {
    window.open(link, "_blank");
  }
};
</script>
<style lang="scss" scoped>
.link-list-item {
  display: flex;
  align-items: center;
  transition: all 0.3s linear;
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;
  width: 30%;
  cursor: pointer;
  .link-img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
  .link {
    color: #333;
  }
  &:hover {
    background: $theme-color;
    .link {
      color: white;
    }
  }
}
</style>
