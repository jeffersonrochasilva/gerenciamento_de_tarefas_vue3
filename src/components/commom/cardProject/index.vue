<template>
  <div v-for="item in items" :key="item.id" class="card">
    <h1>projeto numero 1</h1>
    <div class="card__container">
      <v-icon :color="item.color">mdi-check-all</v-icon>
      <img :src="item.photo" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
const items: Ref<any> = ref([
  {
    name: "Projeto 1",
    photo: "@/assets/pessoa-47075235.jpg",
    color: "red",
    id: 0,
  },
  {
    name: "Projeto 2",
    photo: "@/assets/pessoa-47075235.jpg",
    color: "green",
    id: 0,
  },
  {
    name: "Projeto 3",
    photo: "@/assets/pessoa-47075235.jpg",
    color: "red",
    id: 0,
  },
]);
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  height: 170px;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px 1px #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
</style>
