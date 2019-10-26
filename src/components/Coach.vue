<template>
  <div class="card">
    <h4>Entrenador: {{coach_name}}</h4>
    <p>Años: {{coach_age}}</p>
    <p>Nacionalidad: {{coach_country}}</p>
  </div>
</template>

<script>
export default {
  name: "Coach",
  props: {
    coach_name: String,
    coach_age: String,
    coach_country: String
  }
};
</script>
