<template>
  <div :class='ProjectsContainer'>
    <h3 :class='subheader'> Maintained Projects </h3>
     <hr/>
     <br/>
    <!-- Map through projects from projects API -->
      <div :class='ProjectList'>
        <div :class='Card' v-for='project in projects' :key='project.id'>
          <a :class='Tag + TagGradient' :href='project.URL' target='_blank'>{{project.Title}} →</a>
          <div :class='Info'>
            <img :class='Icon' :src='apiUrl + project.Icon[0].url' :alt='project.Icon[0].alternativeText' />
            <p :class='body2'>{{project.Description}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Projects',
  props: {
    projects: Object,
  },
  data () {
    return {
      ProjectsContainer: 'p-2 flex flex-col flex-wrap my-40 space-y-5',
      ProjectList: 'grid grid-cols-2 gap-10 my-10 ...',
      Card: 'bg-gray-100 flex flex-col flex-wrap',
      Tag: 'w-3/5 bg-solid-blue text-white text-center text-md p-1 ',
      TagGradient: 'hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-300',
      Profile: 'bg-gray-50 w-28',
      Info: 'space-y-10 p-8',
      Icon: 'w-10',


      subheader: 'text-4xl',
      body1: 'font-bold',
      body2: 'font-light',
    }
  },
})
</script>