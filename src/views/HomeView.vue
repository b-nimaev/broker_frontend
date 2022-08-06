<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/sticker.webp">
    <HelloWorld msg="Добро пожаловать в панель управления ботом"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>
