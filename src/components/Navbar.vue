<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="draw=!draw" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <router-link to="/" class="navbar-title">
          <span class="font-weight-light">Wotlk</span>
          <span>Strats</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(linkNavbar,i) in linksNavbar" :key="i" router :to="linkNavbar.route">
            <v-list-item-title v-text="linkNavbar.text" @click="checkPath()"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="draw" class="primary">
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(linkDraw,i) in linksDraw" :key="i" router :to="linkDraw.route">
            <v-list-item-icon>
              <v-icon class="white--text" v-text="linkDraw.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="linkDraw.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    draw: false,
    linksDraw: [
      {
        icon: "dashboard",
        text: "Wrath ot the lich king",
        route: "/wotlk"
      },
      {
        icon: "folder",
        text: "Burning Crusade",
        route: "/bc"
      },
      {
        icon: "person",
        text: "Classic",
        route: "/classic"
      }
    ],
    linksNavbar: [
      {
        icon: "dashboard",
        text: "Donjons",
        route: "/wotlk/donjon"
      },
      {
        icon: "dashboard",
        text: "Raids",
        route: "/wotlk/raid"
      }
    ]
  }),
  updated() {
    if (this.$route.path == "/bc") {
      this.linksNavbar[0].route = "/bc/donjon";
      this.linksNavbar[1].route = "/bc/raid";
    } else if (this.$route.path == "/classic") {
      this.linksNavbar[0].route = "/classic/donjon";
      this.linksNavbar[1].route = "/classic/raid";
    } else if (this.$route.path == "/wotlk") {
      this.linksNavbar[0].route = "/wotlk/donjon";
      this.linksNavbar[1].route = "/wotlk/raid";
    }
  },
  methods: {
    checkPath() {
      if (this.$route.path == "/bc/donjon" || this.$route.path == "/bc/raid") {
        this.linksNavbar[0].route = "/bc/donjon";
        this.linksNavbar[1].route = "/bc/raid";
      } else if (
        this.$route.path == "/wotlk/donjon" ||
        this.$route.path == "/wotlk/raid"
      ) {
        this.linksNavbar[0].route = "/wotlk/donjon";
        this.linksNavbar[1].route = "/wotlk/raid";
      } else if (
        this.$route.path == "/classic/donjon" ||
        this.$route.path == "/classic/raid"
      ) {
        this.linksNavbar[0].route = "/classic/donjon";
        this.linksNavbar[1].route = "/classic/raid";
      }
    }
  }
};
</script>

<style scoped>
.navbar-title {
  text-decoration: none;
  color: #9e9e9e;
}
</style>