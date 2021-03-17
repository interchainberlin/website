<template>
  <div :class='App'>
    <Navbar />
    <div :class='AppContainer'>
      <Banner :projects='projects' />
      <Updates />
      <About />
      <Projects :projects='projects' />
      <OpenPositions :jobs='jobs' />
      <Team :teams='teams' />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent } from 'vue';
import axios from 'axios';

import Navbar from './components/Navigation/Navbar.vue';
import Banner from './components/Banners/Banner.vue';
import Updates from './components/Updates.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue'; 
import OpenPositions from './components/Open_Positions.vue';
import Team from './components/Team.vue'; 
import Footer from './components/Navigation/Footer.vue';

/* How do I set up media queries?

// import VueMq from 'vue-mq'; // or 
// const VueMq = require('vue-mq');
import { MediaQueries } from 'plugins/mediaqueries';

const breakpoints = {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }

Vue.use(MediaQueries, { breakpoints })

*/

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Banner,
    Updates,
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
      projects: [], 
      jobs: [],
      teams: [],
      error: 'value not found',
      
    }
  },
  async mounted () {
    try {
      const getProjects = await axios.get('http://localhost:1337/projects')
      this.projects = getProjects.data

      const getJobs = await axios.get('http://localhost:1337/jobs')
      this.jobs = getJobs.data

      const getTeams = await axios.get('http://localhost:1337/teams')
      this.teams = getTeams.data

    } catch (error) {
      this.error = error;
    }
  }, 
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
