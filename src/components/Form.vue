<template>
  <div :style="{ backgroundImage: `url(${bg1})` }" class="form container">
    <div :style="{ backgroundImage: `url(${bg2})` }" class="input-container">
      <div>
        <input type="text" v-model="location" placeholder="Current Location" class="input input1" />
      </div>
      <div>
        <input type="text" v-model="businessName" class="input input2"  placeholder="Business name, Plumber, HVAC..."/>
      </div>
      <div>
        <input
          type="submit"
          @click="search"
          value="Find Business"
          class="input input3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import bg1 from "@/assets/radial-gradient.jpg";
import bg2 from "@/assets/phoenix-city-25.png";
export default {
  name: "Form",
  data() {
    return {
      location: "",
      businessName: "",
      bg1,
      bg2,
    };
  },
  methods: {
    search: () => {
      alert("button clicked");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.form.container,
.input-container {
  height: 60vh;
  padding: 0;
  background-repeat: no-repeat;
}
.form.container {
  width: 100%;
  background-position: center;
  background-size: cover;
}

.input-container {
  background-size: contain;
  background-position: center;
  padding-top: 15vw;
}

.input {
  border-radius: 40px;
  padding: 30px;
  width: 75vw;
  border: transparent;
  color: black;
  text-align: center;
  font-size: 1.8rem;
  outline: none;
}

.input1,
.input2 {
  background-color: #ffffffc9;
  margin-bottom: 20px;
}

.input3 {
  background-color: #f9e447b0;
  cursor: pointer;
  text-align: center;
}

@media screen and (min-width: 640px) {
  .input-container,
  .form.container {
    height: 100vh;
  }

  .input-container {
    padding: 15vw 5vw;
    display: flex;
    justify-content: space-around;
  }

  .input {
    width: 28vw;
  }
}

@media screen and (min-width: 1200px) {
   .input {
    width: 20vw;
  }
}
</style>
