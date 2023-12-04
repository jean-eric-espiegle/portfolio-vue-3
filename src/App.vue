<template>
  <RouterView class="router"/>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: { RouterView }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');


html{
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
}
body{
  background-color: #3B322C;
  width: 100%;
  height: 100%;
  margin:0;
  display: block !important;
}

#app{
  width: 100%;
  height: 100%;
  display: block !important;
  margin:0;
  padding: 0;
  max-width: none;
  font-family: 'Montserrat', sans-serif !important;
}

</style>
