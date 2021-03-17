<template>
  <div :class='NavbarContainer'>
    <div :class='IGNav'>
      <div :class='IGContainer'>
        <div :class='Container'>
          <img :class='Icon' src='../../assets/Logo.svg'/>
          <p :class='header'>Interchain GmbH</p>
        </div>
        <!-- Media querie Menu component -->
        <Menu v-show='tablet ? !showMenu : showMenu' />
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
      IGContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap justify-between items-center',
      ContainerMobile: 'invisible md:visible',
      Container: 'md:visible flex flex-wrap items-center space-x-6 ',
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