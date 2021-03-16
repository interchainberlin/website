<template>
  <div :class='BannerContainer'>
    <div :class='Container'>
      <div :class='BannerHeader'>
        <h1 :class='header'>Welcome to <br/> Interchain GmbH</h1>
        <p :class='subheader'>Building the internet of blockchains</p>
        <div :class='BannerProject'>
          <img src='../../assets/Cube.png'/>
          <p>We are the maintainers of — </p>

          <!-- Map through projects from projects API --> 
          <div v-for='project in projects' :key='project.id'>
            <!-- <a :class='link' :href='project.URL' target='_blank'>{{project.Title}}</a> -->
            <a :class='link' :href='project.URL' target='_blank'>
              <img :class='Icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png'/>
              <!-- <img :class='Icon' :src='apiUrl + project.Icon[0].url' :alt='project.Icon[0].alternativeText' /> -->
            </a>
          </div>
        </div>
      </div>

      <div :class='BannerImage'>
        <img src='../../assets/BannerImage.png'/>
      </div>
    </div>
    <Updates />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Updates from './Updates.vue';

export default defineComponent({
  components: { Updates },
  name: 'Banner',
  props: {
    projects: Object,
  },
  data() {
    return {
      BannerContainer: 'h-full items-center mt-72 mb-60',
      Container: 'flex flex-wrap justify-between items-center pb-60',
      BannerHeader: 'w-1/2 space-y-10',

      header: 'text-6xl',
      subheader: 'text-4xl',

      BannerProject: 'flex flex-wrap space-x-3',
      ProjectLinks: '',
      BannerImage: 'w-1/2',
      Icon: 'w-8 border border-black rounded-full',
      link: 'hover:text-blue-500 hover:border hover:border-2-solid-blue', 
    }
  },
})
</script>
