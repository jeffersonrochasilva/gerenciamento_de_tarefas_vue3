<template>
  <div class="home">
    <Header />
    <div class="home__boxTitle">
      <span class="home__boxTitle__title">Painel de última geração</span>
      <SubHeader />
      <div class="home__boxTitle__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/commom/Header/index.vue";
import SubHeader from "@/components/commom/SubHeader/index.vue";
import CategoreCards from "@/components/CategoresCards/index.vue";
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
    &__content {
      padding-bottom: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}
</style>
