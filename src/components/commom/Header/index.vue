<template>
  <div class="header">
    <v-icon class="mb-5" size="34">mdi-apps</v-icon>
    <div class="header__boxTitle">
      <span color="#0000ff" class="material-symbols-outlined">
        double_arrow
      </span>
      <span class="header__boxTitle__title">Jira</span>
    </div>
    <Select />
    <v-btn @click="creatElement" class="header__btn">Criar</v-btn>
    <div cols="3" rows="1" class="header__campText">
      <v-text-field
        variant="outlined"
        label="pesquisar"
        prepend-inner-icon="mdi-email-outline"
      />
    </div>
    <div class="header__icons">
      <v-icon>mdi-bell</v-icon>
      <v-icon>mdi-help</v-icon>
      <v-icon>mdi-account</v-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import Select from "@/components/commom/Select/index.vue";
import { Ref, ref } from "vue";

const items: Ref<any> = ref([
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
  "item1",
]);

const creatElement = () => {
  alert("hello word");
};
</script>

<style lang="scss" scoped>
.material-symbols-outlined {
  color: #0000ff;
  font-size: 30px;
  font-weight: bolder;
  // margin-top: 15px;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
  background: #fff;
  &__boxTitle {
    height: 44px;
    display: flex;
    padding-bottom: 54px;
    &__title {
      font-family: sans-serif;
      font-weight: bolder;
      font-size: 24px;
      margin-bottom: 15px;
    }
  }

  &__camp {
    width: 150px;
    height: 80% !important;
  }
  &__campText {
    width: 300px;
    margin: 0;
    padding: 0;
  }
  &__btn {
    color: #fff;
    background: #2b2f78;
    margin-bottom: 20px;
  }
  &__icons {
    margin-bottom: 20px;
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
