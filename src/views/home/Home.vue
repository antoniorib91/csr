<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    Header,
    Body,
    Footer
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">

</style>