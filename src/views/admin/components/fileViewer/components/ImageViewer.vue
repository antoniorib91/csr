<template>
  <div :class="klass">
    <img src="@/assets/logo.png" width="300px" height="250px"/>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    
  }
})
export default class ImageViewer extends Vue {
  @Prop()
  public klass: string | undefined;

  @Prop()
  public imageSrc: string | undefined;
}
</script>
<style lang="scss">

</style>