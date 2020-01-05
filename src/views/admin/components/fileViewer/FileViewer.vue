<template>
  <div class="row">
    <div class="col s12 l9 lx9 offset-l1 offset-lx1">
      <ImageCard></ImageCard>
    </div>
    <div class="col s12 l2 lx2">
      teste
    </div>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';
import ImageCard from './components/ImageCard.vue';

@Component({
  components: {
    ImageCard
  }
})
export default class FileViewer extends Vue {}
</script>
<style lang="scss">

</style>