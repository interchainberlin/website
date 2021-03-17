<template>
  <div :class='NavbarContainer'>
    <div :class='IGNav'>
      <div :class='IGContainer'>
        <div :class='Container + Logo'>
          <img :class='Icon' src='../../assets/Logo.svg'/>
          <p :class='header'>Interchain GmbH</p>
        </div>

        <hr/>

        <!-- Media querie Menu component -->
        <Menu :class='Container' v-show='tablet ? !showMenu : showMenu' />
      </div>
    </div>

    <ICFBanner />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Menu from './Menu.vue';
import ICFBanner from '../Banners/ICFBanner.vue';

export default defineComponent({
  name: 'Navbar',
  components: {
    Menu,
    ICFBanner, 
  },
  data() {
    return {
      NavbarContainer: 'w-full md:fixed top-0 z-50',
      header: 'text-white text-lg',
      subheader: 'text-white text-sm',

      IGNav: 'bg-gray-800',
      IGContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap justify-between items-center space-y-5 md:space-y-0 divide-y md:divide-y-0',
      Container: 'w-full md:w-auto ',
      Logo: 'md:visible flex flex-wrap items-center space-x-6 ',
      Icon: 'w-7 rounded-full',  

      showMenu: true,
      mobile: window.innerWidth <= 450,
      tablet: window.innerWidth <= 900,
      laptop: window.innerWidth <= 1250,
      desktop: window.innerWidth <= Infinity,
    }
  },
})
</script>