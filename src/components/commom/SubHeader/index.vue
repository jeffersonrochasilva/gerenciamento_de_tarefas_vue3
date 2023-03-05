<template>
  <div class="subHeader">
    <div class="subHeader__left">
      <v-col cols="12">
        <v-text-field
          label="text"
          variant="outlined"
          prepend-inner-icon="mdi-email-outline"
        />
      </v-col>
      <div class="subHeader__left__icon">
        <img class="img1" src="@/assets/pessoa-47075235.jpg" alt="nvmnvvhgc" />
        <img
          class="subHeader__left__icon__img2"
          src="@/assets/pessoa46846328.jpg"
          alt="nvmnvdffdfvhgc"
        />
        <img
          class="subHeader__left__icon__img3"
          src="@/assets/pessoa46846371.jpg"
          alt="nvmnvvfdfdfhgc"
        />
        <img
          class="subHeader__left__icon__img4"
          src="@/assets/pessoa58249394.jpg"
          alt="nvmnvvhgc"
        />
        <img
          class="subHeader__left__icon__img5"
          src="@/assets/pessoa58249476.jpg"
          alt="fdffdfd"
        />
      </div>
      <v-col cols="12">
        <v-select label="Categoria" variant="plain" />
      </v-col>
    </div>
    <div class="subHeader__rigth">
      <span>Agrupar Por</span>
      <span>Nenhum</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
const items: Ref<any> = ref([
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
]);
</script>

<style lang="scss" scoped>
.subHeader {
  display: flex;
  justify-content: space-between;
  &__left {
    display: flex;
    &__icon {
      width: 200px;
      height: 60px;
      display: flex;
      margin-top: 20px;
      position: relative;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      &__img1 {
        z-index: 998;
        position: absolute;
        left: 0;
      }
      &__img2 {
        z-index: 999;
        position: absolute;
        left: 39px;
      }
      &__img3 {
        z-index: 999;
        position: absolute;
        left: 77px;
      }
      &__img4 {
        z-index: 999;
        position: absolute;
        left: 114px;
      }
      &__img5 {
        z-index: 999;
        position: absolute;
        left: 151px;
      }
    }
  }
  &__rigth {
    width: 150px;
    margin: 20px 20px 0 0;
    display: flex;
    justify-content: space-between;
    span {
      font-family: sans-serif;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
