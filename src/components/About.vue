<template>
  <div :class='AboutContainerMobile + AboutContainerWeb'>
    <div :class='Content'>
      <h3 :class='subheader'> At Interchain GmbH, </h3>
      <hr/>
      <p :class='body'> We are responsible for stewarding some of the most foundational infrastructure for blockchain ecosystems. Our work helps secure billions of dollars in value across a variety of major blockchain projects, including Cosmos, and we are pioneering new protocols for interoperability across the entire blockchain ecosystem. Our vision is to create a new interconnected ecosystem, a new internet of blockchains: The Interchain.</p>
    </div>
    <div :class='Content'>
      <p :class='body'>Our products include Tendermint Core, a groundbreaking, Byzantine-fault tolerant consensus protocol; the Inter Blockchain Communication protocol, a reliable, ordered, authenticated cross-ledger data transport protocol; and Gaia, the software that powers the Cosmos Hub.</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'About',
  data() {
    return {
      AboutContainerMobile: 'flex flex-wrap flex-col space-y-5 ',
      AboutContainerWeb: 'md:flex-row justify-between items-center p-2 my-40',
      Content: 'w-full md:w-2/5 space-y-5',
      subheader: 'text-4xl',
      body: '', 
    }
  }
})
</script>