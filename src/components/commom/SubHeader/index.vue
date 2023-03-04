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
      <div v-for="(item, i) in items" :key="i" class="subHeader__left__icon">
        <v-icon>mdi-account</v-icon>
      </div>
      <v-col cols="12">
        <v-select label="Categoria" variant="plain" />
      </v-col>
    </div>
    <div class="subHeader__rigth"></div>
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
  &__left {
    display: flex;

    &__icon {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
    }
  }
  &__rigth {
  }
}
</style>
