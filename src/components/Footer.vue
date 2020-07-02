<template>
  <div class="footer-container">
    <div class="footer-text">
      <h1>Pittman & Pittman Realty</h1>
      <p>
        Pittman & Pittman Realty provides full-service, residential real estate
        services for buyers, sellers, and investors.
      </p>
      <p>IF YOU ARE THINKING ABOUT BUYING A HOME.......</p>
      <p>* Free MLS Home Search</p>
      <p>
        If You are looking to buy a home, simply click the 'Search button above
        where you can search the MLS for Free
      </p>
      <br />
      <br />
      <span class="copyright">©2020 Pittman & Pittman Realty</span>
    </div>
    <div class="footer-menu">
      <div class="company">
        <h1>Company</h1>
        <a href="#">About</a>
        <a href="#">Legal</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Report Spam</a>
        <a href="#">Branding Guidelines</a>
        <a href="#">Supported Sources</a>
      </div>
      <div class="get-listed">
        <h1>Get Listed</h1>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
        <a href="#">Add Business Free</a>
        <a href="#">Suggest a Business</a>
        <a href="#">Featured Pick</a>
        <a href="#">Compare Plans</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.footer-container {
  padding: 10vw 5vw;
  display: flex;
  color: white;
  flex-direction: column;
  background-color: black;
}

.footer-text {
  margin-bottom: 70px;
}

.company,
.get-listed {
  margin-bottom: 30px;
}

.footer-menu {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.footer-text h1,
.footer-menu h1 {
  color: #f6d185;
  margin-bottom: 50px;
}

.footer-text h1 {
  font-size: 7vw;
  text-align: left;
}

.footer-text p {
  font-size: 4vw;
}

.footer-menu h1 {
  font-size: 6vw;
}

.footer-menu a {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 6vw;
  transition: color 650ms;
  margin-bottom: 15px;
}

.footer-menu a:hover {
  color: #f6d185;
}

span.copyright {
  font-size: 18px;
  font-weight: 800;
  margin-top: 50px;
}

@media screen and (min-width: 640px) {
  .footer-text h1 {
    font-size: 3vw;
  }
  .footer-menu h1 {
    font-size: 2.5vw;
  }
  .footer-text p {
    font-size: 2.3vw;
  }
  .footer-menu a {
    font-size: 2.5vw;
  }
}

@media screen and (min-width: 768px) {
  .footer-container {
    padding: 4vw;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-menu {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-text,
  .company,
  .get-listed {
    margin-bottom: 0px;
  }

  .footer-text,
  .footer-menu {
    width: 45%;
  }

  .footer-menu > div {
    width: 45%;
  }

  .footer-text p {
    font-size: 1.3vw;
  }

  .footer-menu a {
    font-size: 1.5vw;
  }
}
</style>
