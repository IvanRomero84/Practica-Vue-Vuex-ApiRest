<template>
  <div>
    <div class="tab">
      <b-form-select
        v-model="selected"
        :options="options"
        name="liga"
        id="ligas"
        value="{this.state.liga}"
      />
      <hr />
      <h1>Liga Santander</h1>
    </div>
    <div class="tabla">
      <table class="table">
        <thead>
          <tr class="row">
            <th class="col">Posición</th>
            <th class="col">Equipo</th>
            <th class="col">P.J.</th>
            <th class="col">P.G</th>
            <th class="col">P.E.</th>
            <th class="col">P.P.</th>
            <th class="col">G.F</th>
            <th class="col">G.C</th>
            <th class="col">Puntos</th>
          </tr>
        </thead>
        <tbody>
          <TablaClass
            v-for="elm in $store.state.table.lista"
            :key="elm.number"
            :team_name="elm.team_name"
            :overall_league_position="elm.overall_league_position"
            :overall_league_payed="elm.overall_league_payed"
            :overall_league_W="elm.overall_league_W"
            :overall_league_D="elm.overall_league_D"
            :overall_league_L="elm.overall_league_L"
            :overall_league_GF="elm.overall_league_GF"
            :overall_league_GA="elm.overall_league_GA"
            :overall_league_PTS="elm.overall_league_PTS"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import TablaClass from "../components/TablaClass";

export default {
  name: "Tabla",
  components: {
    TablaClass
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
    this.$store.dispatch("table/traerTabla");
  }
};
</script>

<style scoped>
.tabla {
  margin: 2% 9%;
  padding: 1% 2%;
  border: 2px solid gray;
  border-radius: 5px;
}
.tab {
  margin: 2% 9%;
  padding: 1% 2%;
}
</style>