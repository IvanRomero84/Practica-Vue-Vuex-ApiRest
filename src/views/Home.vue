<template>
  <div class="home">
    <Hero msg="Practica Vue-Vuex con Api Rest" />
    <img alt="Vue logo" src="../assets/logo.png" width="20%" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "home",
  components: {
    Hero
  }
};
</script>
