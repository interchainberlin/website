<template>
  <div :class='FooterContainer'>
    <div :class='SocailMedia'>
      <div :class='Content + Discord'>
        <a href='https://discord.com/invite/vcExX9T'  target='_blank'>
          <img :class='Icon' src='https://www.freepnglogos.com/uploads/discord-logo-png/seven-kingdoms-9.png' alt='Discord Logo'/>
        </a>
        <p :class='body1'>Be part of the journey</p>
        <p :class='body2'>Join our Discord community <br/> to shape the future</p>
      </div>
       <div :class='Content + Twitter'>
        <a href='https://twitter.com/interchain_io' target='_blank' >
          <img :class='Icon' src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png' alt='Discord Logo'/>
        </a>
        <p :class='body1'>Stay up to date</p>
        <p :class='body2'>Follow <a href='https://twitter.com/interchain_io' target='_blank'> @Interchain_io </a> to get <br/> the latest updates. </p>
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
          <a :class='link' href='mailto:contact@interchain.berlin'>contact@interchain.berlin</a>
        </div>
        <div :class='Newsletter'>
          <!-- Import Newsleter <script/> -->
          Newsletter coming soon
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
      SocailMedia: 'flex flex-wrap flex-col md:flex-row justify-center items-center md:text-center',
      Icon: 'w-8 mb-5',
      Content: 'p-20 md:w-1/2 md:border-r md:border-gray-500 flex flex-col flex-wrap justify-center md:items-center md:content-center space-y-6',
      Info: 'p-20',
      InfoContainer: 'xl:container xl:mx-auto p-2 flex flex-wrap flex-col md:flex-row justify-center content-center space-y-3 md:space-x-10',

      body1: 'font-bold',
      body2: 'font-light',
      link: 'font-bold text-blue-500', 

    }
  }
})
</script>