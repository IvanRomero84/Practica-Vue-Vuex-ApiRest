<template>
  <tr class="row">
    <th class="col">{{overall_league_position}}</th>
    <td class="col">{{team_name}}</td>
    <td class="col">{{overall_league_payed}}</td>
    <td class="col">{{overall_league_W}}</td>
    <td class="col">{{overall_league_D}}</td>
    <td class="col">{{overall_league_L}}</td>
    <td class="col">{{overall_league_GF}}</td>
    <td class="col">{{overall_league_GA}}</td>
    <td class="col">{{overall_league_PTS}}</td>
  </tr>
</template>

<script>
export default {
  name: "League",
  props: {
    team_name: String,
    overall_league_position: String,
    overall_league_payed: String,
    overall_league_W: String,
    overall_league_D: String,
    overall_league_L: String,
    overall_league_GF: String,
    overall_league_GA: String,
    overall_league_PTS: String
  }
};
</script>