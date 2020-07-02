<template>
  <header>
    <div class="nav container">
      <nav>
        <div class="menu-icons" @click="show">
          <i class="icon ion-md-menu"></i>
          <i class="icon ion-md-close"></i>
        </div>
        <a href="#" class="logo">
          <h1>Pittman & Pittman Realty</h1>
        </a>
        <ul class="nav-list">
          <li>
            <a href="#"
              >Company
              <i class="icon ion-md-arrow-dropdown"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
              <li>
                <a href="#">Spam</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Guidelines</a>
              </li>
              <li>
                <a href="#">Supported</a>
              </li>
              <li>
                <a href="#">Sources</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#"
              >Get Listed
              <i class="icon ion-md-arrow-dropdown"></i>
            </a>
            <ul class="sub-menu">
              <li>
                <a href="#">Benefits of Joining</a>
              </li>
              <li>
                <a href="#">Add Business Free</a>
              </li>
              <li>
                <a href="#">Suggest a Business</a>
              </li>
              <li>
                <a href="#">Featured Picks</a>
              </li>
              <li>
                <a href="#">Compare Plans</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Login/Sign Up</a>
          </li>
        </ul>
      </nav>
    </div>
    <img src="@/assets/gold-striped-background-1.jpg" class="border" />
  </header>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    show: function() {
      const selectElement = (element) => document.querySelector(element);
      selectElement("nav").classList.toggle("active");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
a {
  text-decoration: none;
  color: white;
}

ul {
  list-style: none;
}

header {
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
}

.menu-icons {
  color: #f6d185;
  font-size: 4rem;
  position: absolute;
  right: 2rem;
  top: 35%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1500;
  display: block;
}

.nav {
  font-family: "Playfair Display", serif;
  background-color: black;
}

nav {
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
}

.logo {
  width: 60vw;
}

.logo h1 {
  font-size: 5vw;
}

.nav-list {
  width: 40vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  height: 100vh;
  display: none;
  align-items: initial;
  overflow-y: scroll;
}

.ion-md-arrow-dropdown:before {
  color: #f6d185;
  font-size: 30px;
}

.ion-md-arrow-dropdown {
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
}

.nav-list > li {
  line-height: 6rem;
  position: relative;
}

.nav-list a {
  display: block;
  color: #eee;
  padding: 0 2.5rem;
  font-size: 6vw;
  transition: color 650ms;
}

.nav-list a:hover {
  color: #f6d185;
}

.sub-menu {
  position: initial;
  border: 3px solid transparent;
  border-left-color: #f6d185;
  margin-left: 1rem;
  max-height: 0;
  width: 20rem;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 650ms ease;
}

.sub-menu li {
  line-height: 4rem;
}

.nav-list li:hover > .sub-menu {
  opacity: 1;
  visibility: visible;
  max-height: initial;
}

li.move-right {
  margin: 0 auto 0 0;
  line-height: initial;
}

.ion-md-close {
  display: none;
}

nav.active .ion-md-close {
  display: block;
}

nav.active .ion-md-menu {
  display: none;
}

nav.active .nav-list {
  display: flex;
  width: 100%;
  text-align: left;
}

@media screen and (min-width: 640px) {
  .nav {
    padding: 5rem;
  }

  .nav-list {
    display: flex;
    background-color: transparent;
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
    width: 100%;
    align-items: center;
    overflow-y: visible;
    position: relative;
    padding: 0;
  }

  .nav-list a {
    font-size: 1.5vw;
  }

  .menu-icons {
    display: none;
  }

  .logo h1 {
    font-size: 2.5vw;
  }

  .sub-menu {
    width: 20rem;
    display: block;
    position: absolute;
    border: 3px solid transparent;
    border-top: 3px solid #f6d185;
    background-color: #191919;
  }

  .sub-menu::before {
    content: "";
    position: absolute;
    top: -2.5rem;
    left: 3rem;
    border: 1.2rem solid transparent;
    border-bottom-color: #f6d185;
  }

  .nav-list li:hover > .sub-menu {
    top: 8rem;
    opacity: 1;
    visibility: visible;
  }
}
</style>
