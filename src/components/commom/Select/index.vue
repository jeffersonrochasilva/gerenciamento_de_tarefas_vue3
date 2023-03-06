<template>
  <div class="select">
    <span
      @click="selectItem(item)"
      v-for="item in items"
      :key="item.id"
      :class="
        step === item.id ? 'select__textSelected' : 'select__textNoSelected'
      "
      >{{ item.name }}</span
    >
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { Ref, ref } from "vue";
const items: Ref<any> = ref([
  { name: "Seu Trabalho", id: 0 },
  { name: "Projetos", id: 1 },
  { name: "Filtros", id: 2 },
  { name: "Painéis", id: 3 },
  { name: "Pessoas Planos", id: 4 },
  { name: "Aplicativos", id: 5 },
]);
const step: Ref<number> = ref(0);
const selectItem = (item: any) => {
  step.value = item.id;
  console.log(item.id);
  if (step.value === 0) {
    router.push({ name: "Work" });
  } else if (step.value === 1) {
    router.push({ name: "Projects" });
  } else {
    router.push({ name: "Error" });
  }
};
</script>

<style lang="scss" scoped>
.select {
  width: 50%;
  display: flex;
  justify-content: space-between;
  &__textNoSelected {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: bolder;
    margin-bottom: 15px;
    cursor: pointer;
  }
  &__textSelected {
    font-size: 16px;
    font-family: sans-serif;
    font-weight: bold;
    margin-bottom: 15px;
    cursor: pointer;
    color: #5b5bf5;
  }
}
</style>
