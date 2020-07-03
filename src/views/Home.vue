<template>
  <div>
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

import Form from "../components/Form.vue";
import Ratings from "../components/Ratings.vue";
import Map from "../components/Map.vue";
import Badge from "../components/Badge.vue";
import Video from "../components/Video.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Form,
    Ratings,
    Map,
    Badge,
    Video,
    Footer,
  },
};
</script>
