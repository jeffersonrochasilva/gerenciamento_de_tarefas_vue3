<template>
  <div class="home">
    <Header />
    <div class="home__boxTitle">
      <span class="home__boxTitle__title">Painel de última geração</span>
      <SubHeader />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/commom/Header/index.vue";
import SubHeader from "@/components/commom/SubHeader/index.vue";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: #c3c3c3;
  min-height: 100vh;
  &__boxTitle {
    margin-top: 2px;
    padding: 50px 0 0 20px;
    background: #fff;
    &__title {
      font-family: sans-serif;
      font-weight: bold;
      color: #0f0f46;
      font-size: 32px;
    }
  }
}
</style>
