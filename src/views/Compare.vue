<template>
  <div class="compare main-container">
    <div>
      <table class="table table-bordered">
        <thead class="free">
          <tr>
            <th scope="col">Free Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Business Listing</td>
          </tr>
          <tr>
            <td>Listing and Review Management Dashboard</td>
          </tr>
          <tr>
            <td>Rating dashboard</td>
          </tr>
          <tr>
            <td>Tips for how to get more ratings/reviews</td>
          </tr>
          <tr>
            <td>Tips for how to improve your BusinessRate rating</td>
          </tr>
          <tr>
            <td>
              Ability to give feedback to reviewers and reply to their reviews
            </td>
          </tr>
          <tr>
            <td>
              Ability to use the BusinessRate badge on your website and other
              marketing assets
            </td>
          </tr>
          <tr>
            <td>Ability to embed rating form on your website</td>
          </tr>
          <tr>
            <td>Monthly updates to your BusinessRate rating</td>
          </tr>
          <tr>
            <td>Ability to mark reviews as verified</td>
          </tr>
          <tr>
            <td>Ability to mark reviews as private</td>
          </tr>
          <tr class="grey">
            <td>
              Guaranteed Top Placement as a "Staff Favorite" on listing page
              above rankings
            </td>
          </tr>
          <tr class="grey">
            <td>Enhanced Listing</td>
          </tr>
        </tbody>
      </table>
      <a href="/add-business-free"><button class="freeButton">Add Free Listing</button></a>
    </div>
    <div>
      <table class="table table-bordered">
        <thead class="premium">
          <tr>
            <th scope="col">Premium Plan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Listing</td>
          </tr>
          <tr>
            <td>Listing Management Dashboard</td>
          </tr>
          <tr>
            <td>Rating dashboard</td>
          </tr>
          <tr>
            <td>Tips/Recommendations for how to get more ratings/reviews</td>
          </tr>
          <tr>
            <td>Tips/Recommendations for how to improve your Rating Score™</td>
          </tr>
          <tr>
            <td>
              Ability to leave Management Notes and send messages to reviewers
            </td>
          </tr>
          <tr>
            <td>
              Ability to use Top Rated Local® trust badge for website or other
              marketing assets
            </td>
          </tr>
          <tr>
            <td>Ability to embed rating form on your website</td>
          </tr>
          <tr>
            <td>Monthly updates to your Rating Score™</td>
          </tr>
          <tr>
            <td>Ability to mark reviews as verified</td>
          </tr>
          <tr>
            <td>Ability to mark reviews as private</td>
          </tr>
          <tr>
            <td>
              Guaranteed Top Placement as a "Staff Favorite" on listing page
              above rankings
            </td>
          </tr>
          <tr>
            <td>Enhanced Listing</td>
          </tr>
        </tbody>
      </table>
      <a href="https://businessrate.myshopify.com/cart/35627447222437:1" target="_blank"><button class="premiumButton">Add a Premium Listing</button></a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
export default {
  name: "Compare",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.compare {
  padding: 10vw 8vw;
  background-color: #eff0f0;
  display: flex;
  justify-content: space-between;
}

.compare > div {
  margin-bottom: 10vw;
}

.compare table {
  font-family: "Playfair Display", serif;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.free {
  background-color: #bec0c2;
}
.premium {
  background-color: #f7d184;
}

table th {
  font-size: 4vw;
  text-align: center;
}

table td {
  font-size: 3vw;
  text-align: left;
}

.grey {
  color: #cccccc;
}

.premiumButton, .freeButton {
  box-shadow: 0px 1px 0px 0px #fff6af;
  border-radius: 10px;
  border: 1px solid #ffaa22;
  cursor: pointer;
  color: #333333;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 48px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffee66;
  margin-top: 40px;
}

.premiumButton{
    background: linear-gradient(to bottom, #ffec64 5%, #ffab23 100%);
  background-color: #ffec64;
}


.premiumButton:hover {
  background: linear-gradient(to bottom, #ffab23 5%, #ffec64 100%);
  background-color: #ffab23;
}


.freeButton:hover {
  background-color: rgb(227, 227, 227);
}

.premiumButton:active,
.freeButton:active,
.premiumButton:focus,
.freeButton:focus {
  outline: none;
}

@media screen and (min-width: 640px) {
  .compare {
    flex-direction: row;
    padding: 8vw 3vw;
  }

  .compare > div {
    margin-bottom: 0vw;
  }
  .compare table {
    width: 45vw;
  }

  table th {
    font-size: 2vw;
  }

  table td {
    font-size: 1.3vw;
  }
}

@media screen and (min-width: 1200px) {
  .compare {
    padding: 8vw;
  }
  table th {
    font-size: 1.3vw;
  }

  table td {
    font-size: 1vw;
  }
  .compare table {
    width: 40vw;
  }
}
</style>
