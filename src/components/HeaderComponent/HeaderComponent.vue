<template>
  <div class="header">
    <img class="logo" :src="logo" />
    <a-menu v-model:selectedKeys="current" mode="horizontal" theme="light">
      <a-menu-item key="index">
        <template #icon>
          <bank-outlined />
        </template>
        <router-link :to="{ path: '/' }">首页</router-link>
      </a-menu-item>
      <a-menu-item key="navigation-site">
        <template #icon>
          <star-outlined />
        </template>
        <router-link
          :to="{
            path: '/navigation',
          }"
          >导航站</router-link
        >
      </a-menu-item>
      <a-menu-item key="home">
        <template #icon>
          <home-outlined />
        </template>
        <a
          href="http://www.jackchen7003.top"
          target="_blank"
          rel="noopener noreferrer"
        >
          主页
        </a>
      </a-menu-item>
      <a-menu-item key="blog">
        <template #icon>
          <send-outlined />
        </template>
        <a
          href="http://blog.jackchen7003.top"
          target="_blank"
          rel="noopener noreferrer"
        >
          博客
        </a>
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import {
  BankOutlined,
  StarOutlined,
  SendOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/img/logo.png";
const route = useRoute();
const current = ref<string[]>(["index"]);
watchEffect(() => {
  switch (route.path) {
    case "/":
      current.value = ["index"];
      break;
    case "/navigation":
      current.value = ["navigation-site"];
      break;
    default:
      current.value = ["index"];
  }
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  :deep(.ant-menu) {
    background: $theme-color;
    &.ant-menu-horizontal {
      border-bottom: none;
      & > .ant-menu-item {
        &.ant-menu-item-selected,
        &:hover {
          color: white;
          a {
            color: inherit;
          }
        }
      }
    }
  }
}
.logo {
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
