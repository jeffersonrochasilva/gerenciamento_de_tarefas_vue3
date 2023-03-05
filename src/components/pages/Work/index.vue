<template>
  <div class="home__boxTitle__content">
    <CategoreCards />
    <CategoreCards />
    <CategoreCards />
    <CategoreCards />
    <CategoreCards />
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
