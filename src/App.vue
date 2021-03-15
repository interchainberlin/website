<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div :class='App'>
    <Navbar/>
    <div :class='AppContainer'>
      <Banner/>
      <About/>
      <Projects/>
      <OpenPositions/>
      <Team/>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/H-Layout/Navbar.vue';
import Banner from './components/H-Layout/Banner.vue';
import About from './components/H-Layout/About.vue';
import Projects from './components/H-Layout/Projects.vue'; 
import OpenPositions from './components/H-Layout/Open_Positions.vue';
import Team from './components/H-Layout/Team.vue'; 
import Footer from './components/H-Layout/Footer.vue'; 


export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
    Navbar,
    Banner,
    About,
    Projects,
    OpenPositions,
    Team,
    Footer,
  },
  data() {
    return {
      App: 'w-screen',
      AppContainer: 'xl:container xl:mx-auto p-5',
    }
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
