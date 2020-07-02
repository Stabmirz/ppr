<template>
  <div id="app">
    <NavBar />
    <Form />
    <img src="@/assets/gold-striped-background-1.jpg" class="border" />
    <Ratings />
    <Map />
    <Badge />
    <Video />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Form from "./components/Form.vue";
import Ratings from "./components/Ratings.vue";
import Map from "./components/Map.vue";
import Badge from "./components/Badge.vue";
import Video from "./components/Video.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Form,
    Ratings,
    Map,
    Badge,
    Video,
    Footer,
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  background-color: #191919;
}

html {
  font-size: 10px;
  font-family: "Playfair Display", serif;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.border {
  height: 25px;
  width: 100%;
}

@media screen and (min-width: 640px) {
  .container {
    padding: 0 10rem;
  }

  .border {
    height: 30px;
  }
}
</style>
