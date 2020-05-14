<template>
  <div class="display-content d-flex justify-center align-center">
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="12" sm="8" md="6">
          <router-link :to="this.pathDonjon">
            <v-card>
              <v-card-text>
                <v-img :src="linkImage.donjon" />
              </v-card-text>
              <v-card-title class="d-flex align-center justify-center">Donjons de {{this.path}}</v-card-title>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" sm="8" md="6">
          <router-link :to="this.pathRaid">
            <v-card>
              <v-card-text>
                <v-img :src="linkImage.raid" />
              </v-card-text>
              <v-card-title class="d-flex align-center justify-center">Raids de {{this.path}}</v-card-title>
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
  components: {},
  data: () => ({
    path: "",
    pathDonjon: "",
    pathRaid: "",
    linkImage: {
      donjon: "",
      raid: ""
    }
  }),

  mounted() {
    if (this.$route.path == "/bc") {
      this.path = "Burning Crusade";
      this.pathDonjon = this.$route.path + "/donjon";
      this.pathRaid = this.$route.path + "/raid";
      this.linkImage.donjon = DonjonBc;
      this.linkImage.raid = RaidBc;
    } else if (this.$route.path == "/classic") {
      this.path = "Classic";
      this.pathDonjon = this.$route.path + "/donjon";
      this.pathRaid = this.$route.path + "/raid";
      this.linkImage.donjon = DonjonClassic;
      this.linkImage.raid = RaidClassic;
    } else if (this.$route.path == "/wotlk") {
      this.path = "Wrath of the Lich king";
      this.pathDonjon = this.$route.path + "/donjon";
      this.pathRaid = this.$route.path + "/raid";
      this.linkImage.donjon = DonjonWotlk;
      this.linkImage.raid = RaidWotlk;
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}
.display-content {
  height: 100%;
}
</style>
