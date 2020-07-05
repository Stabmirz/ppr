<template>
  <div class="ratings container">
    <h1>How Your Favorite Business Earned its Rank</h1>
    <p>All BusinessRate Ratings are Based on 3 Key Factors:</p>
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
  color: #6f6f6f;
  font-size: 5vw;
}

.ratings p {
  color: #808080;
  font-size: 2vw;
}

.ratings-img {
  width: 100%;
  margin-top: 2vw;
}

@media screen and (min-width: 640px) {
  .ratings.container {
    padding:10vw;
  }
  .ratings h1 {
    font-size: 2.2vw;
  }
}
</style>
