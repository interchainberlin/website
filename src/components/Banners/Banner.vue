<template>
  <div :class='BannerContainer'>
    <div :class='ContainerMobile + ContainerWeb'>
      <div :class='BannerHeader'>
        <h1 :class='header'>Welcome to <br/> Interchain GmbH</h1>
        <p :class='subheader'>Building the internet of blockchains</p>

          <p>We are the maintainers of — </p>
        <div :class='BannerProject'>
          <!-- Map through projects from projects API --> 
          <div v-for='project in projects' :key='project.id'>
            <a :class='link' :href='project.URL' target='_blank'>
              <img :class='Icon' :src='project.IconURL'/>
              <!-- <img :class='Icon' :src='apiUrl + project.Icon[0].url' :alt='project.Icon[0].alternativeText' /> -->
            </a>
          </div>
        </div>
      </div>

      <img :class='BannerImage' src='../../assets/BannerImage.png'/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Banner',
  props: {
    projects: Object,
  },
  data() {
    return {
      BannerContainer: 'h-full items-center my-20 md:mt-72 md:mb-44 ',
      ContainerMobile: 'flex flex-col flex-wrap space-y-3 ',
      ContainerWeb: 'md:flex-row md:justify-between md:items-center md:pb-32',
      BannerHeader: 'w-full md:w-1/2 space-y-10 ',

      header: 'text-4xl md:text-6xl ',
      subheader: 'text-lg md:text-4xl ',

      BannerProject: 'flex flex-wrap space-x-3 ',
      ProjectLinks: '',
      BannerImage: 'w-0 md:w-2/5 ',
      Icon: 'w-8 rounded-full ',
      link: 'hover:text-blue-500 hover:border hover:border-2-solid-blue ', 
    }
  },
})
</script>
