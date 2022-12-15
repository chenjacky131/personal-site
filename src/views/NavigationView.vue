<template>
  <div class="wrap">
    <MyCardComponent title="常用">
      <LinkListComponent
        v-for="(item, index) in commonLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="前端基础">
      <LinkListComponent
        v-for="(item, index) in htmlCssJavascriptLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="项目相关">
      <LinkListComponent
        v-for="(item, index) in projectLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="框架、库、工具文档">
      <LinkListComponent
        v-for="(item, index) in frameToolLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="在线工具">
      <LinkListComponent
        v-for="(item, index) in onlineToolLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="社区、资讯">
      <LinkListComponent
        v-for="(item, index) in communityLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
    <MyCardComponent title="在线服务">
      <LinkListComponent
        v-for="(item, index) in onlineServiceLinks"
        :key="index"
        :link-obj="item"
      />
    </MyCardComponent>
  </div>
</template>
<script lang="ts" setup>
import MyCardComponent from "@/components/MyCardComponent/MyCardComponent.vue";
import LinkListComponent from "@/components/LinkListComponent/LinkListComponent.vue";
import { commonLinks } from "@/constants/links/commonLinks.js";
import { projectLinks } from "@/constants/links/projectLinks.js";
import { frameToolLinks } from "@/constants/links/frameToolLinks.js";
import { onlineToolLinks } from "@/constants/links/onlineToolLinks.js";
import { htmlCssJavascriptLinks } from "@/constants/links/htmlCssJavascriptLinks.js";
import { communityLinks } from "@/constants/links/communityLinks.js";
import { onlineServiceLinks } from "@/constants/links/onlineServiceLinks.js";
</script>
<style lang="scss" scoped>
.wrap {
  padding: 10px;
}
</style>
