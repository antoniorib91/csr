<template>
  <div class="linkIcon">
    <a :href="url">
      <font-awesome-icon :icon="icon" size="lg"></font-awesome-icon>
    </a>
  </div>
</template>
<script lang="ts">
import 'reflect-metadata'
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class LinkIcon extends Vue {

  @Prop({ type: String, required: true }) 
  readonly url: string | undefined;

  @Prop() 
  readonly icon: Array<string> | undefined;

}
</script>
<style lang="scss">
  .linkIcon {
    display: inline;
  }
</style>