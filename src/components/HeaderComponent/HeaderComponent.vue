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
      <a-sub-menu key="tools">
        <template #icon>
          <appstore-outlined />
        </template>
        <template #title>小工具</template>
        <a-menu-item key="tools:canvas-sign">
          <router-link
            :to="{
              path: '/canvas-sign',
            }"
            >画布签名</router-link
          >
        </a-menu-item>
        <a-menu-item key="tools:color-picker">
          <router-link
            :to="{
              path: '/color-picker',
            }"
            >颜色拾取器</router-link
          >
        </a-menu-item>
        <a-menu-item key="tools:guess-game">
          <router-link
            :to="{
              path: '/guess-game',
            }"
            >猜字游戏</router-link
          >
        </a-menu-item>
        <a-menu-item key="tools:intelligentn-map">
          <a href="https://chenjacky131.github.io/threeDMap/dist/index.html#/" target="_blank">智能地图</a>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="home">
        <template #icon>
          <home-outlined />
        </template>
        <a
          href="https://chenjacky131.github.io"
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
          href="https://chenjacky131.github.io/blogs/"
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
  AppstoreOutlined,
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
    case "/canvas-sign":
      current.value = ["tools:canvas-sign"];
      break;
    case "/color-picker":
      current.value = ["tools:color-picker"];
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
      & > .ant-menu-item,
      & > .ant-menu-submenu {
        &.ant-menu-item-selected,
        &:hover {
          color: white;
          a {
            color: inherit;
          }
        }
        &.ant-menu-submenu-selected,
        &.ant-menu-submenu-open,
        &.ant-menu-submenu-active,
        &:hover {
          color: white;
          a,
          .ant-menu-submenu-title {
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
