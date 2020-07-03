<template>
  <div class="ratings container">
    <h1>
      BusinessRate ranked Pittman & Pittman Realty among the Top 100 Real Estate
      Brokers in Phoenix based on 3 key factors:
    </h1>
    <img src="@/assets/ratings.jpg" class="ratings-img" />
  </div>
</template>

<script>
export default {
  name: "Ratings",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.ratings.container {
  background-color: white;
  padding: 10vw 5vw;
}

.ratings h1 {
  color: #808080;
  font-size: 5vw;
}

.ratings-img {
  width: 100%;
  margin-top: 2vw;
}

@media screen and (min-width: 640px) {
  .ratings.container {
    padding: 4vw 10vw;
  }
  .ratings h1 {
    font-size: 2.5vw;
  }
}
</style>
