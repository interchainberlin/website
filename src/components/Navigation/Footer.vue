<template>
  <div :class='FooterContainer'>

    <!-- <SocailMedia /> -->

    <hr/>

    <div :class='Info'>
      <div :class='InfoContainer'>
        <div :class='CopyRight'>
          <p :class='body2'>© 2021 </p>
          <p :class='body2'>Interchain GmbH</p>
        </div>
        <div :class='Contact'>
          <p :class='body2'>Questions? Get in touch at</p>
          <a :class='link' href='mailto:contact@interchain.berlin' target='_blank'>contact@interchain.berlin</a>
        </div>
        <div :class='SocailMediaContainer'>
          <!-- Import Newsleter <script/> -->
          <a href='https://twitter.com/interchain_io' target='_blank'>
            <img :class='Icon' src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png' alt='Twitter'/>
          </a>
          <a href='https://github.com/interchainberlin' target='_blank' >
            <img :class='Icon' src='../../assets/GithubGray.png' alt='Github'/>
          </a>
          <a href='https://interchain-io.medium.com' target='_blank' >
            <img :class='Icon' src='../../assets/Medium_logo.svg.png' alt='Medium'/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// import SocailMedia from './SocialMedia.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    // SocailMedia,
  },
  data() {
    return {
      FooterContainer: 'bg-black text-white ...',
      SocailMediaContainer: 'flex flex-wrap justify-between items-center space-x-6 pt-2 md:pt-0',
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