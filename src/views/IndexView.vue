<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/HeaderComponent/HeaderComponent.vue";
</script>

<template>
  <div class="wrapper">
    <a-layout>
      <a-layout-header>
        <Header />
      </a-layout-header>
      <a-layout-content>
        <RouterView />
      </a-layout-content>
    </a-layout>
  </div>
</template>
