<template>
  <div>
    <h1>liste de tout les donjons de {{this.path}}</h1>

    <ul v-for="(donjon,i) in affichageDonjon" :key="i">
      <li v-text="donjon"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    path: "",
    affichageDonjon: "",
    donjonWotlk: ["donjon1", "donjon2", "donjon3"],
    donjonBc: ["donjon4", "donjon5", "donjon6"],
    donjonClassic: ["donjon7", "donjon8", "donjon9"]
  }),
  mounted() {
    if (this.$route.path == "/bc/donjon") {
      this.path = "Burning Crusade";
      this.affichageDonjon = this.donjonBc;
    } else if (this.$route.path == "/wotlk/donjon") {
      this.path = "Wrath of the lich kink";
      this.affichageDonjon = this.donjonWotlk;
    } else if (this.$route.path == "/classic/donjon") {
      this.path = "Classic";
      this.affichageDonjon = this.donjonClassic;
    }
  }
};
</script>