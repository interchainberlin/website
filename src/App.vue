<template>
  <div :class='App'>
    <Navbar />
    <div :class='AppContainer'>
      <Banner :projects='projects' />
      <Updates :articles='articles'/>
      <About />
      <Projects :projects='projects' />
      <OpenPositions :jobs='jobs' />
      <Team :teams='teams' />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
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
      App: 'w-screen text-xl ...',
      AppContainer: 'xl:container xl:mx-auto p-5',

      VUE_APP_API_URL: process.env.VUE_APP_API_URL,
      projects: [], 
      jobs: [],
      teams: [],
      articles: [],
      error: 'value not found',
      
    }
  },
  async mounted () {
    try {
      const getProjects = await axios.get(`${this.VUE_APP_API_URL}/projects`)
      console.log("teams data: " + getProjects.data)
      this.projects = getProjects.data

      const getJobs = await axios.get(`${this.VUE_APP_API_URL}/jobs`)
      this.jobs = getJobs.data

      // const getTeams = await axios.get(`${this.VUE_APP_API_URL}/teams`)
      const getTeams = await axios.get(`https://api.interchain.berlin/teams`)
      this.teams = getTeams.data

      const getArticles = await axios.get(`${this.VUE_APP_API_URL}/articles`)
      this.articles = getArticles.data

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
