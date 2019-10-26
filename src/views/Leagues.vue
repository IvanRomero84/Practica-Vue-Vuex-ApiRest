<template>
  <div class="leagues">
    <div class="container">
      <b-form-select
        v-model="selected"
        :options="options"
        name="liga"
        id="ligas"
        value="{this.state.liga}"
      />
      <hr />
      <h1>Liga Santander</h1>
      <!-- {{$store.state.leagues.lista}} -->
      <div class="row">
        <League
          v-for="elm in $store.state.leagues.lista"
          :key="elm.team_key"
          :team_name="elm.team_name"
          :team_badge="elm.team_badge"
        />
      </div>
    </div>
  </div>
</template>

<script>
import League from "../components/League";

export default {
  name: "leagues",
  components: {
    League
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Selecciona una liga!" },
        { value: "468", text: "Liga Santander" },
        { value: "148", text: "Premier League" },
        { value: "176", text: "Ligue 1" },
        { value: "195", text: "Bundesliga" },
        { value: "262", text: "Serie A" },
        { value: "343", text: "Eredivisie" }
      ]
    };
  },
  created() {
    this.$store.dispatch("leagues/traerEquipos");
  }
};
</script>
