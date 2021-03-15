<template>
  <div :class='BannerContainer'>
    <div :class='BannerHeader'>
      <h1 :class='header'>Welcome to <br/> Interchain GmbH</h1>
      <p :class='subheader'>Building the internet of blockchains</p>
      <div :class='BannerProjectLinks'>
        <img src='../../assets/Cube.png'/>
        <p>We are the maintainers of — </p>
        <!-- <img /> Map through project Icons --> 
        <a> Cosmos </a>
        <a> Tendermint Core </a>
        <a> IBC </a>
        <a> Gaia </a>
      </div>
    </div>

    <div :class='BannerImage'>
      <img src='../../assets/BannerImage.png'/>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Banner',
  data() {
    return {
      BannerContainer: 'p-2 flex flex-wrap justify-between h-screen items-center',
      BannerHeader: 'space-y-10',

      header: 'text-6xl',
      subheader: 'text-4xl',

      BannerProjectLinks: 'flex flex-wrap space-x-3',
      BannerImage: '',
    }
  }
})
</script>
