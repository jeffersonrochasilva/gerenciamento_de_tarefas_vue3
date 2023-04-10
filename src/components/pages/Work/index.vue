<template>
  <div class="home__boxTitle__content">
    <CategoreCards :title="'titulo 1'" />
    <CategoreCards :title="'titulo 2'" />
    <CategoreCards :title="'titulo 3'" />
    <CategoreCards :title="'titulo 4'" />
  </div>
</template>
<script lang="ts" setup>
import CategoreCards from "@/components/CategoresCards/index.vue";
</script>
<style lang="scss" scoped>
.content {
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
