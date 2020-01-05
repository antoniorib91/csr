<template>
  <div class="row">
    <div>
      Bar
    </div>
    <div class="col s12 l5 xl5">
      <FileImport></FileImport>
    </div>
    <div class="col s12 l7 xl7">
      <div class="container">
        <FileViewer></FileViewer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';
import FileImport from './components/fileImport/FileImport.vue';
import FileViewer from './components/fileViewer/FileViewer.vue';

@Component({
  components: {
    FileImport,
    FileViewer
  }
})
export default class Admin extends Vue {}
</script>

<style scoped>

</style>