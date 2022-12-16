<template>
  <div class="color-wrap" @click="showPicker = false">
    颜色拾取器:
    <div class="holder" @click.stop="handleClick">
      <div
        class="color-holder"
        :style="{
          background: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        }"
      ></div>
      <VueColor @click.stop v-model:color="color" v-if="showPicker" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import VueColor from "@/components/VueColorComponent.vue";
import { debounce } from "@/utils/index";
import { ref, watch, toRaw } from "vue";
interface ColorObj {
  r: number;
  g: number;
  b: number;
  a: number;
}
const showPicker = ref(false);
const color = ref<ColorObj>({
  r: 0,
  g: 0,
  b: 0,
  a: 0.66,
});
const handleClick = () => {
  showPicker.value = !showPicker.value;
};
const printValue = debounce((val: any) => console.log(val[0]), 100);
watch(
  color,
  (val) => {
    printValue(toRaw(val));
  },
  {
    deep: true,
  }
);
</script>
<style lang="scss" scoped>
.color-wrap {
  padding: 10px;
}
.holder {
  user-select: none;
  position: relative;
  width: 26px;
  height: 26px;
  border-radius: 3px;
  background-image: url("@/assets/img/alpha-bg.png");
  background-size: 10px 10px;
  .color-holder {
    height: 100%;
  }
  .color-select {
    width: 200px;
    position: absolute;
    left: 100%;
  }
}
</style>
