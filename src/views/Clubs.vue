<template>
  <div>
    <h1>{{team_name}}</h1>
    <img :src="team_badge" alt="team_name" />
    <hr />
    <Coach
      v-for="elm in this.coach"
      :key="elm.id"
      :coach_name="elm.coach_name"
      :coach_age="elm.coach_age"
      :coach_country="elm.coach_country"
    />
    <table class="table">
      <thead>
        <tr class="row">
          <th class="col">Numero</th>
          <th class="col">Nombre</th>
          <th class="col">Edad</th>
          <th class="col">País</th>
          <th class="col">Posición</th>
          <th class="col">P.Jugados</th>
          <th class="col">T.Amarillas</th>
          <th class="col">T.Rojas</th>
        </tr>
      </thead>
      <tbody>
        <Players
          v-for="elm in this.players"
          :key="elm.player_key"
          :player_name="elm.player_name"
          :player_number="elm.player_number"
          :player_type="elm.player_type"
          :player_age="elm.player_age"
          :player_country="elm.player_country"
          :player_match_played="elm.player_match_played"
          :player_yellow_cards="elm.player_yellow_cards"
          :player_red_cards="elm.player_red_cards"
        />
      </tbody>
    </table>
  </div>
</template>




<script>
import Players from "../components/Players.vue";
import Coach from "../components/Coach.vue";

export default {
  name: "Clubs",
  components: {
    Players,
    Coach
  },
  data: () => ({
    team_name: "",
    team_badge: "",
    equipo: "",
    players: "",
    coach: ""
  }),
  methods: {
    http() {
      const clubInfo = this.$store.getters["leagues/getClubByName"](
        this.equipo
      );

      console.log(clubInfo);

      if (clubInfo.length === 0 || !clubInfo[0]) {
        this.$store.dispatch("leagues/traerClub", this.equipo).then(datos => {
          this.pintarClub(datos);
        });
      } else {
        console.log("Ya tenemos la info", clubInfo[0]);
        this.pintarClub(clubInfo[0]);
      }
      // this.$store.dispatch('traerPokemon', this.pokemon)
    },
    pintarClub(datos) {
      this.error = false;
      this.team_name = datos.team_name;
      this.team_badge = datos.team_badge;
      this.players = datos.players;
      this.coach = datos.coaches;
      console.log("Ya tienes los jugadores", this.players);
    }
  },
  created() {
    this.equipo = this.$route.params.equipo || "3";
    this.http();
  }
};
</script>


<style scoped>
</style>