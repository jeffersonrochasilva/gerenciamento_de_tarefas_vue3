<template>
  <div class="categore">
    <span class="categore__title">{{ title }}</span>
    <div class="categore__container">
      <div
        class="categore__container__content"
        v-for="item in items"
        :key="item.id"
      >
        <p class="categore__container__content__text">{{ item.text }}</p>
        <div class="categore__container__content__footer">
          <div>
            <v-icon :color="checkNumber(item.id) ? 'green' : 'orange'"
              >mdi-check-all</v-icon
            >
          </div>
          <div class="categore__container__content__footer__info">
            <span>{{ item.name }}</span>
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, defineProps } from "vue";

const items: Ref<any> = ref([
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Juliana",
    img: "https://www.fasdapsicanalise.com.br/content/uploads/2020/08/A-CI%C3%8ANCIA-REVELA-O-QUE-A-FOTO-DO-SEU-PERFIL-DIZ-SOBRE-A-SUA-PERSONALIDADE.jpg",
    id: 0,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Matheus",
    img: "https://ef564920920608e03abb-7d34ef097b6ab6c586dfc84157128505.ssl.cf1.rackcdn.com/PostImagem/36734/foto-de-perfil-profissional_o1eh30s23krp31qn41l3havc2fti_capa_3.jpg",
    id: 1,
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    name: "Joana",
    img: "https://s2.glbimg.com/Hag3JEWvLvMo2dc32cQddw8aMWM=/0x0:850x572/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/d/v/kFDwF0T3q2wkwvGH0DjA/whatsapp-image-2022-10-03-at-15.34.37.jpeg",
    id: 2,
  },
]);

defineProps<{
  title: string;
}>();

function checkNumber(item: any) {
  if (item % 2 === 0) {
    console.log("O número é par");
    return false;
  }
  return true;
}
</script>

<style lang="scss" scoped>
.categore {
  width: 22%;
  background: #e9e6e6;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  &__title {
    font-size: 14px;
    font-family: sans-serif;
    font-weight: bold;
  }
  &__container {
    background: #e9e6e6;
    border-radius: 4px;
    margin-top: 10px;
    &__content {
      border-radius: 4px;
      background: #fff;
      padding: 20px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      &__text {
        color: #363b96;
      }
      &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        &__info {
          width: 150px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
          }
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>
