<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <ImageViewer klass="col s12 l12 lx12" imageSrc="@/assets/logo.png"></ImageViewer>
      </div>
      <div class="row">
        <ImageViewerForm klass="col s12 l12 lx12"></ImageViewerForm>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';
import ImageViewer from './ImageViewer.vue';
import ImageViewerForm from './ImageViewerForm.vue';


@Component({
  components: {
    ImageViewer,
    ImageViewerForm
  }
})
export default class ImageCard extends Vue {}
</script>
<style lang="scss">

</style>