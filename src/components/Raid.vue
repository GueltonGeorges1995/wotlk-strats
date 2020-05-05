<template>
    <div>
        liste de tout les raids de {{this.path}}
    </div>
</template>

<script>
export default {
  data: () => ({
    path: ""
  }),
  mounted() {
    if (this.$route.path == "/bc/raid") {
      this.path = "Burning Crusade";
    } else if (this.$route.path == "/wotlk/raid") {
      this.path = "Wrath of the lich kink";
    } else if (this.$route.path == "/classic/raid") {
      this.path = "Classic";
    }
  }
};
</script>