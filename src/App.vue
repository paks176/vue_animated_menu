<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap" rel="stylesheet">
    <MainHeader/>
    <CompetitorsNames/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import CompetitorsNames from './components/CompetitorsNames.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    CompetitorsNames
  }
}
</script>

<style>

body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: "Yanone Kaffeesatz", sans-serif;
  box-sizing: border-box;
}
#app {
  background: radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(2,9,35,1) 67%);
  height: 100%;
  position: relative;
}

</style>
