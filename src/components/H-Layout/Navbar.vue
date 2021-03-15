<template>
  <div :class='NavbarContainer'>
    <div :class='IGNav'>
      <div :class='IGContainer'>
        <div :class='Company'>
          <!-- <img /> -->
          <p :class='header'>Interchain GmbH</p>
        </div>
        <div :class='Menu'>
          <!-- <button>Job</button> -->
          <p :class='subheader'>Team</p>
        </div>
      </div>
    </div>

    <div :class='ICFBanner'>
      <div :class='ICFContainer'>
      <p :class='subheader'>Interchain Foundation Our Grant Program →</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      NavbarContainer: 'w-full',
      header: 'text-white text-lg',
      subheader: 'text-white text-sm',

      IGNav: 'bg-gray-800',
      IGContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap justify-between items-center',
      Company: '',
      Menu: '',
      ICFBanner: 'bg-black',
      ICFContainer: 'xl:container xl:mx-auto p-2',


    }
  }
})
</script>