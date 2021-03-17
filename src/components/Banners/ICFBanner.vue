<template>
  <div :class='ICFBanner'>
    <div :class='ICFContainer'>
    <p :class='subheader'>Interchain Foundation <a :class='link' href='https://docs.google.com/forms/d/e/1FAIpQLSdkgcNckqj6s9IkX0cSg6eiicYg2IPMASZeTQ2KO9kjnma28g/viewform' target='_blank'> Our Grant Program → </a></p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ICFBanner',
  data() {
    return {
      subheader: 'text-white text-sm',

      Icon: 'w-7 rounded-full', 
      ICFBanner: 'bg-black',
      ICFContainer: 'xl:container xl:mx-auto p-2',

      link: 'font-bold text-solid-blue', 

    }
  }
})
</script>