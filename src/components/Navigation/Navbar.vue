<template>
  <div :class='NavbarContainer'>
    <div :class='IGNav'>
      <div :class='IGContainer'>
        <div :class='Container + Logo' class="margin-top-bottom-16">
          <img :class='Icon' src='../../assets/Logo.svg'/>
          <p :class='header'>Interchain GmbH</p>
        </div>

        <br/>
        
        <div :class='Container' class="menu">
        <!-- Media query Menu component -->
        <!-- <Menu class='menu' v-show='tablet ? !showMenu : showMenu' /> -->
          <Menu />
        </div>
      </div>
    </div>

    <ICFBanner />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Menu from './Menu.vue';
import ICFBanner from '../Banners/ICFBanner.vue';

const debounce = function(func, wait, immediate) {
	let timeout;
	return function(...args) {
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(this, args);
	}
};

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
      IGContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap justify-between items-center space-y-5 md:space-y-0 ',
      Container: 'w-full md:w-auto ',
      Logo: ' md:visible flex flex-wrap items-center space-x-6 ',
      Icon: 'w-7 rounded-full',
      
      size: 'tablet',

      showMenu: true,
      windowWidth: window.innerWidth
    }
  },
  computed: {
      tablet() {
          return this.windowWidth <= 900
      }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', debounce(this.onResize, 50));
    })
  },
  beforeUnmount() { 
    window.removeEventListener('resize', debounce(this.onResize, 50)); 
  },
  methods: {  
    onResize() {
      console.log('onResize')
      this.windowWidth = window.innerWidth
    }
  }
})

</script>

<style>
@media (max-width: 900px) {
 .menu {visibility: hidden;}
 .menu {display: none;}
}
.margin-top-bottom-16 {
  /* margin-top: 16px;
  margin-bottom: 16px; */
}
</style>