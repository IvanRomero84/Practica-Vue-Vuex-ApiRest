<template>
  <div>
    Password:
    <input type="password" v-model="password" />
    <br />
    <button @click="login()">Login</button>
    <span>Pass:"1234"</span>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    password: "",
    hassError: false,
    esSegura: false
  }),
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.password).then(estasLogeado => {
        if (estasLogeado) {
          this.$router.push("/");
        } else {
          console.log("Error! No estás logeado");
          this.hassError = true;
          this.password = "";
        }
      });
    }
  },
  created() {
    if (this.$store.state.auth.isLogged == true) {
      this.$router.push("/");
    } else {
      console.log("No estas logeado");
    }
  }
};
</script>