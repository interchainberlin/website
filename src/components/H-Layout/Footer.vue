<template>
  <div :class='FooterContainer'>
    <div :class='SocailMedia'>
      <div :class='Content + Discord'>
        <!-- <img /> -->
        <p :class='body1'>Be part of the journey</p>
        <p :class='body2'>Join our Discord community <br/> to shape the future</p>
      </div>
       <div :class='Content + Twitter'>
        <!-- <img /> -->
        <p :class='body1'>Stay up to date</p>
        <p :class='body2'>Follow @Interchain_io to get <br/> the latest updates. </p>
      </div>
    </div>

    <hr/>

    <div :class='Info'>
      <div :class='InfoContainer'>
        <div :class='CopyRight'>
          <p :class='body2'>© 2021 </p>
          <p :class='body2'>Interchain GmbH</p>
        </div>
        <div :class='Contact'>
          <p :class='body2'>Questions? Get in touch at</p>
          <p :class='link'>contact@interchain.berlin</p>
        </div>
        <div :class='Newsletter'>
          <!-- Import Newsleter <script/> -->
          Newsletter
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      FooterContainer: 'bg-black text-white ...',
      SocailMedia: 'flex flex-wrap justify-center items-center text-center',
      Content: 'p-20 w-1/2 border-r border-gray-500 ',
      Info: 'p-20',
      InfoContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap justify-between',

      body1: 'font-bold',
      body2: 'font-light',
      link: 'text-blue-500', 

    }
  }
})
</script>