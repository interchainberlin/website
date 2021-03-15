<template>
  <div :class='TeamContainer'>
     <h3 :class='subheader'> Meet Our Team </h3>
     <hr/>
     <!-- Map through Team DB -->
      <div :class='TeamList'>
        <div :class='Card'>
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>Name</p>
            <p :class='body2'>Role</p>
          </div>
        </div>

        <div :class='Card'>
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>Name</p>
            <p :class='body2'>Role</p>
          </div>
        </div>

        <div :class='Card'>
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>Name</p>
            <p :class='body2'>Role</p>
          </div>
        </div>

        <div :class='Card'>
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>Name</p>
            <p :class='body2'>Role</p>
          </div>
        </div>

        <div :class='Card'>
          <img :class='Profile' src='../../assets/User.png'>
          <div :class='Info'>
            <p :class='body1'>Name</p>
            <p :class='body2'>Role</p>
          </div>
        </div>
      </div>

     <!-- <button>Join our Team →</button> -->
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Team',
  data() {
    return {
      TeamContainer: 'p-2 flex flex-col flex-wrap my-40',
      TeamList: 'grid grid-cols-3 gap-10 my-10 ...',
      Card: 'hover:border-blue-400 flex flex-wrap',
      Profile: 'bg-gray-50 w-28',
      Info: 'w-3/5 px-5',


      subheader: 'text-4xl',
      body1: 'font-bold',
      body2: 'font-light',
    }
  }
})
</script>