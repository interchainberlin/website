<template>
  <div :class='UpdateContainerMobile + UpdateContainerWeb'>
    <tag :class='UpdateTag'> Update </tag>
    <hr/>
    <!-- Pull update infrom from Blog DB -->
    <p :class='body1'> ICF Update — March 15th </p>
    <p :class='body2'> Description of newest IG / ICF update </p>
    <a :class='link' href='https://interchain-io.medium.com/' target='_blank'> Read → </a>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Updates',
  data() {
    return {
      UpdateContainerMobile: 'bg-gray-50 rounded-lg border flex flex-col flex-wrap p-5 space-y-3 ',
      UpdateContainerWeb: 'md:flex-row md:space-x-6',
      UpdateTag: 'text-white text-center bg-gradient-to-r from-gray-800 to-gray-300 hover:bg-solid-blue p-2 px-6 rounded-lg w-2/5 md:w-auto',
      body1: 'font-bold',
      body2: 'font-light', 
      link: 'font-bold text-solid-blue', 
    }
  }
})
</script>