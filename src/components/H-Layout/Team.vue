<template>
  <div :class='TeamContainer'>
     <h3 :class='subheader'> Meet Our Team </h3>
     <hr/>
     <br/>
     <!-- Map through teams from teams API -->
      <div :class='TeamList'>
        <div :class='Card' v-for='team in teams' :key='team.id'>
          <!-- <img :class='Profile' :src='apiUrl + team.Profile[0].url'> -->
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>{{team.FirstName}} {{team.LastName}}</p>
            <p :class='body2'>{{team.Role}}</p>
          </div>
        </div>
      </div>

     <!-- <button>Join our Team →</button> -->
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Team',
  props: {
    teams: Object,
  },
  data() {
    return {
      TeamContainer: 'p-2 flex flex-col flex-wrap my-40 space-y-5',
      TeamList: 'grid grid-cols-3 gap-10 my-10 ...',
      Card: 'hover:border hover:border-solid-blue flex flex-wrap',
      Profile: 'bg-gray-50 w-28',
      Info: 'w-3/5 px-5',


      subheader: 'text-4xl',
      body1: 'font-bold',
      body2: 'font-light',
    }
  },
})
</script>