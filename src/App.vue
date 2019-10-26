<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/tabla">Clasificación</router-link>|
      <router-link to="/leagues">Ligas</router-link>|
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(estasLogeado => {
        if (!estasLogeado) {
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>




<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
