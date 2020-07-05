<template>
  <div class="business container">
    <h1>It is Fast and Easy to Find Best Rated Businesses in Your Area.</h1>
    <div class="businesses">
      <div class="restaurant">
        <img src="@/assets/restaurant.png" />
        <p>Restaurant</p>
      </div>
      <div class="handyman">
        <img src="@/assets/handyman.png" />
        <p>Handyman</p>
      </div>
      <div class="plumber">
        <img src="@/assets/plumber.png" />
        <p>Plumber</p>
      </div>
      <div class="electrician">
        <img src="@/assets/electrician.png" />
        <p>Electrician</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Business",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.business.container {
  background-color: white;
  padding: 8vw 5vw;
}

.business h1 {
  color: #6f6f6f;
  font-size: 7vw;
  margin-bottom: 10vw;
}

.businesses {
  width: 80%;
  margin: auto;
}

.restaurant,
.handyman,
.plumber,
.electrician {
  margin-bottom: 15vw;
  text-align: center;
}

.restaurant p,
.handyman p,
.plumber p,
.electrician p {
  color: #8a8585;
  font-size: 7vw;
  margin: 15px 0 40px;
}

@media screen and (min-width: 640px) {
  .businesses {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .business.container {
    padding: 8vw;
  }

  .business h1 {
    font-size: 2.5vw;
    margin-bottom: 5vw;
  }

  .restaurant,
  .handyman,
  .plumber,
  .electrician {
    margin-bottom: 0vw;
  }
  .restaurant p,
  .handyman p,
  .plumber p,
  .electrician p {
    font-size: 2vw;
  }

  .restaurant img,
  .handyman img,
  .plumber img,
  .electrician img {
    width: 80%;
  }
}

@media screen and (min-width: 1024px) {
  .businesses {
    flex-wrap: nowrap;
  }
}

@media screen and (min-width: 1200px) {
  .restaurant img,
  .handyman img,
  .plumber img,
  .electrician img {
    width: 100%;
  }
}
</style>
