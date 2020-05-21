<template>
  <div class="mt-5">
    <v-container>
      <v-row class="d-flex justify-center align-center mt-5">
        <v-col v-for="(dungeon,i) in contain" :key="i" cols="12" sm="8" md="4" class="mx-auto">
          <router-link :to="dungeon.path" class="text-deco-none">
            <v-card  max-width="400" >
              <v-img height="225"  :src="dungeon.imgPath"></v-img>
              <v-card-title v-text="dungeon.title" class="d-flex justify-center align-center"></v-card-title>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import DonjonClassic from "../assets/images/donjonClassic.jpg";
import RaidClassic from "../assets/images/raidClassic.jpg";
import DonjonWotlk from "../assets/images/donjonWotlk.jpg";
import RaidWotlk from "../assets/images/raidWotlk.jpg";
import DonjonBc from "../assets/images/donjonBc.jpeg";
import RaidBc from "../assets/images/raidBc.jpg";

export default {
  mounted() {
    this.contain[0].imgPath = DonjonClassic;
    this.contain[1].imgPath = RaidClassic;
    this.contain[2].imgPath = DonjonBc;
    this.contain[3].imgPath = RaidBc;
    this.contain[4].imgPath = DonjonWotlk;
    this.contain[5].imgPath = RaidWotlk;
  },
  data: () => ({
    contain: [
      {
        title: "Donjons Classic",
        path: "/classic/donjon",
        imgPath: ""
      },
      {
        title: "Raids Classic",
        path: "/classic/raid",
        imgPath: ""
      },
      {
        title: "Donjons Burning Crusade",
        path: "/bc/donjon",
        imgPath: ""
      },
      {
        title: "Raids Burning Crusade",
        path: "/bc/raid",
        imgPath: ""
      },
      {
        title: "Donjons Wrath of the lich king",
        path: "/wotlk/donjon",
        imgPath: ""
      },
      {
        title: "Raid Wraths of the lich king",
        path: "/wotlk/raid",
        imgPath: ""
      }
    ]
  })
};
</script>

<style scoped>
.text-deco-none{
    text-decoration: none !important;
}
</style>