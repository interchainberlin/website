<template>
  <a :class='button' :href='url' target='_blank'>{{title}}</a>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Button',
  props: {
    title: String, 
    url: String,
  },
  data() {
    return {
      button: 'bg-solid-blue text-white p-2 px-10',
    }
  },
})

</script>
