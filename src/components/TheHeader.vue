<template>
  <header>
    <div class="img-header">
      <nav>
        <div class="menu-pc">
          <ul class="menu-list">
            <li class="link"><router-link to="/" exact>Úvod</router-link></li>
            <li class="link"><router-link to="/about">Cukrárna</router-link></li>
            <li class="link"><router-link to="/store">Nabídka</router-link></li>
            <li id="nav-image-li">
              <router-link to="/"
                ><img
                  id="nav-image"
                  alt="úvodní obrázek"
                  src="../assets/logo_bila.svg"
                  width="120"
              /></router-link>
            </li>
            <li class="link"><router-link to="/career">Kariéra</router-link></li>
            <li class="link"><router-link to="/locations">Pobočky</router-link></li>
            <li class="shopping-cart">
              <router-link to="cart">
                <img
                  src="../assets/icons/supermarket_White.svg"
                  alt="Košík"
                  width="40"
                  height="40"
                />
                <span class="cart-items">0</span>
              </router-link>
            </li>
          </ul>
        </div>
      <div class="heading-text-main">
        <h1>CUKRÁRNA</h1>
        <h1>U RAKVIČKY</h1>
      </div>
        <div class="menu-mobile">
          <p>&gt;&gt; Zobrazit nabídku &lt;&lt;</p>
          <ul class="menu-mobile-list">
            <li><router-link to="/">Úvod</router-link></li>
            <li><router-link to="/about">Cukrárna</router-link></li>
            <li><router-link to="/store">Nabídka</router-link></li>
            <li><router-link to="/career">Kariéra</router-link></li>
            <li><router-link to="/locations">Poobočky</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style >
.menu-pc {
  background-color: rgba(233, 167, 176, 0.5);
  height: 80px;
}
.heading-text-main {
  width: 600px;
  margin: auto;
  margin-top: 100px;
  background-color: rgba(233, 167, 176, 0.5);
}
.img-header {
  background-image: url("~../assets/header_pc.jpg");
  max-width: 100%;
  height: 400px;
  background-size: cover;
}
nav ul li {
  list-style: none;
}
.menu-list {
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.menu-list li a {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
.menu-list li {
  padding-top: 20px;
}
.menu-list li a:hover {
  color: #fcfcfc;
}
.link {
  position: relative;
  height: 100%;
}
.link:after {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #fcfcfc;
  -webkit-transition: width 0.2s ease;
}
.link:hover:after {
  width: 100%;
  left: 0;
  background: #fcfcfc;
}
.menu-mobile {
  display: none;
}
.menu-mobile-list {
  max-height: 500px;
  overflow: hidden;
  transition: all 300ms ease-in-out;
}
.menu {
  cursor: pointer;
}
.menu-mobile-list {
  padding: 0;
}
.menu-mobile {
  margin: 0;
}
.cart-items {
  display: inline-block;
  z-index: 1;
  background-color: rgba(227, 118, 133, 1);
  position: relative;
  left: -11px;
  top: -16px;
  width: 18px;
  height: 18px;
  font-size: 12px;
  border-radius: 50%;
  text-align: center;
  transition: transform 0.8s ease-in-out;
}
.shopping-cart a:hover span {
  background-color: rgb(219, 77, 96);
}
/*.cartItemChanged {
  transform: rotateY(360deg);
}*/
@media only screen and (max-width: 990px) {
  .menu-list {
    width: 90%;
  }
}
@media only screen and (max-width: 720px) {
  .menu-list {
    padding: 0;
  }
  #nav-image-li {
    margin: auto;
  }
  #nav-image {
    margin-left: 62px;
  }
  .img-header {
    height: 100%;
  }

  .menu-mobile {
    display: block;
  }
  .link {
    display: none;
  }

  .menu-mobile {
    padding-top: 80px;
    width: 85%;
    transition: 0.5s all linear;
    margin: auto;
    text-align: center;
  }
  .menu-mobile p {
    background-color: rgba(233, 167, 176, 0.9);
    cursor: pointer;
    padding: 15px 0;
  }
  .menu-mobile li {
    cursor: pointer;
    width: inherit;
    background-color: rgba(233, 167, 176, 1);
    padding: 15px 0;
    box-shadow: 0px 4px 12px -3px rgba(0, 0, 0, 0.44);
  }
  .menu-mobile li:hover {
    background-color: rgba(233, 167, 176, 0.95);
  }
  .menu-mobile li a {
    text-decoration: none;
    color: white;
  }
  .menu-mobile li:last-child {
    margin-bottom: 3rem;
  }
}
@media only screen and (max-width: 480px) {
  .menu-mobile {
    width: 95%;
  }
  .menu-mobile li {
    padding: 10px 0;
  }
}
</style>
