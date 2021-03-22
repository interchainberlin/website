<template>
  <div :class='Menu'>
    <!-- <p :class='subheader'>Team</p> -->
    <a href='https://github.com/interchainberlin' target='_blank' >
      <img :class='Icon' src='../../assets/GithubGray.png'/>
    </a>
    <a href='https://interchain-io.medium.com' target='_blank' >
      <img :class='Icon' src='../../assets/Medium_logo.svg.png'/>
    </a>
    <Button title='We are hiring' url='https://interchain-gmbh.breezy.hr/'/>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Button from '../Button.vue'; 

export default defineComponent({
  name: 'Navbar',
  components: {
    Button,
  },
  data() {
    return {
      Menu: 'flex flex-wrap justify-between items-center space-x-6 pt-2 md:pt-0',

      header: 'text-white text-xl',
      subheader: 'text-white text-lg hover:font-bold hover:text-solid-blue',

      Icon: 'w-7 rounded-full',  
    }
  }
})
</script>