<template>
  <div class="col-3">
    <router-link :to="'/club/' + team_name">
      <div class="card">
        <h4>{{team_name}}</h4>
        <img :src="team_badge" alt="team_name" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "League",
  props: {
    team_name: String,
    team_badge: String,
    team_key: String
  }
};
</script>

<style scoped>
.card {
  margin: 20px 0;
  cursor: pointer;
  border: 2px solid black;
}
h4 {
  padding-top: 20px;
  color: #42b983;
}
img {
  width: 50%;
  align-items: center;
  margin: 0 0 5% 25%;
}
</style>