<template>
  <div class="map-container" :style="{ backgroundImage: `url(${bg1})` }">
    <div class="map">
      <img src="@/assets/map-transparent.png" />
    </div>
    <div class="map-text">
      <h1>Let Pittman & Pittman Realty find the ideal opportunity for you.</h1>
    </div>
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
export default {
  name: "Map",
  data() {
    return {
      bg1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.map-container {
  padding: 10vw 5vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.map-text {
  align-self: center;
}

.map-text h1{
  text-align: center;
  color: #fbf5db;
  font-size: 5vw;
}

.map img{
  width: 95vw;
  margin-bottom: 5vw;
}

@media screen and (min-width: 640px) {
  .map-container {
    padding: 5vw;
    flex-direction: row;
    justify-content: space-between;
  }
  .map img{
    width: 45vw;
    margin-bottom: 0vw;
  }
  .map-text h1{
  font-size: 2.5vw;
}
}
</style>
