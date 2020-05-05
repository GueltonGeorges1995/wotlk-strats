<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    <router-view :key="$route.path"></router-view>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
