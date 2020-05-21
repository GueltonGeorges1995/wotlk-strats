<template>
  <div>
    <v-container>
      <div class="text-center">
        <h2>Donjons de {{this.path}}</h2>
      </div>
      <v-row class="mt-5">
        <v-col  class="mx-auto" v-for="(donjon,i) in affichageDonjon" :key="i" cols="12" sm="6" md="4" >
          <v-card  max-width="400">
            <v-img height="300" :src="donjon.imgPath"></v-img>
            <v-card-title v-text="donjon.title"></v-card-title>
            <v-card-subtitle class="pb-0" v-text="donjon.zone"></v-card-subtitle>
            <v-card-text class="text--primary">
              <div>
                Niveau requi pour rentrer dans l'instance :
                <span
                  class="primary--text"
                  v-text="donjon.lvlMiniEntre"
                ></span>
              </div>

              <div>
                Niveau requi pour joindre la file d'attente :
                <span
                  class="primary--text"
                  v-text="donjon.lvlMiniTag"
                ></span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>Découvrir</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DonjonClassic01 from "../assets/images/donjonClassic/donjonClassic01.jpg";

import DonjonWotlk01 from "../assets/images/donjonWotlk/donjonWotlk01.jpg";
export default {
  data: () => ({
    path: "",
    affichageDonjon: "",
    donjonWotlk: [
      {
        title: "Ahn' Kahet: L'ancien Royaume",
        id: 1,
        imgPath: DonjonWotlk01,
        linkPath: "",
        zone: "Fjord Hurlant",
        lvlMiniTag: 71,
        lvlMiniEntre: 68
      },
      {
        title: "Azjol-Nérub",
        id: 2,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Désolation Des dragons",
        lvlMiniTag: 70,
        lvlMiniEntre: 67
      },
      {
        title: "L'épuration de stratholme",
        id: 3,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Tanaris - Grottes Du Temps",
        lvlMiniTag: 77,
        lvlMiniEntre: 75
      },
      {
        title: "Donjon de Drak'Tharon",
        id: 4,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Les salles de Foudre",
        id: 5,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Les salles de Pierre",
        id: 6,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Les salles des Reflets",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Fosse de saron",
        id: 8,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "La forge des âmes",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Le nexus",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "L'oculus",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "L'épreuve du champion",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Donjon d'Utgarde",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Cime d'utgarde",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      },
      {
        title: "Le fort poupre",
        id: 7,
        imgPath: DonjonClassic01,
        linkPath: "",
        zone: "Zul'Drak",
        lvlMiniTag: 72,
        lvlMiniEntre: 69
      }
    ],
    donjonBc: ["donjon4", "donjon5", "donjon6"],
    donjonClassic: [
      {
        titre: "Titre du donjon",
        image: DonjonClassic01
      },
      {
        titre: "Titre du donjon",
        image: DonjonClassic01
      },
      {
        titre: "Titre du donjon",
        image: DonjonClassic01
      }
    ]
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