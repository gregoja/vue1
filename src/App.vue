<template>
  <TheHeader />
  <router-view></router-view>
  <TheFooter />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  font-family: "Barlow", sans-serif;
}
@font-face {
  font-family: JT_Marine;
  src: url("~./assets/JTMarnie-Light.ttf");
}
.cleaner {
  clear: both;
}
.bg-light {
  background-color: rgba(233, 167, 176, 0.5) !important;
}
.navbar-light .navbar-toggler {
  border-color: #ededed;
}

.navbar-light .navbar-nav .nav-link {
  text-align: center;
  color: white;
}
.navbar-light .navbar-nav .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
}
.navbar-light .navbar-nav .nav-link.disabled,
.navbar-light .navbar-nav .nav-link:focus {
  color: white;
}

h1 {
  font-family: JT_Marine;
  color: white;
  text-align: center;
}

.odkazy {
  margin-top: 30px;
}
.card {
  margin: auto;
  border: none;
}
.card-body {
  padding: 0;
  margin: 1.25rem 0 1.25rem 0;
}
.btn {
  width: 258px;
  border-radius: 0;
  background-color: #e4949f;
  border: none;
  padding: 0.4rem 0.75rem;
  font-size: 18px;
}
.btn:hover {
  background-color: #eda4ae;
  font-weight: bold;
}
.card-img-top {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-primary:focus,
.btn-primary.focus {
  box-shadow: none;
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #eda4ae;
  border: none;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #eda4ae;
  border: none;
}

h2 {
  text-align: center;
}

.chvastani img {
  float: left;
  margin-top: 20px;
  margin-right: 15px;
}

.slevanov {
  padding-top: 20px;
  padding-bottom: 20px;
}
.slevanov h2 {
  margin-bottom: 20px;
}
h5 {
  text-align: center;
  font-size: 23px;
}
.slevanov img {
  width: 258px;
  height: 258px;
  z-index: 0;
}
.slevanov p {
  text-align: center;
}
.tag p,
.novinka p {
  width: 60px;
  height: 25px;
  position: relative;
  top: 40px;
  left: 200px;
  z-index: 1;
  background-color: #b83636;
  color: white;
  border-radius: 10px;
}
.novinka p {
  width: 65px;
  background-color: #70bd4a;
}

.podsebe {
  display: table;
}

@media only screen and (min-width: 576px) {

  .centrace {
    width: 370px;
  }
  .slevanov img {
    margin: auto;
  }
  .zmensit {
    width: 258px;
    margin: auto;
    display: table;
  }
  .tag p,
  .novinka p {
    position: relative;
    top: 40px;
    left: 320px;
  }
}
@media only screen and (min-width: 768px) {

  .centrace {
    width: 100%;
    margin-top: 10px;
  }
  .soupni {
    margin-top: 20px;
  }
  .chvastani {
    background: url("~./assets/chvastani_pc.jpg") no-repeat center center fixed;
    width: 100%;
    height: 330px;
    background-size: cover;
    padding: 30px 0 15px 0;
  }
  .odkazy {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .tag p,
  .novinka p {
    position: relative;
    top: 40px;
    left: 220px;
  }
  .posun {
    margin-top: 20px;
  }
}
@media only screen and (min-width: 992px) {

  .soupni {
    margin: auto;
    margin-top: 20px;
  }
  .tag p,
  .novinka p {
    position: relative;
    top: 40px;
    left: 300px;
  }
  .posun {
    margin: auto;
    width: 776px;
  }
}
@media only screen and (min-width: 1200px) {
  h1 {
    font-size: 4em;
  }
}
</style>
