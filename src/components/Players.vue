<template>
  <tr class="row">
    <th class="col">{{player_number}}</th>
    <td class="col">{{player_name}}</td>
    <td class="col">{{player_age}}</td>
    <td class="col">{{player_country}}</td>
    <td class="col">{{player_type}}</td>
    <td class="col">{{player_match_played}}</td>
    <td class="col">{{player_yellow_cards}}</td>
    <td class="col">{{player_red_cards}}</td>
  </tr>
</template>

<script>
export default {
  name: "Players",
  props: {
    player_name: String,
    player_key: String,
    player_number: String,
    player_type: String,
    player_age: String,
    player_country: String,
    player_match_played: String,
    player_yellow_cards: String,
    player_red_cards: String
  }
};
</script>

<style scoped>
</style>


